import { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface PrintOptions {
  /** 文档标题（显示在打印页眉） */
  title?: string;
  /** 是否显示练习题答案 */
  showAnswers?: boolean;
  /** 只打印答案（隐藏教学内容） */
  answersOnly?: boolean;
}

interface PrintContextValue {
  /** 是否处于打印/预览模式（Collapsible 展开、隐藏交互元素） */
  isPrinting: boolean;
  /** 是否处于屏幕预览模式（A4 纸张模拟） */
  isPreview: boolean;
  /** 当前打印选项 */
  printOptions: PrintOptions;
  /** 触发打印流程 */
  startPrint: (options?: PrintOptions) => void;
  /** 切换屏幕预览模式 */
  togglePreview: (options?: PrintOptions) => void;
}

const PrintContext = createContext<PrintContextValue>({
  isPrinting: false,
  isPreview: false,
  printOptions: {},
  startPrint: () => {},
  togglePreview: () => {},
});

export function PrintProvider({ children }: { children: React.ReactNode }) {
  // Support URL query params: ?print=true&showAnswers=true&preview=true
  const urlParams = new URLSearchParams(window.location.search);
  const urlPrint = urlParams.get('print') === 'true';
  const urlShowAnswers = urlParams.get('showAnswers') === 'true';
  const urlPreview = urlParams.get('preview') === 'true';

  const [isPrinting, setIsPrinting] = useState(urlPrint);
  const [isPreview, setIsPreview] = useState(urlPrint && urlPreview);
  const [printOptions, setPrintOptions] = useState<PrintOptions>(
    urlPrint ? { showAnswers: urlShowAnswers } : {},
  );

  const startPrint = useCallback((options: PrintOptions = {}) => {
    // 如果正在预览，先退出预览再打印
    setIsPreview(false);
    setPrintOptions(options);
    setIsPrinting(true);
  }, []);

  const togglePreview = useCallback((options: PrintOptions = {}) => {
    setIsPreview((prev) => {
      if (prev) {
        // 退出预览：重置所有状态
        setIsPrinting(false);
        setPrintOptions({});
        // 恢复滚动位置
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          // 恢复 main 内滚动容器
          const scrollContainer = document.querySelector('main > div');
          if (scrollContainer) scrollContainer.scrollTop = 0;
        });
        return false;
      }
      // 进入预览
      setPrintOptions(options);
      setIsPrinting(true);
      // 滚动到顶部
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
      return true;
    });
  }, []);

  // 同步 .print-preview-mode 到 <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isPreview) {
      html.classList.add('print-preview-mode');
    } else {
      html.classList.remove('print-preview-mode');
    }
    return () => {
      html.classList.remove('print-preview-mode');
    };
  }, [isPreview]);

  // isPrinting → true 且非预览模式 → 等 DOM 更新后触发 window.print()
  useEffect(() => {
    if (!isPrinting || isPreview) return;

    // 将章节标题写入 document.title，让浏览器导出 PDF 时默认文件名为章节名
    const originalTitle = document.title;
    if (printOptions.title) {
      document.title = printOptions.answersOnly
        ? `${printOptions.title}（答案册）`
        : printOptions.showAnswers
          ? `${printOptions.title}（含答案）`
          : printOptions.title;
    }

    const timer = setTimeout(() => {
      window.print();
    }, 400);

    return () => {
      clearTimeout(timer);
      document.title = originalTitle;
    };
  }, [isPrinting, isPreview, printOptions]);

  // 监听浏览器 afterprint 事件，自动退出打印模式
  useEffect(() => {
    const handleAfterPrint = () => {
      setIsPrinting(false);
      setPrintOptions({});
    };

    window.addEventListener('afterprint', handleAfterPrint);
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, []);

  return (
    <PrintContext.Provider value={{ isPrinting, isPreview, printOptions, startPrint, togglePreview }}>
      {children}
    </PrintContext.Provider>
  );
}

/**
 * 获取打印模式状态和控制函数
 *
 * - `isPrinting`: 是否处于打印/预览模式（Collapsible 全部展开、隐藏交互元素）
 * - `isPreview`: 是否处于屏幕预览模式（A4 纸张模拟，不触发 window.print）
 * - `printOptions`: 当前打印选项（标题、是否显示答案等）
 * - `startPrint(options?)`: 触发打印流程
 * - `togglePreview(options?)`: 切换屏幕预览模式
 */
export function usePrintMode() {
  return useContext(PrintContext);
}
