/**
 * 三角函数教学图解 — 使用 Mafs 库
 */
import { Mafs, Coordinates, Circle, Point, Line, Plot, Text as MafsText } from 'mafs';

/* ── 单位圆图解 ── */
export function UnitCircleDiagram() {
  const angle = 40;
  const rad = (angle * Math.PI) / 180;
  const cosV = Math.cos(rad);
  const sinV = Math.sin(rad);

  return (
    <div className="my-1">
      <Mafs viewBox={{ x: [-0.05, 0.75], y: [-0.05, 0.7] }} preserveAspectRatio="contain" height={225}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
          yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
        />

        {/* 单位圆 */}
        <Circle center={[0, 0]} radius={1} color="#6b7280" fillOpacity={0} strokeOpacity={0.4} />

        {/* 半径线 O → P */}
        <Line.Segment point1={[0, 0]} point2={[cosV, sinV]} color="#2563eb" weight={2.5} />

        {/* cos θ 投影 (水平虚线 O → x坐标) */}
        <Line.Segment point1={[0, 0]} point2={[cosV, 0]} color="#1d4ed8" weight={2.5} style="dashed" />

        {/* sin θ 投影 (竖直虚线 P → x轴) */}
        <Line.Segment point1={[cosV, 0]} point2={[cosV, sinV]} color="#16a34a" weight={2} style="dashed" />

        {/* 角度弧 */}
        <Plot.Parametric
          xy={(t) => [0.22 * Math.cos(t), 0.22 * Math.sin(t)]}
          domain={[0, rad]}
          color="#dc2626"
          weight={2}
        />

        {/* 点 P */}
        <Point x={cosV} y={sinV} color="#dc2626" />

        {/* 点 D（P 在 x 轴上的投影） */}
        <Point x={cosV} y={0} color="#2563eb" />

        {/* 标签 */}
        <MafsText x={cosV + 0.55} y={sinV + 0.22} size={20} color="#dc2626">P(cos θ, sin θ)</MafsText>
        <MafsText x={-0.12} y={-0.12} size={20}>O</MafsText>
        <MafsText x={0.32} y={0.1} size={20} color="#dc2626">θ</MafsText>
        <MafsText x={cosV + 0.12} y={-0.1} size={18} color="#2563eb">D</MafsText>
        <MafsText x={cosV / 2} y={-0.22} size={18} color="#2563eb">OD = cos θ</MafsText>
        <MafsText x={cosV + 0.34} y={sinV / 2} size={18} color="#16a34a">DP = sin θ</MafsText>
        <MafsText x={cosV / 2 - 0.12} y={sinV / 2 + 0.1} size={18} color="#2563eb">1</MafsText>
      </Mafs>
    </div>
  );
}

/* ── 象限符号图解 ── */
export function QuadrantSignDiagram() {
  return (
    <div className="my-3" style={{ maxWidth: 360, margin: '0 auto' }}>
      <Mafs viewBox={{ x: [-2.2, 2.2], y: [-2, 2.2] }} preserveAspectRatio="contain" height={260}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: () => '' }}
          yAxis={{ lines: false, labels: () => '' }}
        />

        {/* 第一象限 */}
        <MafsText x={1.1} y={1.4} size={15} color="#16a34a">第一象限</MafsText>
        <MafsText x={1.1} y={1.0} size={14} color="#16a34a">sin+ cos+ tan+</MafsText>
        <MafsText x={1.1} y={0.55} size={16} color="#16a34a">全正</MafsText>

        {/* 第二象限 */}
        <MafsText x={-1.1} y={1.4} size={15} color="#2563eb">第二象限</MafsText>
        <MafsText x={-1.1} y={1.0} size={14} color="#2563eb">sin +</MafsText>
        <MafsText x={-1.1} y={0.55} size={13} color="#9ca3af">cos− tan−</MafsText>

        {/* 第三象限 */}
        <MafsText x={-1.1} y={-0.5} size={15} color="#7c3aed">第三象限</MafsText>
        <MafsText x={-1.1} y={-0.9} size={14} color="#7c3aed">tan +</MafsText>
        <MafsText x={-1.1} y={-1.35} size={13} color="#9ca3af">sin− cos−</MafsText>

        {/* 第四象限 */}
        <MafsText x={1.1} y={-0.5} size={15} color="#d97706">第四象限</MafsText>
        <MafsText x={1.1} y={-0.9} size={14} color="#d97706">cos +</MafsText>
        <MafsText x={1.1} y={-1.35} size={13} color="#9ca3af">sin− tan−</MafsText>
      </Mafs>
    </div>
  );
}
