import { Coordinates, Point, Line, Plot } from 'mafs';
import { DebugMafs, DText, DLatex } from '../MafsDebug';

export function SinGraphDiagram() {
  const HP = Math.PI / 2;
  const PI = Math.PI;
  const HP3 = 3 * Math.PI / 2;
  const TP = 2 * Math.PI;
  return (
    <div className="my-1">
      <DebugMafs viewBox={{ x: [-0.5, 7.5], y: [-1.35, 1.58] }} preserveAspectRatio="contain" height={160}>
        <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }} />
        <Plot.OfX y={(x) => Math.sin(x)} color="#16a34a" weight={2.5} />
        <Point x={0} y={0} color="#16a34a" />
        <Point x={HP} y={1} color="#dc2626" />
        <Point x={PI} y={0} color="#16a34a" />
        <Point x={HP3} y={-1} color="#dc2626" />
        <Point x={TP} y={0} color="#16a34a" />
        <Line.Segment point1={[HP, -0.08]} point2={[HP, 0.08]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[PI, -0.08]} point2={[PI, 0.08]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[HP3, -0.08]} point2={[HP3, 0.08]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[TP, -0.08]} point2={[TP, 0.08]} color="#6b7280" weight={1.5} />
        <DLatex at={[1.58, -0.32]} tex="\frac{\pi}{2}" color="#6b7280" />
        <DText x={3.15} y={-0.32} size={24} color="#6b7280">π</DText>
        <DLatex at={[4.71, -0.31]} tex="\frac{3\pi}{2}" color="#6b7280" />
        <DText x={6.29} y={-0.28} size={14} color="#6b7280">2π</DText>
        <DText x={1.76} y={1.41} size={19} color="#dc2626">最大值 1</DText>
        <DText x={4.74} y={-1.41} size={14} color="#dc2626">最小值 -1</DText>
        <DText x={10.61} y={1.50} size={24} color="#16a34a">y = sin x</DText>
      </DebugMafs>
    </div>
  );
}

export function CosGraphDiagram() {
  const HP = Math.PI / 2;
  const PI = Math.PI;
  const HP3 = 3 * Math.PI / 2;
  const TP = 2 * Math.PI;
  return (
    <div className="my-1">
      <DebugMafs viewBox={{ x: [-0.3, 7], y: [-1.35, 1.4] }} preserveAspectRatio="contain" height={153}>
        <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }} />
        <Plot.OfX y={(x) => Math.cos(x)} color="#2563eb" weight={2.5} />
        <Point x={0} y={1} color="#dc2626" />
        <Point x={HP} y={0} color="#2563eb" />
        <Point x={PI} y={-1} color="#dc2626" />
        <Point x={HP3} y={0} color="#2563eb" />
        <Point x={TP} y={1} color="#dc2626" />
        <Line.Segment point1={[HP, -0.07]} point2={[HP, 0.07]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[PI, -0.07]} point2={[PI, 0.07]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[HP3, -0.07]} point2={[HP3, 0.07]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[TP, -0.07]} point2={[TP, 0.07]} color="#6b7280" weight={1.5} />
        <DLatex at={[1.61, -0.48]} tex="\frac{\pi}{2}" color="#6b7280" />
        <DText x={3.16} y={-0.46} size={14} color="#6b7280">π</DText>
        <DLatex at={[4.71, -0.51]} tex="\frac{3\pi}{2}" color="#6b7280" />
        <DText x={6.32} y={-0.46} size={18} color="#6b7280">2π</DText>
        <DText x={0.72} y={1.40} size={14} color="#dc2626">最大值 1</DText>
        <DText x={3.21} y={-1.53} size={14} color="#dc2626">最小值 -1</DText>
        <DText x={7.75} y={1.68} size={15} color="#2563eb">y = cos x</DText>
      </DebugMafs>
    </div>
  );
}

export function TanGraphDiagram() {
  const HP = Math.PI / 2;
  const PI = Math.PI;
  const HP3 = 3 * Math.PI / 2;
  const TP = 2 * Math.PI;
  const HP5 = 5 * Math.PI / 2;
  return (
    <div className="my-1">
      <DebugMafs viewBox={{ x: [-0.3, 7], y: [-2.2, 2.5] }} preserveAspectRatio="contain" height={148}>
        <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }} />
        <Line.Segment point1={[HP, -3]} point2={[HP, 3]} color="#ef4444" weight={1} style="dashed" />
        <Line.Segment point1={[HP3, -3]} point2={[HP3, 3]} color="#ef4444" weight={1} style="dashed" />
        <Line.Segment point1={[HP5, -3]} point2={[HP5, 3]} color="#ef4444" weight={1} style="dashed" />
        <Plot.OfX y={(x) => Math.tan(x)} color="#7c3aed" weight={2.5} domain={[-0.3, HP - 0.08]} />
        <Plot.OfX y={(x) => Math.tan(x)} color="#7c3aed" weight={2.5} domain={[HP + 0.08, HP3 - 0.08]} />
        <Plot.OfX y={(x) => Math.tan(x)} color="#7c3aed" weight={2.5} domain={[HP3 + 0.08, HP5 - 0.08]} />
        <Point x={0} y={0} color="#7c3aed" />
        <Point x={PI} y={0} color="#7c3aed" />
        <Point x={TP} y={0} color="#7c3aed" />
        <Line.Segment point1={[HP, -0.12]} point2={[HP, 0.12]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[PI, -0.12]} point2={[PI, 0.12]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[HP3, -0.12]} point2={[HP3, 0.12]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[TP, -0.12]} point2={[TP, 0.12]} color="#6b7280" weight={1.5} />
        <DLatex at={[1.57, -0.5]} tex="\frac{\pi}{2}" color="#6b7280" />
        <DText x={3.14} y={-0.4} size={14} color="#6b7280">π</DText>
        <DLatex at={[4.71, -0.5]} tex="\frac{3\pi}{2}" color="#6b7280" />
        <DText x={6.28} y={-0.4} size={14} color="#6b7280">2π</DText>
        <DText x={1.64} y={1.45} size={13} color="#ef4444">渐近线</DText>
        <DText x={5.91} y={2.18} size={15} color="#7c3aed">y = tan x</DText>
      </DebugMafs>
    </div>
  );
}
