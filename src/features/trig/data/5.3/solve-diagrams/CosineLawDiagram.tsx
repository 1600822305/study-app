import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText } from '../../../MafsDebug';
import { arcDomain } from './shared';

export function CosineLawDiagram() {
  const A: [number, number] = [1.8, 2.5];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.5, 0];
  const dA = arcDomain(A, B, C);

  return (
    <DebugMafs viewBox={{ x: [-0.45, 4.0], y: [-0.45, 3.2] }} preserveAspectRatio="contain" height={170}>
      <Polygon points={[A, B, C]} color="#ffffff" fillOpacity={0} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#111111" weight={2.2} />
      <Line.Segment point1={A} point2={C} color="#111111" weight={2.2} />
      <Line.Segment point1={A} point2={B} color="#111111" weight={2.2} />
      <Plot.Parametric xy={(t) => [A[0] + 0.34 * Math.cos(t), A[1] + 0.34 * Math.sin(t)]} domain={dA} color="#111111" weight={1.6} />
      <DText x={1.71} y={2.88} size={19} color="#111111">A</DText>
      <DText x={-0.1} y={-0.24} size={18} color="#111111">B</DText>
      <DText x={3.6} y={-0.24} size={18} color="#111111">C</DText>
      <DText x={1.92} y={-0.43} size={18} color="#111111">a</DText>
      <DText x={3.13} y={1.21} size={18} color="#111111">b</DText>
      <DText x={0.45} y={1.32} size={18} color="#111111">c</DText>
    </DebugMafs>
  );
}
