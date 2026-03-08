import { useState, useRef, useEffect } from 'react';
import { Printer, FileDown, ChevronDown, Eye, X } from 'lucide-react';

import { usePrintMode } from '@/hooks/usePrintMode';

interface ExportButtonProps {
  /** 导出文档标题 */
  title?: string;
}

/**
 * 导出按钮：点击直接导出 PDF，或展开菜单选择导出选项
 */
export function ExportButton({ title }: ExportButtonProps) {
  const { startPrint, isPrinting, isPreview, togglePreview } = usePrintMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭菜单
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const handleExport = (showAnswers: boolean) => {
    setMenuOpen(false);
    startPrint({ title, showAnswers });
  };

  const handlePreview = (showAnswers: boolean) => {
    setMenuOpen(false);
    togglePreview({ title, showAnswers });
  };

  // 预览模式：显示浮动工具栏
  if (isPreview) {
    return (
      <div className="preview-toolbar">
        <span className="text-sm font-medium">A4 打印预览</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              togglePreview();
              setTimeout(() => startPrint({ title, showAnswers: false }), 100);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm font-medium"
          >
            <Printer size={14} />
            导出 PDF
          </button>
          <button
            onClick={() => togglePreview()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer text-sm font-medium"
          >
            <X size={14} />
            退出预览
          </button>
        </div>
      </div>
    );
  }

  if (isPrinting) return null;

  return (
    <div className="relative inline-block print:hidden" ref={menuRef}>
      <div className="flex items-center">
        {/* 主按钮：直接导出（不含答案） */}
        <button
          onClick={() => handleExport(false)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-l-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm font-medium"
          title="导出 PDF"
        >
          <Printer size={16} />
          <span>导出 PDF</span>
        </button>

        {/* 下拉箭头 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center px-2 py-2 bg-blue-600 text-white rounded-r-lg border-l border-blue-500 hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <ChevronDown size={16} className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* 下拉菜单 */}
      {menuOpen && (
        <div className="absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <div className="px-3 py-1.5 text-xs text-gray-400 font-medium border-b border-gray-100">导出 PDF</div>
          <button
            onClick={() => handleExport(false)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <FileDown size={16} className="text-blue-500" />
            <div className="text-left">
              <p className="font-medium">练习卷模式</p>
              <p className="text-xs text-gray-400">不含答案，适合练习</p>
            </div>
          </button>
          <button
            onClick={() => handleExport(true)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <FileDown size={16} className="text-green-500" />
            <div className="text-left">
              <p className="font-medium">完整讲义模式</p>
              <p className="text-xs text-gray-400">含答案和解析</p>
            </div>
          </button>

          <div className="px-3 py-1.5 text-xs text-gray-400 font-medium border-t border-b border-gray-100 mt-1">屏幕预览</div>
          <button
            onClick={() => handlePreview(false)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Eye size={16} className="text-purple-500" />
            <div className="text-left">
              <p className="font-medium">A4 预览（练习卷）</p>
              <p className="text-xs text-gray-400">在屏幕上模拟 A4 纸张效果</p>
            </div>
          </button>
          <button
            onClick={() => handlePreview(true)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Eye size={16} className="text-orange-500" />
            <div className="text-left">
              <p className="font-medium">A4 预览（含答案）</p>
              <p className="text-xs text-gray-400">在屏幕上模拟完整讲义效果</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
