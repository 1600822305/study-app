import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText } from '../MafsDebug';
import { arcDomain } from './shared';

export function SolveTriAreaHeight() {
  const A: [number, number] = [1.5, 2.2];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.5, 0];
  const foot: [number, number] = [1.5, 0];
  const dC = arcDomain(C, B, A);

  return (
    <DebugMafs viewBox={{ x: [-0.6, 4.2], y: [-0.7, 2.9] }} preserveAspectRatio="contain" height={130}>
      <Polygon points={[A, B, C]} color="#dcfce7" fillOpacity={0.3} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={foot} color="#dc2626" weight={1.5} style="dashed" />
      <Line.Segment point1={[1.5, 0.25]} point2={[1.75, 0.25]} color="#dc2626" weight={1} />
      <Line.Segment point1={[1.75, 0.25]} point2={[1.75, 0]} color="#dc2626" weight={1} />
      <Plot.Parametric xy={(t) => [C[0] + 0.32 * Math.cos(t), C[1] + 0.32 * Math.sin(t)]} domain={dC} color="#dc2626" weight={1.3} />
      <DText x={1.43} y={2.58} size={15} color="#374151">A</DText>
      <DText x={-0.35} y={-0.35} size={15} color="#374151">B</DText>
      <DText x={3.75} y={-0.35} size={15} color="#374151">C</DText>
      <DText x={1.05} y={0.84} size={15} color="#dc2626">h</DText>
      <DText x={1.59} y={-0.45} size={14} color="#374151">a</DText>
      <DText x={2.94} y={1.23} size={14} color="#374151">b</DText>
      <DText x={0.36} y={1.34} size={14} color="#374151">c</DText>
      <DText x={2.68} y={0.22} size={12} color="#dc2626">∠C</DText>
    </DebugMafs>
  );
}
