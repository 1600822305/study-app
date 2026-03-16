import { Line, Polygon } from 'mafs';
import { DebugMafs, DText, DLatex } from '../MafsDebug';

export function SolveTriAreaHeight() {
  const A: [number, number] = [1.5, 2.2];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.5, 0];
  const foot: [number, number] = [1.5, 0];

  return (
    <DebugMafs viewBox={{ x: [-0.6, 4.2], y: [-0.7, 2.9] }} preserveAspectRatio="contain" height={130}>
      <Polygon points={[A, B, C]} color="#dcfce7" fillOpacity={0.3} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={foot} color="#dc2626" weight={1.5} style="dashed" />
      <Line.Segment point1={[1.5, 0.25]} point2={[1.75, 0.25]} color="#dc2626" weight={1} />
      <Line.Segment point1={[1.75, 0.25]} point2={[1.75, 0]} color="#dc2626" weight={1} />
      <DText x={1.3} y={2.55} size={15} color="#374151">A</DText>
      <DText x={-0.35} y={-0.35} size={15} color="#374151">B</DText>
      <DText x={3.75} y={-0.35} size={15} color="#374151">C</DText>
      <DText x={0.95} y={1.0} size={15} color="#dc2626">h</DText>
      <DText x={1.75} y={-0.45} size={14} color="#374151">a</DText>
      <DLatex at={[1.3, -0.5]} tex="S=\tfrac{1}{2}ah" color="#dc2626" />
    </DebugMafs>
  );
}
