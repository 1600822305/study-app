// @ts-nocheck
/**
 * SwipeDrawer — SolidJS 高性能手势抽屉
 * 核心思路：触摸事件 → 普通变量记录偏移 → rAF 直接操作 DOM style
 * 不经过 SolidJS 响应式系统，确保 60fps
 */
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';

export interface SwipeDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  width?: number;
  enableSwipeGesture?: boolean;
  portalId?: string;
  bgColor?: string;
}

// 手势配置常量
const EDGE_ZONE = 30;           // 左侧边缘触发区域（px）
const DRAG_START_DELTA = 10;    // 超过此水平距离才算开始拖拽
const SNAP_RATIO = 0.3;         // 滑过抽屉宽度 30% 即松手触发开/关
const ANIM_CURVE = 'cubic-bezier(0.4, 0, 0.2, 1)';
const ANIM_DURATION = '0.3s';
const OVERLAY_MAX_ALPHA = 0.4;

export default function SwipeDrawer(props: SwipeDrawerProps) {
  // ---- 响应式访问器 ----
  const drawerWidth = () => props.width ?? 288;
  const opened = () => props.open;

  // ---- DOM 引用 ----
  let panelEl: HTMLDivElement | undefined;
  let overlayEl: HTMLDivElement | undefined;

  // ---- 拖拽用的普通变量（不触发渲染） ----
  let originX = 0;
  let originY = 0;
  let dragDelta = 0;
  let pendingFrame: number | null = null;

  // ---- 少量需要触发渲染的 signal ----
  const [dragging, setDragging] = createSignal(false);
  const [validGesture, setValidGesture] = createSignal(false);

  // =========== 直接写 DOM（跳过响应式） ===========
  function applyTransform(offset: number) {
    if (!panelEl || !overlayEl) return;
    const w = drawerWidth();
    const base = opened() ? 0 : -w;
    const clamped = Math.min(0, Math.max(-w, base + offset));
    panelEl.style.transform = `translate3d(${clamped}px, 0, 0)`;

    const ratio = opened()
      ? 1 - Math.abs(offset) / w
      : offset / w;
    const alpha = Math.max(0, Math.min(OVERLAY_MAX_ALPHA, ratio * OVERLAY_MAX_ALPHA));
    overlayEl.style.backgroundColor = `rgba(0,0,0,${alpha})`;
  }

  // =========== Touch 事件处理 ===========
  function onPointerDown(ev: TouchEvent) {
    const t = ev.touches[0];
    originX = t.clientX;
    originY = t.clientY;
    dragDelta = 0;
    setValidGesture(false);
    setDragging(false);

    if (!opened() && t.clientX <= EDGE_ZONE) {
      setValidGesture(true);
    } else if (opened()) {
      setValidGesture(true);
    }
  }

  function onPointerMove(ev: TouchEvent) {
    if (!validGesture()) return;
    const t = ev.touches[0];
    const dx = t.clientX - originX;
    const dy = t.clientY - originY;

    // 垂直滑动 → 放弃手势
    if (!dragging() && Math.abs(dy) > Math.abs(dx)) {
      setValidGesture(false);
      return;
    }

    if (!dragging() && Math.abs(dx) > DRAG_START_DELTA) {
      setDragging(true);
      if (panelEl) panelEl.style.transition = 'none';
    }

    if (dragging()) {
      dragDelta = opened() ? Math.min(0, dx) : Math.max(0, dx);
      if (pendingFrame === null) {
        pendingFrame = requestAnimationFrame(() => {
          applyTransform(dragDelta);
          pendingFrame = null;
        });
      }
      if (ev.cancelable) ev.preventDefault();
    }
  }

  function onPointerUp() {
    if (pendingFrame !== null) {
      cancelAnimationFrame(pendingFrame);
      pendingFrame = null;
    }
    if (!dragging()) {
      setValidGesture(false);
      return;
    }

    const delta = dragDelta;
    const snapPx = drawerWidth() * SNAP_RATIO;
    const wasOpen = opened();

    setDragging(false);
    dragDelta = 0;
    setValidGesture(false);

    // 恢复动画
    if (panelEl) panelEl.style.transition = `transform ${ANIM_DURATION} ${ANIM_CURVE}`;

    const w = drawerWidth();
    if (wasOpen) {
      if (Math.abs(delta) > snapPx) {
        if (panelEl) panelEl.style.transform = `translate3d(-${w}px, 0, 0)`;
        if (overlayEl) overlayEl.style.backgroundColor = 'rgba(0,0,0,0)';
        props.onOpenChange(false);
      } else {
        if (panelEl) panelEl.style.transform = 'translate3d(0, 0, 0)';
        if (overlayEl) overlayEl.style.backgroundColor = `rgba(0,0,0,${OVERLAY_MAX_ALPHA})`;
      }
    } else {
      if (delta > snapPx) {
        if (panelEl) panelEl.style.transform = 'translate3d(0, 0, 0)';
        if (overlayEl) overlayEl.style.backgroundColor = `rgba(0,0,0,${OVERLAY_MAX_ALPHA})`;
        props.onOpenChange(true);
      } else {
        if (panelEl) panelEl.style.transform = `translate3d(-${w}px, 0, 0)`;
        if (overlayEl) overlayEl.style.backgroundColor = 'rgba(0,0,0,0)';
      }
    }
  }

  // =========== 绑定全局 touch ===========
  createEffect(() => {
    if (props.enableSwipeGesture === false) return;
    document.addEventListener('touchstart', onPointerDown, { passive: true });
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('touchend', onPointerUp, { passive: true });
    document.addEventListener('touchcancel', onPointerUp, { passive: true });
    onCleanup(() => {
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerUp);
      document.removeEventListener('touchcancel', onPointerUp);
      if (pendingFrame !== null) cancelAnimationFrame(pendingFrame);
    });
  });

  // =========== open 状态同步（按钮点击触发） ===========
  let firstMount = true;

  createEffect(() => {
    const isOpened = opened();
    const isDragging = dragging();
    if (isDragging) return; // 拖拽中不响应 props 变化

    const w = drawerWidth();
    if (panelEl) {
      if (firstMount) {
        panelEl.style.transition = 'none';
        panelEl.style.transform = isOpened ? 'translate3d(0,0,0)' : `translate3d(-${w}px,0,0)`;
        requestAnimationFrame(() => {
          if (panelEl) panelEl.style.transition = `transform ${ANIM_DURATION} ${ANIM_CURVE}`;
        });
        firstMount = false;
      } else {
        panelEl.style.transition = `transform ${ANIM_DURATION} ${ANIM_CURVE}`;
        panelEl.style.transform = isOpened ? 'translate3d(0,0,0)' : `translate3d(-${w}px,0,0)`;
      }
    }
    if (overlayEl) {
      overlayEl.style.backgroundColor = isOpened ? `rgba(0,0,0,${OVERLAY_MAX_ALPHA})` : 'rgba(0,0,0,0)';
    }
  });

  const visible = () => opened() || dragging();

  // =========== JSX ===========
  return (
    <Portal>
      {/* 半透明遮罩 */}
      <div
        ref={overlayEl}
        style={{
          position: 'fixed',
          inset: '0',
          "z-index": 40,
          "background-color": 'rgba(0,0,0,0)',
          opacity: visible() ? 1 : 0,
          "pointer-events": visible() ? 'auto' : 'none',
          transition: `opacity ${ANIM_DURATION}`,
          "will-change": 'opacity',
        }}
        onClick={() => props.onOpenChange(false)}
      />

      {/* 抽屉面板 */}
      <div
        ref={panelEl}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${drawerWidth()}px`,
          "z-index": 50,
          background: props.bgColor ?? '#fff',
          "border-radius": '0 16px 16px 0',
          "box-shadow": '4px 0 20px rgba(0,0,0,0.12)',
          transform: opened() ? 'translate3d(0,0,0)' : `translate3d(-${drawerWidth()}px,0,0)`,
          transition: 'none',
          display: 'flex',
          "flex-direction": 'column',
          overflow: 'hidden',
          "will-change": 'transform',
          "backface-visibility": 'hidden',
          "padding-top": 'var(--sat, 0px)',
        }}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        {/* React Portal 目标容器 */}
        <div style={{ flex: '1', overflow: 'hidden' }} id={props.portalId ?? 'solid-drawer-content'} />
      </div>
    </Portal>
  );
}
