import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Zap, Target, Clock } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 md:mb-3">StudyGoGoGo</h1>
        <p className="text-sm md:text-lg text-gray-500">AI驱动 · 第一性原理 · 零基础逆袭高考</p>
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-3 md:mt-5 text-xs md:text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            距高考约93天
          </span>
          <span className="flex items-center gap-1">
            <Target size={14} />
            目标：90-120分
          </span>
        </div>
      </div>

      <div className="grid gap-3 md:gap-4 md:grid-cols-2">
        <Link
          to="/math/prereq"
          className="group block p-4 md:p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <BookOpen size={20} className="text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                1.0 复数前置知识
              </h3>
              <p className="text-xs text-gray-400">30分钟 · 初中基础</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">捡回遗忘的初中数学，为复数学习扫除障碍</p>
        </Link>

        <Link
          to="/math/complex"
          className="group block p-4 md:p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Calculator size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                1.1 复数
              </h3>
              <p className="text-xs text-gray-400">2小时 · 必拿5分</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">从零理解复数，高考最简单的5分，开局建立信心</p>
        </Link>

        <Link
          to="/math/sets"
          className="group block p-4 md:p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Zap size={20} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                1.2 集合
              </h3>
              <p className="text-xs text-gray-400">2-3小时 · 必拿5分</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">集合的表示与运算，数轴法一招通杀</p>
        </Link>

        <Link
          to="/math/logic"
          className="group block p-4 md:p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Zap size={20} className="text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                1.3 常用逻辑用语
              </h3>
              <p className="text-xs text-gray-400">2-3小时 · 常考5分</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">充分必要条件 + 命题否定，集合法判断最靠谱</p>
        </Link>
      </div>

      <div className="mt-6 md:mt-8 p-4 md:p-5 bg-blue-50 border border-blue-200 rounded-2xl">
        <h3 className="font-bold text-blue-800 mb-2">📌 学习路线</h3>
        <p className="text-sm text-blue-700 leading-relaxed">
          复数→集合→逻辑→不等式→二次函数→函数→向量→三角→数列→几何→解析几何→概率→导数
        </p>
        <p className="text-xs text-blue-500 mt-2">
          前23天覆盖约80-100分考点 · 54天学完全部知识 · 剩余39天刷题冲刺
        </p>
      </div>
    </div>
  );
}
