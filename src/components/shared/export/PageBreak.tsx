import { usePrintMode } from '@/hooks/usePrintMode';

interface PageBreakProps {
  /** 可选标签，预览模式下显示（如 "第2页开始"） */
  label?: string;
}

/**
 * 手动分页标记
 *
 * - 屏幕正常浏览：完全不可见
 * - 打印模式：在此处强制分页（break-before: page）
 * - 预览模式：模拟真实分页 — 结束当前页面，灰色间隔，开始新页面
 */
export function PageBreak({ label }: PageBreakProps) {
  const { isPreview, isPrinting } = usePrintMode();

  // 正常屏幕模式：不渲染
  if (!isPrinting && !isPreview) return null;

  // 预览模式：模拟真实页面分割
  if (isPreview) {
    return (
      <div className="preview-page-break">
        {/* 当前页底部留白 */}
        <div className="preview-page-end" />
        {/* 灰色间隔区 + 分页标签 */}
        <div className="preview-page-gap">
          <span className="page-break-label">{label || '分页'}</span>
        </div>
        {/* 新页面顶部 */}
        <div className="preview-page-start" />
      </div>
    );
  }

  // 打印模式：纯 CSS 分页
  return <div className="print-page-break" />;
}
