import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText } from '../MafsDebug';
import { arcDomain } from './shared';

export function SolveTriGeneric() {
  const A: [number, number] = [1, 2.3];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.2, 0];
  const dA = arcDomain(A, B, C);
  const dB = arcDomain(B, A, C);
  const dC = arcDomain(C, A, B);

  return (
    <DebugMafs viewBox={{ x: [-0.7, 3.9], y: [-0.7, 3] }} preserveAspectRatio="contain" height={140}>
      <Polygon points={[A, B, C]} color="#e5e7eb" fillOpacity={0.3} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={2} />
      <Plot.Parametric xy={(t) => [A[0] + 0.35 * Math.cos(t), A[1] + 0.35 * Math.sin(t)]} domain={dA} color="#dc2626" weight={1.5} />
      <Plot.Parametric xy={(t) => [B[0] + 0.45 * Math.cos(t), B[1] + 0.45 * Math.sin(t)]} domain={dB} color="#2563eb" weight={1.5} />
      <Plot.Parametric xy={(t) => [C[0] + 0.4 * Math.cos(t), C[1] + 0.4 * Math.sin(t)]} domain={dC} color="#16a34a" weight={1.5} />
      <DText x={0.8} y={2.7} size={16} color="#dc2626">A</DText>
      <DText x={-0.4} y={-0.35} size={16} color="#2563eb">B</DText>
      <DText x={3.5} y={-0.35} size={16} color="#16a34a">C</DText>
      <DText x={1.6} y={-0.45} size={15} color="#dc2626">a</DText>
      <DText x={2.35} y={1.35} size={15} color="#2563eb">b</DText>
      <DText x={0.15} y={1.35} size={15} color="#16a34a">c</DText>
    </DebugMafs>
  );
}
