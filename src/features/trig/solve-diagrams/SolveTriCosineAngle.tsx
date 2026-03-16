import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText, DLatex } from '../MafsDebug';
import { arcDomain } from './shared';

export function SolveTriCosineAngle() {
  const A: [number, number] = [0.95, 2.15];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.4, 0];
  const dA = arcDomain(A, B, C);

  return (
    <DebugMafs viewBox={{ x: [-0.7, 4.1], y: [-0.7, 2.9] }} preserveAspectRatio="contain" height={140}>
      <Polygon points={[A, B, C]} color="#dbeafe" fillOpacity={0.28} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={2} />
      <Plot.Parametric xy={(t) => [A[0] + 0.34 * Math.cos(t), A[1] + 0.34 * Math.sin(t)]} domain={dA} color="#dc2626" weight={1.7} />
      <DText x={0.78} y={2.52} size={15} color="#374151">A</DText>
      <DText x={-0.38} y={-0.39} size={15} color="#374151">B</DText>
      <DText x={3.77} y={-0.33} size={15} color="#374151">C</DText>
      <DLatex at={[1.59, -0.42]} tex="a=\sqrt{13}" color="#dc2626" scale={1} />
      <DText x={3.35} y={1.25} size={14} color="#2563eb">b=3</DText>
      <DText x={-0.55} y={1.18} size={14} color="#16a34a">c=1</DText>
      <DLatex at={[1.16, 1.23]} tex="\angle A\,?" color="#dc2626" scale={1} />
    </DebugMafs>
  );
}
