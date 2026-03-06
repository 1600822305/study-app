/**
 * React ⇄ SolidJS 桥接层
 * 允许在 React 应用中嵌入 SolidJS 组件，支持响应式 Props 更新和状态保持
 */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { render } from 'solid-js/web';
import { createStore } from 'solid-js/store';
import type { JSX } from 'solid-js';

// ==================== 类型定义 ====================

/** SolidJS 组件类型 */
type SolidComponent<T = any> = (props: T) => JSX.Element;

interface SolidBridgeProps<T extends Record<string, any>> {
  /** SolidJS 组件 */
  component: SolidComponent<T>;
  /** 传递给 SolidJS 组件的 props（响应式） */
  props?: T;
  /** 容器样式 */
  style?: React.CSSProperties;
  /** 容器类名 */
  className?: string;
  /** 卸载时的回调 */
  onUnmount?: () => void;
  /** 自定义 props 比较函数 */
  propsAreEqual?: (prev: T, next: T) => boolean;
  /** 是否启用调试模式 */
  debug?: boolean;
  /** 组件名称（用于调试） */
  debugName?: string;
  /** 错误回调 */
  onError?: (error: Error) => void;
}

// ==================== 工具函数 ====================

function shallowEqual<T extends Record<string, any>>(obj1: T, obj2: T): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

/** 序列化值，移除 SolidJS 代理包装 */
function serializeValue(value: any): any {
  if (value === null || value === undefined) return value;
  if (typeof value !== 'object') return value;
  if (value instanceof Date) return value;
  if (value instanceof Error) return value;
  if (typeof value === 'function') return value;
  if (value instanceof Array) return value.map(serializeValue);
  try {
    return JSON.parse(JSON.stringify(value));
  } catch {
    return { ...value };
  }
}

/** 包装回调函数，自动序列化参数防止 SolidJS 代理泄漏到 React */
function wrapCallback(callback: (...args: any[]) => any): (...args: any[]) => any {
  return (...args: any[]) => {
    const serializedArgs = args.map(serializeValue);
    return callback(...serializedArgs);
  };
}

// ==================== 核心桥接组件 ====================

/**
 * 在 React 中渲染 SolidJS 组件
 *
 * @example
 * ```tsx
 * <SolidBridge
 *   component={SwipeDrawer}
 *   props={{ open, onOpenChange, width: 288 }}
 *   style={{ display: 'contents' }}
 * />
 * ```
 */
export function SolidBridge<T extends Record<string, any>>({
  component: SolidComponentToRender,
  props = {} as T,
  style,
  className,
  onUnmount,
  propsAreEqual = shallowEqual,
  debug = false,
  debugName = 'SolidBridge',
  onError,
}: SolidBridgeProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const disposeRef = useRef<(() => void) | null>(null);
  const propsStoreRef = useRef<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isReady, setIsReady] = useState(false);
  const prevPropsRef = useRef<T>(props);

  const log = useCallback(
    (message: string, ...args: any[]) => {
      if (debug) console.log(`[${debugName}]`, message, ...args);
    },
    [debug, debugName],
  );

  const handleError = useCallback(
    (err: Error) => {
      console.error(`[${debugName}] 错误:`, err);
      setError(err);
      onError?.(err);
    },
    [debugName, onError],
  );

  // 初始化 SolidJS 组件（只执行一次）
  useEffect(() => {
    if (!containerRef.current) return;

    log('初始化 SolidJS 组件');

    try {
      const processedProps: any = {};
      for (const key in props) {
        const value = props[key];
        if (typeof value === 'function') {
          processedProps[key] = wrapCallback(value);
        } else {
          processedProps[key] = serializeValue(value);
        }
      }

      const [store, setStore] = createStore<T>(processedProps);
      propsStoreRef.current = { store, setStore };

      disposeRef.current = render(() => {
        try {
          return SolidComponentToRender(propsStoreRef.current.store as T);
        } catch (err) {
          handleError(err as Error);
          return null;
        }
      }, containerRef.current);

      setIsReady(true);
      log('SolidJS 组件渲染成功');
    } catch (err) {
      handleError(err as Error);
    }

    return () => {
      log('卸载 SolidJS 组件');
      if (disposeRef.current) {
        disposeRef.current();
        disposeRef.current = null;
      }
      propsStoreRef.current = null;
      onUnmount?.();
      setIsReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SolidComponentToRender]);

  // 响应式更新 props（不销毁组件）
  useEffect(() => {
    if (!isReady || !propsStoreRef.current) return;

    const { setStore } = propsStoreRef.current;
    const prevProps = prevPropsRef.current;

    if (propsAreEqual(prevProps, props)) return;

    log('响应式更新 Props');

    try {
      const updates: any = {};
      for (const key in props) {
        if (props[key] !== prevProps[key]) {
          const value = props[key];
          updates[key] = typeof value === 'function' ? wrapCallback(value) : serializeValue(value);
        }
      }
      for (const key in prevProps) {
        if (!(key in props)) {
          updates[key] = undefined as any;
        }
      }

      setStore(updates);
      prevPropsRef.current = props;
    } catch (err) {
      handleError(err as Error);
    }
  }, [props, isReady, propsAreEqual, log, handleError]);

  if (error) {
    return (
      <div className={className} style={{ ...style, padding: 20, backgroundColor: '#fee', border: '2px solid #c33', borderRadius: 8, color: '#c33' }}>
        <h3 style={{ margin: '0 0 10px' }}>SolidJS 组件错误</h3>
        <p style={{ margin: 0, fontSize: 14 }}><strong>{debugName}:</strong> {error.message}</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
      data-solid-bridge="true"
      data-solid-bridge-name={debugName}
    />
  );
}
