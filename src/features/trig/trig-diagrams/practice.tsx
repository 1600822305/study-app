import { Coordinates, Point, Line, Plot } from 'mafs';
import { DebugMafs, DText } from '../MafsDebug';

export function MiniQ1SinIncreasing() {
  const HP = Math.PI / 2;
  return (
    <DebugMafs viewBox={{ x: [-3.5, 3.5], y: [-1.4, 1.4] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Plot.OfX y={(x) => Math.sin(x)} color="#d1d5db" weight={1.5} />
      <Plot.OfX y={(x) => Math.sin(x)} color="#16a34a" weight={3} domain={[-HP, HP]} />
      <Point x={-HP} y={-1} color="#16a34a" />
      <Point x={HP} y={1} color="#dc2626" />
      <DText x={0} y={-1.15} size={11} color="#16a34a">递增</DText>
    </DebugMafs>
  );
}

export function MiniQ2CosEven() {
  return (
    <DebugMafs viewBox={{ x: [-4.08, 4.68], y: [-1.55, 1.95] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Plot.OfX y={(x) => Math.cos(x)} color="#2563eb" weight={2} />
      <Line.Segment point1={[0, -1.3]} point2={[0, 1.3]} color="#dc2626" weight={1.5} style="dashed" />
      <Point x={0} y={1} color="#dc2626" />
      <DText x={-0.09} y={1.94} size={13} color="#dc2626">对称轴</DText>
    </DebugMafs>
  );
}

export function MiniQ3CosCompare() {
  const a = Math.PI / 5, b = Math.PI / 3;
  return (
    <DebugMafs viewBox={{ x: [0.23, 1.8], y: [-0.36, 1.07] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Plot.OfX y={(x) => Math.cos(x)} color="#2563eb" weight={2.5} />
      <Point x={a} y={Math.cos(a)} color="#dc2626" />
      <Point x={b} y={Math.cos(b)} color="#dc2626" />
      <Line.Segment point1={[a, 0.15]} point2={[a, Math.cos(a)]} color="#dc2626" weight={1} style="dashed" />
      <Line.Segment point1={[b, 0.15]} point2={[b, Math.cos(b)]} color="#dc2626" weight={1} style="dashed" />
      <DText x={0.63} y={0.05} size={12} color="#dc2626">π/5</DText>
      <DText x={1.05} y={0.05} size={12} color="#dc2626">π/3</DText>
    </DebugMafs>
  );
}

export function MiniQ4TanPeriod() {
  const HP = Math.PI / 2;
  return (
    <DebugMafs viewBox={{ x: [-2.1, 4.9], y: [-2.5, 2.5] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Line.Segment point1={[HP, -2.5]} point2={[HP, 2.5]} color="#ef4444" weight={0.8} style="dashed" />
      <Line.Segment point1={[-HP, -2.5]} point2={[-HP, 2.5]} color="#ef4444" weight={0.8} style="dashed" />
      <Line.Segment point1={[HP * 3, -2.5]} point2={[HP * 3, 2.5]} color="#ef4444" weight={0.8} style="dashed" />
      <Plot.OfX y={(x) => Math.tan(x)} color="#d1d5db" weight={1.5} domain={[HP + 0.1, HP * 3 - 0.1]} />
      <Plot.OfX y={(x) => Math.tan(x)} color="#7c3aed" weight={3} domain={[-HP + 0.1, HP - 0.1]} />
      <DText x={0.21} y={-2.0} size={12} color="#7c3aed">T = π</DText>
    </DebugMafs>
  );
}

export function MiniQ5SinCenter() {
  const PI = Math.PI;
  return (
    <DebugMafs viewBox={{ x: [-0.3, 6.8], y: [-1.5, 1.3] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Plot.OfX y={(x) => Math.sin(x)} color="#16a34a" weight={2} />
      <Point x={PI} y={0} color="#dc2626" />
      <DText x={3.11} y={1.08} size={14} color="#dc2626">(π,0)</DText>
      <DText x={3.15} y={-0.9} size={11} color="#dc2626">对称中心</DText>
    </DebugMafs>
  );
}
