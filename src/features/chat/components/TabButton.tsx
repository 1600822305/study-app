// ============================================================
// TabButton — 侧边栏 Tab 按钮（参考 CS TabItem）
// ============================================================

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-1 h-[30px] text-[13px] rounded-lg mx-0.5 cursor-pointer transition-colors
        ${active ? 'font-semibold text-gray-900' : 'font-normal text-gray-400 hover:text-gray-700'}
      `}
    >
      {children}
      {/* 底部指示条 */}
      <span
        className={`absolute bottom-[-1px] left-1/2 -translate-x-1/2 h-[2.5px] rounded-sm bg-blue-500 transition-all duration-200
          ${active ? 'w-[30px]' : 'w-0'}
        `}
      />
    </button>
  );
}
