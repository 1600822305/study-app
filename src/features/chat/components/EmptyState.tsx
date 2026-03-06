// ============================================================
// EmptyState — 空状态提示
// ============================================================

interface EmptyStateProps {
  assistantName?: string;
}

export function EmptyState({ assistantName }: EmptyStateProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
      <div className="text-5xl mb-4">💬</div>
      <h3 className="text-lg font-medium text-gray-700 mb-1">
        开始和 {assistantName || '助手'} 对话
      </h3>
      <p className="text-sm text-gray-400">在下方输入你的问题</p>
    </div>
  );
}
