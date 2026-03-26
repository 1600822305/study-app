import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText } from '../../../MafsDebug';
import { arcDomain } from './shared';

export function SolveTriSineLaw1() {
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.86, 0];
  const A: [number, number] = [1.2, 2.4];
  const dA = arcDomain(A, B, C);
  const dB = arcDomain(B, A, C);

  return (
    <DebugMafs viewBox={{ x: [-0.6, 4.5], y: [-0.6, 3] }} preserveAspectRatio="contain" height={130}>
      <Polygon points={[A, B, C]} color="#dbeafe" fillOpacity={0.3} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={2} />
      <Plot.Parametric xy={(t) => [A[0] + 0.4 * Math.cos(t), A[1] + 0.4 * Math.sin(t)]} domain={dA} color="#dc2626" weight={2} />
      <Plot.Parametric xy={(t) => [B[0] + 0.5 * Math.cos(t), B[1] + 0.5 * Math.sin(t)]} domain={dB} color="#2563eb" weight={2} />
      <DText x={1.17} y={2.89} size={15} color="#374151">A</DText>
      <DText x={1.39} y={1.50} size={14} color="#dc2626">30°</DText>
      <DText x={-0.05} y={-0.50} size={15} color="#374151">B</DText>
      <DText x={0.91} y={0.47} size={15} color="#2563eb">45°</DText>
      <DText x={4.20} y={-0.38} size={15} color="#374151">C</DText>
      <DText x={2.01} y={-0.50} size={14} color="#dc2626">a=2</DText>
      <DText x={3.09} y={1.59} size={14} color="#2563eb">b=?</DText>
    </DebugMafs>
  );
}
