import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, ChevronLeft, ChevronRight, Home, Calculator, Menu, Settings, MessageCircle } from 'lucide-react';

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
      {
        groupLabel: '第一阶段：数学语言',
        items: [
          { path: '/math/prereq', label: '1.0 复数前置知识' },
          { path: '/math/complex', label: '1.1 复数' },
          { path: '/math/sets-prereq', label: '1.1.5 集合前置知识' },
          { path: '/math/sets', label: '1.2 集合' },
          { path: '/math/logic-prereq', label: '1.2.5 逻辑前置知识' },
          { path: '/math/logic', label: '1.3 逻辑用语' },
        ],
      },
    ],
  },
  { path: '/chat', label: 'AI 对话', icon: <MessageCircle size={18} /> },
  { path: '/settings', label: '设置', icon: <Settings size={18} /> },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['/math']);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['第一阶段：数学语言']);
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
    setExpandedSections((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path],
    );
  };

  const toggleGroup = (label: string) => {
    setExpandedGroups((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
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
