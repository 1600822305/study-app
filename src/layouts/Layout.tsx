import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, ChevronLeft, ChevronRight, Home, Calculator, Menu, Settings, MessageCircle, Printer } from 'lucide-react';

import { APP_NAME } from '@/lib/constants';
import { isMobile } from '@/lib/env';
import { SolidBridge } from '@/shared/bridges';
import SwipeDrawer from '@/solid/components/SwipeDrawer.solid';
import { ChatPanel } from '@/features/chat/ChatPanel';
import { SubtitlePanel } from '@/components/shared';

interface NavChild {
  path: string;
  label: string;
}

interface NavGroup {
  groupLabel: string;
  items: NavChild[];
}

interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
  children?: (NavChild | NavGroup)[];
}

function isNavGroup(item: NavChild | NavGroup): item is NavGroup {
  return 'groupLabel' in item;
}

const navItems: NavItem[] = [
  { path: '/', label: '首页', icon: <Home size={18} /> },
  {
    path: '/math',
    label: '高考数学',
    icon: <Calculator size={18} />,
    children: [
      { path: '/math/cover', label: '📕 封面' },
      { path: '/math/toc', label: '📑 目录' },
      { path: '/math/overview', label: '📊 高考分析报告' },
      { path: '/math/score-grading', label: '📋 分值判定标准' },
      {
        groupLabel: '第一阶段：数学语言',
        items: [
          { path: '/math/prereq', label: '1.0 复数前置知识' },
          { path: '/math/complex', label: '1.1 复数' },
          { path: '/math/sets-prereq', label: '1.1.5 集合前置知识' },
          { path: '/math/sets', label: '1.2 集合' },
          { path: '/math/logic-prereq', label: '1.2.5 逻辑前置知识' },
          { path: '/math/logic', label: '1.3 逻辑用语' },
          { path: '/math/stage1-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第二阶段：计算工具',
        items: [
          { path: '/math/inequality', label: '2.1 不等式' },
          { path: '/math/absolute-value', label: '2.2 绝对值' },
          { path: '/math/stage2-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第三阶段：函数思维',
        items: [
          { path: '/math/function-review', label: '3.0 初中函数回顾' },
          { path: '/math/quadratic', label: '3.0.5 二次函数' },
          { path: '/math/function-concept', label: '3.1 函数的概念与性质' },
          { path: '/math/piecewise', label: '3.1.3 分段函数' },
          { path: '/math/elementary-func-prereq', label: '3.1.8 初等函数前置知识' },
          { path: '/math/elementary-func', label: '3.2 基本初等函数' },
          { path: '/math/log-compare', label: '3.2.5 对数比大小' },
          { path: '/math/function-graph', label: '3.3 函数图像与零点' },
          { path: '/math/derivative-prereq', label: '3.3.5 导数前置知识' },
          { path: '/math/derivative-basic', label: '3.4 导数基础' },
          { path: '/math/derivative-application', label: '3.5 导数应用（上）' },
          { path: '/math/derivative-application-2', label: '3.6 导数应用（下）' },
          { path: '/math/extrema', label: '3.6.2 极值与最值' },
          { path: '/math/closed-max', label: '3.6.3 闭区间最值' },
          { path: '/math/always-exists', label: '3.6.4 恒成立与存在性' },
          { path: '/math/reverse-param', label: '3.6.5 反求参数' },
          { path: '/math/stage3-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第四阶段：平面向量',
        items: [
          { path: '/math/vector-prereq', label: '4.0 向量前置知识' },
          { path: '/math/vector', label: '4.1 平面向量' },
          { path: '/math/vector-trig-prereq', label: '4.2 三角函数速成' },
          { path: '/math/vector-coord', label: '4.3 坐标运算与数量积' },
          { path: '/math/stage4-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第五阶段：三角世界',
        items: [
          { path: '/math/trig-prereq', label: '5.0 三角前置知识' },
          { path: '/math/trig-func', label: '5.1 三角函数' },
          { path: '/math/trig-identity', label: '5.2 三角恒等变换' },
          { path: '/math/solve-triangle', label: '5.3 解三角形' },
          { path: '/math/stage5-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第六阶段：数列套路',
        items: [
          { path: '/math/sequence-prereq', label: '6.0 数列前置知识' },
          { path: '/math/sequence-basic', label: '6.1 等差与等比数列' },
          { path: '/math/sequence-recur', label: '6.2 递推数列求通项' },
          { path: '/math/sequence-sum', label: '6.3 数列求和方法' },
          { path: '/math/sequence-adv', label: '6.4 数列压轴扩展' },
          { path: '/math/stage6-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第七阶段：立体几何',
        items: [
          { path: '/math/geo-basics', label: '7.0 初中几何基础' },

          { path: '/math/geo3d-relation', label: '7.1 点线面位置关系' },
          { path: '/math/geo3d-vector-prereq', label: '7.1.5 空间向量前置知识' },
          { path: '/math/geo3d-vector', label: '7.2 空间向量法' },
          { path: '/math/geo3d-solid', label: '7.3 空间几何体' },
          { path: '/math/stage7-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第八阶段：解析几何',
        items: [
          { path: '/math/line', label: '8.0 直线' },
          { path: '/math/circle', label: '8.1 圆' },
          { path: '/math/conic-basic', label: '8.2 椭圆' },
          { path: '/math/conic-line', label: '8.3 双曲线' },
          { path: '/math/stage8-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第九阶段：概率统计',
        items: [
          { path: '/math/counting', label: '9.0 计数原理' },
          { path: '/math/probability', label: '9.1 概率基础' },
          { path: '/math/statistics', label: '9.2 统计与随机变量' },
          { path: '/math/stage9-exam', label: '📝 阶段考试' },
        ],
      },
      {
        groupLabel: '第十阶段：导数进阶',
        items: [
          { path: '/math/derivative-comp', label: '10.0 导数综合' },
          { path: '/math/derivative-hard', label: '10.1 导数压轴' },
          { path: '/math/stage10-exam', label: '📝 阶段考试' },
        ],
      },
    ],
  },
  { path: '/chat', label: 'AI 对话', icon: <MessageCircle size={18} /> },
  { path: '/settings', label: '设置', icon: <Settings size={18} /> },
  { path: '/math/print-test', label: '打印测量', icon: <Printer size={18} /> },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(() => {
    try { return JSON.parse(sessionStorage.getItem('nav-sections') || '[]'); } catch { return []; }
  });
  const [expandedGroups, setExpandedGroups] = useState<string[]>(() => {
    try { return JSON.parse(sessionStorage.getItem('nav-groups') || '[]'); } catch { return []; }
  });
  const [mainDrawerPortal, setMainDrawerPortal] = useState<HTMLElement | null>(null);

  const mobile = isMobile();
  const isChatRoute = location.pathname.startsWith('/chat');

  // 监听 SolidJS 创建的主抽屉容器
  useEffect(() => {
    if (!mobile) return;
    const find = () => {
      const el = document.getElementById('solid-main-drawer');
      if (el !== mainDrawerPortal) setMainDrawerPortal(el);
    };
    find();
    const obs = new MutationObserver(find);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, [mobile, mainDrawerPortal]);

  const handleMainDrawerChange = useCallback((open: boolean) => {
    setMobileOpen(open);
  }, []);

  const toggleSection = (path: string) => {
    setExpandedSections((prev) => {
      const next = prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path];
      sessionStorage.setItem('nav-sections', JSON.stringify(next));
      return next;
    });
  };

  const toggleGroup = (label: string) => {
    setExpandedGroups((prev) => {
      const next = prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label];
      sessionStorage.setItem('nav-groups', JSON.stringify(next));
      return next;
    });
  };

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(path + '/');

  const sidebar = (
    <div
      className={`h-full flex flex-col bg-slate-900 text-white transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-700">
        <BookOpen size={24} className="text-blue-400 shrink-0" />
        {!collapsed && <h1 className="text-lg font-bold tracking-tight">{APP_NAME}</h1>}
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {navItems.map((item) => (
          <div key={item.path}>
            {item.children ? (
              <div className="mb-1">
                <button
                  onClick={() => toggleSection(item.path)}
                  className="w-full flex items-center gap-3 px-4 py-3 md:py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                >
                  {item.icon}
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left font-medium">{item.label}</span>
                      <ChevronRight
                        size={14}
                        className={`transition-transform ${expandedSections.includes(item.path) ? 'rotate-90' : ''}`}
                      />
                    </>
                  )}
                </button>
                {!collapsed && expandedSections.includes(item.path) && (
                  <div className="mt-1">
                    {item.children.map((entry, idx) =>
                      isNavGroup(entry) ? (
                        <div key={entry.groupLabel} className="mb-1">
                          {idx > 0 && <div className="mx-4 my-2 border-t border-slate-700/40" />}
                          <button
                            onClick={() => toggleGroup(entry.groupLabel)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
                          >
                            <ChevronRight
                              size={14}
                              className={`shrink-0 transition-transform ${expandedGroups.includes(entry.groupLabel) ? 'rotate-90' : ''}`}
                            />
                            <span className="font-medium">{entry.groupLabel}</span>
                          </button>
                          {expandedGroups.includes(entry.groupLabel) && (
                            <div className="ml-5 border-l-2 border-slate-700/60">
                              {entry.items.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block pl-4 pr-4 py-2.5 md:py-2 text-sm transition-colors ${
                                    isActive(child.path)
                                      ? 'text-blue-400 bg-blue-500/10 font-medium border-l-2 border-blue-400 -ml-[2px]'
                                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={entry.path}
                          to={entry.path}
                          onClick={() => setMobileOpen(false)}
                          className={`block pl-10 pr-4 py-2.5 md:py-2 text-sm transition-colors ${
                            isActive(entry.path)
                              ? 'text-blue-400 bg-blue-500/10 font-medium'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                          }`}
                        >
                          {entry.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 md:py-2.5 text-sm transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-400 bg-blue-500/10 font-medium'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden md:flex items-center justify-center py-3 border-t border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#f5f5ec] overflow-hidden">
      <aside className="hidden md:block shrink-0">{sidebar}</aside>

      {/* ====== 移动端：SolidJS 手势主抽屉 ====== */}
      {mobile && (
        <>
          <SolidBridge
            component={SwipeDrawer as any}
            props={{
              open: mobileOpen,
              onOpenChange: handleMainDrawerChange,
              width: 288,
              enableSwipeGesture: !isChatRoute,
              portalId: 'solid-main-drawer',
              bgColor: '#0f172a',
            }}
            style={{ display: 'contents' }}
            debugName="MainSwipeDrawer"
          />
          {mainDrawerPortal && createPortal(
            <div className="h-full">{sidebar}</div>,
            mainDrawerPortal,
          )}
        </>
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200 shrink-0" style={{ paddingTop: 'calc(0.75rem + var(--sat, 0px))' }}>
          <button onClick={() => setMobileOpen(true)} className="cursor-pointer p-1">
            <Menu size={22} />
          </button>
          <span className="font-bold text-gray-800 flex-1">{APP_NAME}</span>
        </header>

        <main className="flex-1 overflow-hidden">
          {location.pathname.startsWith('/chat') ? (
            <div className="h-full">{children}</div>
          ) : (
            <div className="h-full overflow-y-auto px-4 md:px-12 py-4 md:py-10" style={{ paddingBottom: 'calc(2rem + var(--sab, 0px))' }}>{children}</div>
          )}
        </main>
      </div>

      {/* 浮动聊天面板（非 /chat 页面显示） */}
      <ChatPanel />

      {/* TTS 字幕面板 */}
      <SubtitlePanel />
    </div>
  );
}
