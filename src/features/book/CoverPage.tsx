import { ExportButton } from '@/components/shared';

export function CoverPage() {
  return (
    <div>
      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="封面" />
      </div>

      {/* 封面：打印时占满整个A4页 */}
      <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-8 print:min-h-0 print:h-[281mm]">
        {/* 顶部装饰线 */}
        <div className="w-24 h-1 bg-blue-500 rounded-full mb-12" />

        {/* 主标题 */}
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-wide">
          高考数学
        </h1>
        <h2 className="text-2xl font-bold text-blue-600 mb-8">
          完整学习手册
        </h2>

        {/* 副标题 */}
        <p className="text-lg text-gray-500 mb-16 max-w-md leading-relaxed">
          从零基础到高考 · 系统化学习路径
        </p>

        {/* 标签 */}
        <div className="flex gap-4 mb-16">
          <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold">
            2026新高考
          </span>
          <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full font-bold">
            湖南卷
          </span>
          <span className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full font-bold">
            150分 · 19题
          </span>
        </div>

        {/* 分隔线 */}
        <div className="w-48 h-px bg-gray-200 mb-12" />

        {/* 底部信息 */}
        <div className="text-gray-400 space-y-2">
          <p className="text-sm">StudyGoGoGo</p>
          <p className="text-xs">2026年3月</p>
        </div>
      </div>
    </div>
  );
}
