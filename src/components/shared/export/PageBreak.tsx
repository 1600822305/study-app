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
 * - 预览模式：显示红色虚线分页标记，方便排版调整
 */
export function PageBreak({ label }: PageBreakProps) {
  const { isPreview, isPrinting } = usePrintMode();

  // 正常屏幕模式：不渲染
  if (!isPrinting && !isPreview) return null;

  // 预览模式：显示可视化分页标记
  if (isPreview) {
    return (
      <div className="page-break-marker">
        <div className="page-break-line" />
        <span className="page-break-label">{label || '分页'}</span>
        <div className="page-break-line" />
      </div>
    );
  }

  // 打印模式：纯 CSS 分页
  return <div className="print-page-break" />;
}
