import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText } from '../MafsDebug';
import { arcDomain } from './shared';

export function CosineLawDiagram() {
  const A: [number, number] = [1.15, 2.25];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.5, 0];
  const dA = arcDomain(A, B, C);

  return (
    <DebugMafs viewBox={{ x: [-0.7, 4.2], y: [-0.7, 3] }} preserveAspectRatio="contain" height={145}>
      <Polygon points={[A, B, C]} color="#f3f4f6" fillOpacity={0.35} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#dc2626" weight={2.2} />
      <Line.Segment point1={A} point2={C} color="#2563eb" weight={2.2} />
      <Line.Segment point1={A} point2={B} color="#16a34a" weight={2.2} />
      <Plot.Parametric xy={(t) => [A[0] + 0.42 * Math.cos(t), A[1] + 0.42 * Math.sin(t)]} domain={dA} color="#dc2626" weight={2} />
      <DText x={0.95} y={2.58} size={16} color="#374151">A</DText>
      <DText x={-0.42} y={-0.34} size={16} color="#374151">B</DText>
      <DText x={3.78} y={-0.34} size={16} color="#374151">C</DText>
      <DText x={1.72} y={0.18} size={15} color="#dc2626">a</DText>
      <DText x={2.62} y={1.32} size={15} color="#2563eb">b</DText>
      <DText x={0.2} y={1.3} size={15} color="#16a34a">c</DText>
      <DText x={1.47} y={1.54} size={13} color="#dc2626">A</DText>
    </DebugMafs>
  );
}
