import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText, DLatex } from '../../../MafsDebug';
import { arcDomain } from './shared';

export function SolveTriObtuse120() {
  const A: [number, number] = [4.64, 1.86];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [7, 0];
  const dA = arcDomain(A, B, C);

  return (
    <DebugMafs viewBox={{ x: [-0.8, 8], y: [-0.8, 2.8] }} preserveAspectRatio="contain" height={160}>
      <Polygon points={[A, B, C]} color="#fef3c7" fillOpacity={0.3} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={2} />
      <Plot.Parametric xy={(t) => [A[0] + 0.4 * Math.cos(t), A[1] + 0.4 * Math.sin(t)]} domain={dA} color="#dc2626" weight={2} />
      <DText x={4.45} y={2.35} size={15} color="#374151">A</DText>
      <DLatex at={[4.51, 1.00]} tex="120^\circ" color="#dc2626" scale={1} />
      <DText x={-0.42} y={-0.22} size={15} color="#374151">B</DText>
      <DText x={7.30} y={-0.40} size={15} color="#374151">C</DText>
      <DText x={3.75} y={-0.45} size={14} color="#dc2626">a=7</DText>
      <DText x={6.55} y={1.20} size={14} color="#2563eb">b=3</DText>
      <DText x={1.85} y={1.30} size={14} color="#16a34a">c=5</DText>
    </DebugMafs>
  );
}
