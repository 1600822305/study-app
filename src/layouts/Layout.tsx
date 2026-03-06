import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, ChevronLeft, ChevronRight, Home, Calculator, Menu, Volume2 } from 'lucide-react';

import { APP_NAME } from '@/lib/constants';

interface NavChild {
  path: string;
  label: string;
}

interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { path: '/', label: '首页', icon: <Home size={18} /> },
  {
    path: '/math',
    label: '高考数学',
    icon: <Calculator size={18} />,
    children: [
      { path: '/math/prereq', label: '1.0 前置知识回顾' },
      { path: '/math/complex', label: '1.1 复数' },
      { path: '/math/sets', label: '1.2 集合' },
      { path: '/math/logic', label: '1.3 逻辑用语' },
    ],
  },
  { path: '/settings/tts', label: '语音设置', icon: <Volume2 size={18} /> },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['/math']);

  const toggleSection = (path: string) => {
    setExpandedSections((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path],
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const sidebar = (
    <div
      className={`h-full flex flex-col bg-slate-900 text-white transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-700">
        <BookOpen size={24} className="text-blue-400 shrink-0" />
        {!collapsed && <h1 className="text-lg font-bold tracking-tight">{APP_NAME}</h1>}
      </div>

      <nav className="flex-1 overflow-y-auto py-3">
        {navItems.map((item) => (
          <div key={item.path}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleSection(item.path)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                >
                  {item.icon}
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      <ChevronRight
                        size={14}
                        className={`transition-transform ${expandedSections.includes(item.path) ? 'rotate-90' : ''}`}
                      />
                    </>
                  )}
                </button>
                {!collapsed && expandedSections.includes(item.path) && (
                  <div className="ml-4 border-l border-slate-700">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block pl-6 pr-4 py-2 text-sm transition-colors ${
                          isActive(child.path)
                            ? 'text-blue-400 bg-slate-800 font-medium'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-400 bg-slate-800 font-medium'
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

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="relative w-64 h-full">{sidebar}</div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button onClick={() => setMobileOpen(true)} className="cursor-pointer">
            <Menu size={22} />
          </button>
          <span className="font-bold text-gray-800">{APP_NAME}</span>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="px-6 md:px-12 py-6 md:py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
