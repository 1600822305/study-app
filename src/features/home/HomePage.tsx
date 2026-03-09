import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Target, Clock, TrendingUp } from 'lucide-react';

interface ModuleCard {
  path: string;
  label: string;
  time: string;
  desc: string;
  prereq?: boolean;
}

interface Phase {
  title: string;
  color: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  modules: ModuleCard[];
}

const phases: Phase[] = [
  {
    title: '第一阶段 · 数学语言',
    color: 'blue',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: <BookOpen size={20} />,
    modules: [
      { path: '/math/prereq', label: '1.0 复数前置知识', time: '30分钟', desc: '初中数学回顾，扫除障碍', prereq: true },
      { path: '/math/complex', label: '1.1 复数', time: '2小时', desc: '高考最简单的5分，开局建立信心' },
      { path: '/math/sets-prereq', label: '1.1.5 集合前置知识', time: '20分钟', desc: '属于、包含、交并补概念回顾', prereq: true },
      { path: '/math/sets', label: '1.2 集合', time: '2-3小时', desc: '集合的表示与运算，数轴法一招通杀' },
      { path: '/math/logic-prereq', label: '1.2.5 逻辑前置知识', time: '15分钟', desc: '命题、条件、量词基础概念', prereq: true },
      { path: '/math/logic', label: '1.3 逻辑用语', time: '2-3小时', desc: '充分必要条件 + 命题否定' },
    ],
  },
  {
    title: '第二阶段 · 计算工具',
    color: 'emerald',
    borderColor: 'border-emerald-200',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    icon: <Calculator size={20} />,
    modules: [
      { path: '/math/inequality-prereq', label: '2.0 不等式前置知识', time: '15-20分钟', desc: '正负数运算、解方程回顾', prereq: true },
      { path: '/math/inequality', label: '2.1 不等式', time: '3-4小时', desc: '一元二次不等式 + 均值不等式' },
      { path: '/math/quadratic-prereq', label: '2.2 二次函数前置知识', time: '20分钟', desc: '抛物线、顶点、开口方向回顾', prereq: true },
      { path: '/math/quadratic', label: '2.3 二次函数', time: '3-4小时', desc: '三种表达形式 + 图像与性质' },
    ],
  },
  {
    title: '第三阶段 · 函数思维',
    color: 'purple',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    icon: <TrendingUp size={20} />,
    modules: [
      { path: '/math/function-review', label: '3.0 初中函数回顾', time: '30分钟', desc: '一次/反比例函数核心概念', prereq: true },
      { path: '/math/function-prereq', label: '3.0.5 区间与定义域基础', time: '20分钟', desc: '区间表示、定义域求法', prereq: true },
      { path: '/math/function-concept', label: '3.1 函数的概念与性质', time: '3-4小时', desc: '定义域、值域、单调性、奇偶性' },
      { path: '/math/elementary-func-prereq', label: '3.1.5 初等函数前置知识', time: '20分钟', desc: '指数、对数运算基础', prereq: true },
      { path: '/math/elementary-func', label: '3.2 基本初等函数', time: '4-5小时', desc: '指数/对数/幂函数全攻略' },
      { path: '/math/function-graph-prereq', label: '3.2.5 图像与零点前置知识', time: '15分钟', desc: '函数图像变换基础', prereq: true },
      { path: '/math/function-graph', label: '3.3 函数图像与零点', time: '3-4小时', desc: '图像变换 + 零点存在性定理' },
      { path: '/math/derivative-prereq', label: '3.3.5 导数前置知识', time: '20分钟', desc: '极限思想、瞬时变化率', prereq: true },
      { path: '/math/derivative-basic', label: '3.4 导数基础', time: '4-5小时', desc: '求导公式 + 单调性判断' },
    ],
  },
];

export function HomePage() {
  return (
    <div>
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 md:mb-3">StudyGoGoGo</h1>
        <p className="text-sm md:text-lg text-gray-500">AI驱动 · 第一性原理 · 零基础逆袭高考</p>
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-3 md:mt-5 text-xs md:text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            距高考约88天
          </span>
          <span className="flex items-center gap-1">
            <Target size={14} />
            目标：90-120分
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {phases.map((phase) => (
          <section key={phase.title}>
            <div className={`flex items-center gap-2 mb-3 ${phase.textColor}`}>
              <div className={`w-8 h-8 rounded-lg ${phase.iconBg} flex items-center justify-center ${phase.iconColor}`}>
                {phase.icon}
              </div>
              <h2 className="font-bold text-lg">{phase.title}</h2>
            </div>
            <div className="grid gap-2.5 md:gap-3 md:grid-cols-2">
              {phase.modules.map((m) => (
                <Link
                  key={m.path}
                  to={m.path}
                  className={`group block p-3.5 md:p-5 bg-white rounded-xl border ${
                    m.prereq ? 'border-gray-100' : 'border-gray-200'
                  } hover:border-blue-400 hover:shadow-md transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className={`font-bold group-hover:text-blue-600 transition-colors ${
                      m.prereq ? 'text-gray-500 text-sm' : 'text-gray-800'
                    }`}>
                      {m.prereq && <span className="text-amber-500 mr-1">📚</span>}
                      {m.label}
                    </h3>
                    <span className="text-xs text-gray-400 shrink-0 ml-2">{m.time}</span>
                  </div>
                  <p className="text-sm text-gray-500">{m.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-6 md:mt-8 p-4 md:p-5 bg-blue-50 border border-blue-200 rounded-2xl">
        <h3 className="font-bold text-blue-800 mb-2">📌 学习路线</h3>
        <p className="text-sm text-blue-700 leading-relaxed">
          复数 → 集合 → 逻辑 → 不等式 → 二次函数 → 函数概念与性质 → 基本初等函数 → 函数图像与零点 → 导数 → 向量 → 三角 → 数列 → 几何 → 解析几何 → 概率
        </p>
        <p className="text-xs text-blue-500 mt-2">
          每个主题自带前置知识模块，确保零基础也能跟上 · 当前已覆盖第一至第三阶段
        </p>
      </div>
    </div>
  );
}
