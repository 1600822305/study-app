/**
 * 第五阶段考试 — 解答题配图（mafs）
 *
 * 高考标准：纯黑白、无彩色、无填充、无坐标轴，
 * float-right 紧凑排版，斜体标签，角度弧线细黑线。
 */
import type { ReactNode } from 'react';
import { Mafs, Line, Plot, Text as MafsText } from 'mafs';
import { arcDomain } from '../trig/solve-diagrams/shared';

const BLK = '#000';
const GRAY = '#555';

/** 试卷配图容器：float-right、透明背景、无坐标轴 */
function ExamFig({ w, h, viewBox, children }: {
  w: number;
  h: number;
  viewBox: { x: [number, number]; y: [number, number] };
  children: ReactNode;
}) {
  return (
    <div
      style={{ float: 'right', width: w, margin: '0 0 4px 12px', flexShrink: 0 }}
      className="[&_.MafsView]:!bg-transparent"
    >
      <Mafs viewBox={viewBox} preserveAspectRatio="contain" height={h} pan={false}>
        {children}
      </Mafs>
    </div>
  );
}

/** 斜体标签 */
function L({ x, y, children }: { x: number; y: number; children: string }) {
  return <MafsText x={x} y={y} size={15} color={BLK}>{children}</MafsText>;
}

/** 小号标签（边长/角度数值） */
function Ls({ x, y, children }: { x: number; y: number; children: string }) {
  return <MafsText x={x} y={y} size={13} color={GRAY}>{children}</MafsText>;
}

/** 第18题：△ABC，标注顶点、边 a,b,c、角A弧线 */
export function Exam18Triangle() {
  const A: [number, number] = [1.2, 2.2];
  const B: [number, number] = [0, 0];
  const C: [number, number] = [3.2, 0];
  const dA = arcDomain(A, B, C);

  return (
    <ExamFig w={140} h={95} viewBox={{ x: [-0.4, 3.7], y: [-0.5, 2.7] }}>
      <Line.Segment point1={B} point2={C} color={BLK} weight={1.5} />
      <Line.Segment point1={A} point2={C} color={BLK} weight={1.5} />
      <Line.Segment point1={A} point2={B} color={BLK} weight={1.5} />
      <Plot.Parametric xy={(t) => [A[0] + 0.32 * Math.cos(t), A[1] + 0.32 * Math.sin(t)]} domain={dA} color={BLK} weight={1} />
      <L x={1.0} y={2.5}>A</L>
      <L x={-0.25} y={-0.28}>B</L>
      <L x={3.35} y={-0.28}>C</L>
      <Ls x={1.55} y={-0.32}>a</Ls>
      <Ls x={2.4} y={1.2}>b</Ls>
      <Ls x={0.2} y={1.2}>c</Ls>
    </ExamFig>
  );
}

/** 第20题：直角△ABC，C=π/2，标注直角 */
export function Exam20RightTriangle() {
  const A: [number, number] = [0, 0];
  const B: [number, number] = [2.8, 0];
  const C: [number, number] = [2.8, 1.8];
  const sq = 0.22;

  return (
    <ExamFig w={130} h={90} viewBox={{ x: [-0.4, 3.4], y: [-0.4, 2.2] }}>
      <Line.Segment point1={A} point2={B} color={BLK} weight={1.5} />
      <Line.Segment point1={B} point2={C} color={BLK} weight={1.5} />
      <Line.Segment point1={C} point2={A} color={BLK} weight={1.5} />
      {/* 直角标记 */}
      <Line.Segment point1={[B[0] - sq, B[1]]} point2={[B[0] - sq, B[1] + sq]} color={BLK} weight={1} />
      <Line.Segment point1={[B[0] - sq, B[1] + sq]} point2={[B[0], B[1] + sq]} color={BLK} weight={1} />
      <L x={-0.25} y={-0.22}>A</L>
      <L x={2.9} y={-0.22}>B</L>
      <L x={2.9} y={2.0}>C</L>
      <Ls x={1.15} y={-0.25}>b</Ls>
      <Ls x={3.0} y={0.85}>a</Ls>
      <Ls x={1.1} y={1.1}>c</Ls>
    </ExamFig>
  );
}

/** 第21题：△ABC，带高 CD，标注 h */
export function Exam21TriangleHeight() {
  const A: [number, number] = [0, 0];
  const B: [number, number] = [3.5, 0];
  const C: [number, number] = [1.0, 2.0];
  const foot: [number, number] = [1.0, 0];
  const dC = arcDomain(C, A, B);
  const sq = 0.18;

  return (
    <ExamFig w={150} h={95} viewBox={{ x: [-0.4, 3.9], y: [-0.5, 2.4] }}>
      <Line.Segment point1={A} point2={B} color={BLK} weight={1.5} />
      <Line.Segment point1={B} point2={C} color={BLK} weight={1.5} />
      <Line.Segment point1={C} point2={A} color={BLK} weight={1.5} />
      {/* 高 CD（虚线） */}
      <Line.Segment point1={C} point2={foot} color={BLK} weight={1} style="dashed" />
      {/* 直角标记 */}
      <Line.Segment point1={[foot[0], sq]} point2={[foot[0] + sq, sq]} color={BLK} weight={0.8} />
      <Line.Segment point1={[foot[0] + sq, sq]} point2={[foot[0] + sq, 0]} color={BLK} weight={0.8} />
      {/* 角C弧线 */}
      <Plot.Parametric xy={(t) => [C[0] + 0.28 * Math.cos(t), C[1] + 0.28 * Math.sin(t)]} domain={dC} color={BLK} weight={1} />
      <L x={-0.25} y={-0.28}>A</L>
      <L x={3.6} y={-0.28}>B</L>
      <L x={0.8} y={2.25}>C</L>
      <L x={1.1} y={-0.3}>D</L>
      <Ls x={0.55} y={0.85}>h</Ls>
    </ExamFig>
  );
}
