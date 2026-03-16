import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText } from '../MafsDebug';
import { arcDomain } from './shared';

export function SolveTriTypeJudge() {
  const A: [number, number] = [1.4, 1.95];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.8, 0];
  const dC = arcDomain(C, A, B);

  return (
    <DebugMafs viewBox={{ x: [-0.7, 4.5], y: [-0.7, 2.7] }} preserveAspectRatio="contain" height={140}>
      <Polygon points={[A, B, C]} color="#fef3c7" fillOpacity={0.28} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={2} />
      <Plot.Parametric xy={(t) => [C[0] + 0.36 * Math.cos(t), C[1] + 0.36 * Math.sin(t)]} domain={dC} color="#dc2626" weight={1.7} />
      <DText x={1.28} y={2.26} size={15} color="#374151">A</DText>
      <DText x={-0.38} y={-0.33} size={15} color="#374151">B</DText>
      <DText x={4.14} y={-0.27} size={15} color="#374151">C</DText>
      <DText x={1.95} y={-0.44} size={14} color="#dc2626">c=7</DText>
      <DText x={3.15} y={1.25} size={14} color="#2563eb">a=3</DText>
      <DText x={0.11} y={1.14} size={14} color="#16a34a">b=5</DText>
      <DText x={2.68} y={0.24} size={12} color="#dc2626">钝角 C</DText>
    </DebugMafs>
  );
}
