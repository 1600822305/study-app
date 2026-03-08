import { ExportButton } from '@/components/shared';
import { useNavigate } from 'react-router-dom';

const tocData = [
  {
    label: '序章',
    title: '高考数学 · 完整分析报告',
    path: '/math/overview',
    items: [
      '试卷结构（8+3+3+5 模式）',
      '解答题出题规律',
      '六大核心模块及分值占比',
      '18个知识模块完整清单',
      '学习优先级排序',
    ],
  },
  {
    label: '第一阶段',
    title: '数学语言',
    path: null,
    items: [
      { label: '1.0', title: '复数前置知识', path: '/math/prereq' },
      { label: '1.1', title: '复数', path: '/math/complex' },
      { label: '1.1.5', title: '集合前置知识', path: '/math/sets-prereq' },
      { label: '1.2', title: '集合', path: '/math/sets' },
      { label: '1.2.5', title: '逻辑前置知识', path: '/math/logic-prereq' },
      { label: '1.3', title: '逻辑用语', path: '/math/logic' },
    ],
  },
  {
    label: '第二阶段',
    title: '计算工具',
    path: null,
    items: [
      { label: '2.0', title: '不等式前置知识', path: '/math/inequality-prereq' },
      { label: '2.1', title: '不等式', path: '/math/inequality' },
      { label: '2.2', title: '二次函数前置知识', path: '/math/quadratic-prereq' },
      { label: '2.3', title: '二次函数', path: '/math/quadratic' },
    ],
  },
];

export function TableOfContentsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="目录" />
      </div>

      <div className="min-h-[70vh] flex flex-col justify-center">
        {/* 标题 */}
        <h1 className="text-3xl font-black text-gray-900 mb-2 text-center">目 录</h1>
        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10" />

        <div className="space-y-8 max-w-2xl mx-auto w-full">
          {tocData.map((section) => (
            <div key={section.label}>
              {/* 章节标题 */}
              <div
                className={`flex items-center gap-3 mb-3 ${section.path ? 'cursor-pointer hover:text-blue-600' : ''}`}
                onClick={() => section.path && navigate(section.path)}
              >
                <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm font-bold shrink-0">
                  {section.label}
                </span>
                <span className="text-xl font-bold text-gray-900">{section.title}</span>
              </div>

              {/* 子项列表 */}
              <div className="ml-14 space-y-2">
                {section.items.map((item, i) => {
                  const isString = typeof item === 'string';
                  const title = isString ? item : `${item.label}  ${item.title}`;
                  const path = isString ? null : item.path;

                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-2 py-1.5 border-b border-dashed border-gray-200 ${path ? 'cursor-pointer hover:text-blue-600' : ''}`}
                      onClick={() => path && navigate(path)}
                    >
                      <span className="text-gray-600 flex-1">{title}</span>
                      {!isString && (
                        <span className="text-gray-300 text-sm print:hidden">→</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
