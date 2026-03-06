// ============================================================
// AssistantsPanel — 助手列表（参考 CS AssistantsTab）
// ============================================================

import { AssistantItem } from './AssistantItem';

interface AssistantsPanelProps {
  assistants: { id: string; name: string; emoji: string; description: string }[];
  currentAssistantId: string;
  onSelectAssistant: (id: string) => void;
}

export function AssistantsPanel({ assistants, currentAssistantId, onSelectAssistant }: AssistantsPanelProps) {
  return (
    <div className="flex-1 overflow-y-auto px-2.5 py-3 space-y-0.5">
      {assistants.map((a) => (
        <AssistantItem
          key={a.id}
          assistant={a}
          isActive={a.id === currentAssistantId}
          onSelect={() => onSelectAssistant(a.id)}
        />
      ))}
    </div>
  );
}
