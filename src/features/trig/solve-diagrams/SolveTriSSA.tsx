import { Line, Plot, Point, Polygon } from 'mafs';
import { DebugMafs, DText } from '../MafsDebug';
import { arcDomain } from './shared';

export function SolveTriSSA() {
  const A: [number, number] = [0, 0];
  const C: [number, number] = [3, 0];
  const B1: [number, number] = [1.18, 0.83];
  const B2: [number, number] = [2.85, 2.0];
  const dA = arcDomain(A, C, B2);
  const dB1 = arcDomain(B1, A, C);
  const dB2 = arcDomain(B2, A, C);

  return (
    <DebugMafs viewBox={{ x: [-0.6, 3.8], y: [-0.6, 2.6] }} preserveAspectRatio="contain" height={180}>
      <Polygon points={[A, B2, C]} color="#dbeafe" fillOpacity={0.15} strokeOpacity={0} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B2} color="#2563eb" weight={2} />
      <Line.Segment point1={C} point2={B2} color="#2563eb" weight={2} />
      <Line.Segment point1={A} point2={B1} color="#ea580c" weight={1.5} style="dashed" />
      <Line.Segment point1={C} point2={B1} color="#ea580c" weight={1.5} style="dashed" />
      <Plot.Parametric xy={(t) => [A[0] + 0.45 * Math.cos(t), A[1] + 0.45 * Math.sin(t)]} domain={dA} color="#dc2626" weight={1.5} />
      <Plot.Parametric xy={(t) => [B2[0] + 0.35 * Math.cos(t), B2[1] + 0.35 * Math.sin(t)]} domain={dB2} color="#2563eb" weight={1.5} />
      <Plot.Parametric xy={(t) => [B1[0] + 0.3 * Math.cos(t), B1[1] + 0.3 * Math.sin(t)]} domain={dB1} color="#ea580c" weight={1.5} />
      <Point x={B2[0]} y={B2[1]} color="#2563eb" />
      <Point x={B1[0]} y={B1[1]} color="#ea580c" />
      <DText x={-0.19} y={-0.14} size={15} color="#374151">A</DText>
      <DText x={0.65} y={0.16} size={13} color="#dc2626">30°</DText>
      <DText x={3.24} y={-0.21} size={15} color="#374151">C</DText>
      <DText x={2.94} y={2.31} size={15} color="#2563eb">B₁</DText>
      <DText x={2.64} y={1.49} size={13} color="#2563eb">60°</DText>
      <DText x={0.95} y={1.00} size={15} color="#ea580c">B₂</DText>
      <DText x={1.26} y={0.37} size={13} color="#ea580c">120°</DText>
      <DText x={1.47} y={-0.26} size={13} color="#374151">b=√3</DText>
      <DText x={3.24} y={0.92} size={13} color="#2563eb">a=1</DText>
    </DebugMafs>
  );
}
