import { AlertTriangle } from 'lucide-react';

interface WarningCardProps {
  title?: string;
  children: React.ReactNode;
}

export function WarningCard({ title = '⚠️ 易错点', children }: WarningCardProps) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
      <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
      <div>
        <p className="font-bold text-amber-700 text-sm">{title}</p>
        <div className="text-amber-700 text-sm mt-1 space-y-1">{children}</div>
      </div>
    </div>
  );
}
