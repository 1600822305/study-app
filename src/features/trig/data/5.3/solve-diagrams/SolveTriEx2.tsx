import { Line, Plot, Polygon } from 'mafs';
import { DebugMafs, DText } from '../../../MafsDebug';
import { arcDomain } from './shared';

/** 例题2 配图：三边已知 a=5, b=8, c=7，先求角 C 再求面积 */
export function SolveTriEx2() {
  const A: [number, number] = [1.2, 2.4];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.2, 0];
  const dC = arcDomain(C, B, A);

  return (
    <DebugMafs viewBox={{ x: [-0.6, 3.9], y: [-0.6, 3.1] }} preserveAspectRatio="contain" height={130}>
      <Polygon points={[A, B, C]} color="#e5e7eb" fillOpacity={0.3} strokeOpacity={0} />
      <Line.Segment point1={B} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={C} color="#374151" weight={2} />
      <Line.Segment point1={A} point2={B} color="#374151" weight={2} />
      <Plot.Parametric xy={(t) => [C[0] + 0.38 * Math.cos(t), C[1] + 0.38 * Math.sin(t)]} domain={dC} color="#dc2626" weight={1.8} />
      <DText x={1.02} y={2.78} size={15} color="#374151">A</DText>
      <DText x={-0.38} y={-0.35} size={15} color="#374151">B</DText>
      <DText x={3.45} y={-0.35} size={15} color="#374151">C</DText>
      <DText x={1.65} y={-0.42} size={14} color="#374151">a=5</DText>
      <DText x={2.92} y={1.41} size={13} color="#374151">b=8</DText>
      <DText x={0.15} y={1.29} size={13} color="#374151">c=7</DText>
      <DText x={2.29} y={0.28} size={11} color="#dc2626">C=?</DText>
    </DebugMafs>
  );
}
