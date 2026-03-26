import { Coordinates, Circle, Point, Line } from 'mafs';
import { DebugMafs, DText } from '../../../MafsDebug';

function SymmetryMini({ originalAngle, newAngle, label, color, labelOffset }: { originalAngle: number; newAngle: number; label: string; color: string; labelOffset?: [number, number] }) {
  const r1 = (originalAngle * Math.PI) / 180;
  const r2 = (newAngle * Math.PI) / 180;
  const c1 = Math.cos(r1), s1 = Math.sin(r1);
  const c2 = Math.cos(r2), s2 = Math.sin(r2);

  return (
    <DebugMafs viewBox={{ x: [-1.4, 1.4], y: [-1.4, 1.4] }} preserveAspectRatio="contain" height={136}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Circle center={[0, 0]} radius={1} color="#d1d5db" fillOpacity={0} strokeOpacity={0.3} />
      <Line.Segment point1={[0, 0]} point2={[c1, s1]} color="#2563eb" weight={2} />
      <Point x={c1} y={s1} color="#2563eb" />
      <DText x={c1 * 1.2 + 0.35} y={s1 * 1.2 + 0.15} size={14} color="#2563eb">30°</DText>
      <Line.Segment point1={[0, 0]} point2={[c2, s2]} color={color} weight={2} style="dashed" />
      <Point x={c2} y={s2} color={color} />
      <DText x={c2 * 1.2 + (labelOffset?.[0] ?? 0.35)} y={s2 * 1.2 + (labelOffset?.[1] ?? 0.15)} size={13} color={color}>{label}</DText>
    </DebugMafs>
  );
}

export function SymNegative() { return <SymmetryMini originalAngle={30} newAngle={-30} label="-30°" color="#dc2626" />; }
export function SymPiMinus() { return <SymmetryMini originalAngle={30} newAngle={150} label="150°" color="#16a34a" labelOffset={[-0.1, 0.3]} />; }
export function SymPiPlus() { return <SymmetryMini originalAngle={30} newAngle={210} label="210°" color="#7c3aed" labelOffset={[-0.2, -0.3]} />; }
export function SymHalfPiMinus() { return <SymmetryMini originalAngle={30} newAngle={60} label="60°" color="#d97706" />; }
export function SymHalfPiPlus() { return <SymmetryMini originalAngle={30} newAngle={120} label="120°" color="#0891b2" />; }
