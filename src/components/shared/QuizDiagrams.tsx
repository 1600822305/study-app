/** Quiz explanation diagrams – keyed by explanationDiagram string */

function SubsetNumberLine() {
  return (
    <svg viewBox="0 0 400 90" className="w-full max-w-md mx-auto my-2">
      {/* 数轴 */}
      <line x1="30" y1="50" x2="370" y2="50" stroke="#666" strokeWidth="1.5" />
      <polygon points="370,50 362,46 362,54" fill="#666" />
      {/* 刻度 */}
      <line x1="80" y1="45" x2="80" y2="55" stroke="#666" strokeWidth="1" />
      <text x="80" y="70" textAnchor="middle" fontSize="12" fill="#666">-2</text>
      <line x1="260" y1="45" x2="260" y2="55" stroke="#666" strokeWidth="1" />
      <text x="260" y="70" textAnchor="middle" fontSize="12" fill="#666">4</text>
      <line x1="310" y1="45" x2="310" y2="55" stroke="#666" strokeWidth="1" />
      <text x="310" y="70" textAnchor="middle" fontSize="12" fill="#666">a</text>
      {/* A 区间 (-2, 4) 蓝色 */}
      <line x1="80" y1="35" x2="260" y2="35" stroke="#2563eb" strokeWidth="3" />
      <circle cx="80" cy="35" r="3.5" fill="white" stroke="#2563eb" strokeWidth="2" />
      <circle cx="260" cy="35" r="3.5" fill="white" stroke="#2563eb" strokeWidth="2" />
      <text x="170" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">A</text>
      {/* B 区间 (-∞, a) 绿色 */}
      <line x1="30" y1="50" x2="310" y2="50" stroke="#16a34a" strokeWidth="3" />
      <circle cx="310" cy="50" r="3.5" fill="white" stroke="#16a34a" strokeWidth="2" />
      <text x="50" y="46" fontSize="11" fill="#16a34a">← -∞</text>
      <text x="330" y="46" fontSize="12" fontWeight="bold" fill="#16a34a">B</text>
      {/* 说明 */}
      <text x="200" y="86" textAnchor="middle" fontSize="11" fill="#b45309">A 要完全在 B 里面 → a 必须 ≥ 4</text>
    </svg>
  );
}

const diagramMap: Record<string, () => React.JSX.Element> = {
  'subset-number-line': SubsetNumberLine,
};

export function QuizDiagrams({ name }: { name?: string }) {
  if (!name) return null;
  const Diagram = diagramMap[name];
  return Diagram ? <Diagram /> : null;
}
