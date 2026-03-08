interface PracticeCardProps {
  title?: string;
  children: React.ReactNode;
}

export function PracticeCard({ title = '✏️ 即时练习', children }: PracticeCardProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4 mb-4">
      <p className="font-bold text-green-800 text-sm mb-2">{title}</p>
      <div className="text-sm text-gray-700 space-y-1">{children}</div>
    </div>
  );
}
