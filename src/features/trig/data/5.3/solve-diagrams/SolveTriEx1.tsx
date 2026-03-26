import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText } from '../../../MafsDebug';
import { arcDomain } from './shared';

/** 例题1 配图：已知 a, b 两边和夹角 C，求面积 */
export function SolveTriEx1() {
  const A: [number, number] = [1.2, 2.4];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.2, 0];
  const dC = arcDomain(C, B, A);

  return (
    <DebugMafs viewBox={{ x: [-0.6, 3.9], y: [-0.6, 3.1] }} preserveAspectRatio="contain" height={130}>
      <Polygon points={[A, B, C]} color="#e5e7eb" fillOpacity={0.3} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#2563eb" weight={2.5} />
      <Line.Segment point1={A} point2={C} color="#2563eb" weight={2.5} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={1.5} />
      <Plot.Parametric xy={(t) => [C[0] + 0.38 * Math.cos(t), C[1] + 0.38 * Math.sin(t)]} domain={dC} color="#dc2626" weight={1.8} />
      <DText x={1.05} y={2.88} size={15} color="#374151">A</DText>
      <DText x={-0.28} y={-0.35} size={15} color="#374151">B</DText>
      <DText x={3.65} y={-0.32} size={15} color="#374151">C</DText>
      <DText x={1.65} y={-0.42} size={14} color="#2563eb">a</DText>
      <DText x={2.85} y={1.35} size={14} color="#2563eb">b</DText>
      <DText x={0.18} y={1.32} size={13} color="#374151">c</DText>
      <DText x={2.45} y={0.32} size={13} color="#dc2626">C</DText>
    </DebugMafs>
  );
}
