import { Coordinates, Circle, Point, Line, Plot } from 'mafs';
import { DebugMafs, DText } from '../../../MafsDebug';

export function UnitCircleDiagram() {
  const angle = 40;
  const rad = (angle * Math.PI) / 180;
  const cosV = Math.cos(rad);
  const sinV = Math.sin(rad);

  return (
    <div className="my-1">
      <DebugMafs viewBox={{ x: [-0.05, 0.75], y: [-0.05, 0.7] }} preserveAspectRatio="contain" height={248}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
          yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
        />
        <Circle center={[0, 0]} radius={1} color="#6b7280" fillOpacity={0} strokeOpacity={0.4} />
        <Line.Segment point1={[0, 0]} point2={[cosV, sinV]} color="#2563eb" weight={2.5} />
        <Line.Segment point1={[0, 0]} point2={[cosV, 0]} color="#1d4ed8" weight={2.5} style="dashed" />
        <Line.Segment point1={[cosV, 0]} point2={[cosV, sinV]} color="#16a34a" weight={2} style="dashed" />
        <Plot.Parametric xy={(t) => [0.22 * Math.cos(t), 0.22 * Math.sin(t)]} domain={[0, rad]} color="#dc2626" weight={2} />
        <Point x={cosV} y={sinV} color="#dc2626" />
        <Point x={cosV} y={0} color="#2563eb" />
        <DText x={cosV + 0.55} y={sinV + 0.22} size={20} color="#dc2626">P(cos θ, sin θ)</DText>
        <DText x={-0.12} y={-0.12} size={20}>O</DText>
        <DText x={0.32} y={0.1} size={20} color="#dc2626">θ</DText>
        <DText x={cosV + 0.12} y={-0.1} size={18} color="#2563eb">D</DText>
        <DText x={cosV / 2} y={-0.22} size={18} color="#2563eb">OD = cos θ</DText>
        <DText x={cosV + 0.34} y={sinV / 2} size={18} color="#16a34a">DP = sin θ</DText>
        <DText x={cosV / 2 - 0.12} y={sinV / 2 + 0.1} size={18} color="#2563eb">1</DText>
      </DebugMafs>
    </div>
  );
}

export function QuadrantSignDiagram() {
  return (
    <div className="my-3" style={{ maxWidth: 360, margin: '0 auto' }}>
      <DebugMafs viewBox={{ x: [-2.2, 2.2], y: [-2, 2.2] }} preserveAspectRatio="contain" height={286}>
        <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
        <DText x={1.1} y={1.4} size={15} color="#16a34a">第一象限</DText>
        <DText x={1.1} y={1.0} size={14} color="#16a34a">sin+ cos+ tan+</DText>
        <DText x={1.1} y={0.55} size={16} color="#16a34a">全正</DText>
        <DText x={-1.1} y={1.4} size={15} color="#2563eb">第二象限</DText>
        <DText x={-1.1} y={1.0} size={14} color="#2563eb">sin +</DText>
        <DText x={-1.1} y={0.55} size={13} color="#9ca3af">cos− tan−</DText>
        <DText x={-1.1} y={-0.5} size={15} color="#7c3aed">第三象限</DText>
        <DText x={-1.1} y={-0.9} size={14} color="#7c3aed">tan +</DText>
        <DText x={-1.1} y={-1.35} size={13} color="#9ca3af">sin− cos−</DText>
        <DText x={1.1} y={-0.5} size={15} color="#d97706">第四象限</DText>
        <DText x={1.1} y={-0.9} size={14} color="#d97706">cos +</DText>
        <DText x={1.1} y={-1.35} size={13} color="#9ca3af">sin− tan−</DText>
      </DebugMafs>
    </div>
  );
}
