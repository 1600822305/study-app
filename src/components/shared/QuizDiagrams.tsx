/**
 * Quiz diagrams – pure CSS/HTML, no SVG.
 * Exam-paper style: small, float-right, black/gray only.
 */
import React from 'react';

// ── CSS Geometry Primitives ──

/** Line segment between two points */
function Ln({ x1, y1, x2, y2, dash }: { x1: number; y1: number; x2: number; y2: number; dash?: boolean }) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const deg = Math.atan2(dy, dx) * (180 / Math.PI);
  return (
    <div style={{
      position: 'absolute', left: x1, top: y1, width: len, height: 0,
      borderTop: `1px ${dash ? 'dashed' : 'solid'} #000`,
      transformOrigin: '0 0', transform: `rotate(${deg}deg)`,
    }} />
  );
}

/** Small dot */
function Pt({ x, y }: { x: number; y: number }) {
  return <div style={{ position: 'absolute', left: x - 2, top: y - 2, width: 4, height: 4, borderRadius: '50%', background: '#000' }} />;
}

/** Text label */
function Lb({ x, y, children, small }: { x: number; y: number; children: React.ReactNode; small?: boolean }) {
  return (
    <span style={{
      position: 'absolute', left: x, top: y,
      fontSize: small ? 9 : 11, fontWeight: 'bold', fontStyle: 'italic',
      fontFamily: 'serif', lineHeight: 1, color: '#000', whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

/** Circle outline */
function Ring({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <div style={{
      position: 'absolute', left: cx - r, top: cy - r, width: r * 2, height: r * 2,
      borderRadius: '50%', border: '1px solid #666',
    }} />
  );
}

/** Container – floats right like real exam paper figures */
function Fig({ w, h, children }: { w: number; h: number; children: React.ReactNode }) {
  return (
    <div style={{
      position: 'relative', width: w, height: h,
      float: 'right', margin: '0 0 4px 12px', flexShrink: 0,
    }}>
      {children}
    </div>
  );
}

// ── Diagrams ──

/** 数轴（集合模块用） */
function SubsetNumberLine() {
  const w = 260, h = 50;
  const lx = 15, rx = 245, y = 28;
  const tick = (x: number) => (
    <div key={x} style={{ position: 'absolute', left: x, top: y - 5, width: 0, height: 10, borderLeft: '1px solid #666' }} />
  );
  const t2 = 65, t4 = 175, ta = 210;
  return (
    <div style={{ position: 'relative', width: w, height: h, margin: '4px auto' }}>
      <div style={{ position: 'absolute', left: lx, top: y, width: rx - lx, height: 0, borderTop: '1.5px solid #666' }} />
      <div style={{ position: 'absolute', left: rx - 1, top: y - 4, width: 0, height: 0, borderLeft: '6px solid #666', borderTop: '4px solid transparent', borderBottom: '4px solid transparent' }} />
      {tick(t2)}{tick(t4)}{tick(ta)}
      <Lb x={t2 - 6} y={y + 6}>-2</Lb>
      <Lb x={t4 - 3} y={y + 6}>4</Lb>
      <Lb x={ta - 2} y={y + 6} small>a</Lb>
    </div>
  );
}

/** △ABC, D=midBC, E=⅓AB */
function VectorTriangleMidpoint() {
  const A: [number, number] = [65, 5], B: [number, number] = [5, 90], C: [number, number] = [125, 90];
  const D: [number, number] = [65, 90];
  const E: [number, number] = [A[0] + (B[0] - A[0]) / 3, A[1] + (B[1] - A[1]) / 3];
  return (
    <Fig w={140} h={105}>
      <Ln x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} />
      <Ln x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} />
      <Ln x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} />
      <Ln x1={E[0]} y1={E[1]} x2={D[0]} y2={D[1]} dash />
      <Pt x={D[0]} y={D[1]} /><Pt x={E[0]} y={E[1]} />
      <Lb x={A[0] - 4} y={-8}>A</Lb>
      <Lb x={-6} y={90}>B</Lb>
      <Lb x={128} y={90}>C</Lb>
      <Lb x={D[0] - 4} y={94}>D</Lb>
      <Lb x={E[0] - 16} y={E[1] - 6}>E</Lb>
    </Fig>
  );
}

/** 平行四边形 ABCD, A(0,0) B(4,0) D(1,3), 对角线交于 O */
function VectorParallelogramDiag() {
  const A: [number, number] = [8, 85], B: [number, number] = [95, 85], C: [number, number] = [120, 15], D: [number, number] = [33, 15];
  const O: [number, number] = [(A[0]+C[0])/2, (A[1]+C[1])/2];
  return (
    <Fig w={135} h={100}>
      <Ln x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} />
      <Ln x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} />
      <Ln x1={C[0]} y1={C[1]} x2={D[0]} y2={D[1]} />
      <Ln x1={D[0]} y1={D[1]} x2={A[0]} y2={A[1]} />
      <Ln x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} dash />
      <Ln x1={B[0]} y1={B[1]} x2={D[0]} y2={D[1]} dash />
      <Pt x={O[0]} y={O[1]} />
      <Lb x={O[0]+4} y={O[1]-12}>O</Lb>
      <Lb x={A[0]-12} y={A[1]-2}>A</Lb>
      <Lb x={B[0]+2} y={B[1]-2}>B</Lb>
      <Lb x={C[0]+2} y={C[1]-4}>C</Lb>
      <Lb x={D[0]-12} y={D[1]-4}>D</Lb>
      <Lb x={A[0]-6} y={A[1]+6} small>(0,0)</Lb>
      <Lb x={B[0]-10} y={B[1]+6} small>(4,0)</Lb>
      <Lb x={D[0]-14} y={D[1]-12} small>(1,3)</Lb>
    </Fig>
  );
}

/** 圆上向量 O, A, B, ∠AOB=120° */
function VectorAngleCircle() {
  const cx = 60, cy = 50, r = 38;
  // A at -30° (upper right), B at 180° (left)
  const ax = cx + r * Math.cos(-Math.PI / 6), ay = cy + r * Math.sin(-Math.PI / 6);
  const bx = cx - r, by = cy;
  return (
    <Fig w={125} h={100}>
      <Ring cx={cx} cy={cy} r={r} />
      <Pt x={cx} y={cy} />
      <Ln x1={cx} y1={cy} x2={ax} y2={ay} />
      <Ln x1={cx} y1={cy} x2={bx} y2={by} />
      <Pt x={ax} y={ay} /><Pt x={bx} y={by} />
      <Lb x={cx+3} y={cy+2}>O</Lb>
      <Lb x={ax+3} y={ay-10}>A</Lb>
      <Lb x={bx-14} y={by-6}>B</Lb>
      <Lb x={cx-8} y={cy-20}>120°</Lb>
      <Lb x={ax-8} y={ay+4} small>2</Lb>
      <Lb x={bx+10} y={by+4} small>2</Lb>
    </Fig>
  );
}

/** 解答题: 平行四边形 ABCD, A(0,0) B(4,2) D(1,3), O交点, P在AB */
function EssayParallelogram() {
  // 映射实际坐标到像素 [0,5.5]→[5,130]  [0,5.5]→[95,5]
  const mx = (x: number) => 5 + x * 23;
  const my = (y: number) => 95 - y * 16;
  const A: [number, number] = [mx(0), my(0)], B: [number, number] = [mx(4), my(2)];
  const D: [number, number] = [mx(1), my(3)], C: [number, number] = [mx(5), my(5)];
  const O: [number, number] = [(A[0]+C[0])/2, (A[1]+C[1])/2];
  const P: [number, number] = [(A[0]+B[0])/2, (A[1]+B[1])/2];
  return (
    <Fig w={140} h={110}>
      <Ln x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} />
      <Ln x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} />
      <Ln x1={C[0]} y1={C[1]} x2={D[0]} y2={D[1]} />
      <Ln x1={D[0]} y1={D[1]} x2={A[0]} y2={A[1]} />
      <Ln x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} dash />
      <Ln x1={B[0]} y1={B[1]} x2={D[0]} y2={D[1]} dash />
      <Ln x1={D[0]} y1={D[1]} x2={P[0]} y2={P[1]} dash />
      <Pt x={O[0]} y={O[1]} /><Pt x={P[0]} y={P[1]} />
      <Lb x={O[0]+3} y={O[1]-12}>O</Lb>
      <Lb x={P[0]+3} y={P[1]+2}>P</Lb>
      <Lb x={A[0]-12} y={A[1]-2}>A</Lb>
      <Lb x={B[0]+3} y={B[1]-2}>B</Lb>
      <Lb x={C[0]+3} y={C[1]-6}>C</Lb>
      <Lb x={D[0]-12} y={D[1]-6}>D</Lb>
    </Fig>
  );
}

/** 解答题: △ABC, A(2,1) B(6,3) C(4,7), M=midBC */
function EssayTriangleABC() {
  const mx = (x: number) => 5 + (x - 1.5) * 26;
  const my = (y: number) => 100 - (y - 0.5) * 13;
  const A: [number, number] = [mx(2), my(1)], B: [number, number] = [mx(6), my(3)], C: [number, number] = [mx(4), my(7)];
  const M: [number, number] = [(B[0]+C[0])/2, (B[1]+C[1])/2];
  return (
    <Fig w={135} h={110}>
      <Ln x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} />
      <Ln x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} />
      <Ln x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} />
      <Ln x1={A[0]} y1={A[1]} x2={M[0]} y2={M[1]} dash />
      <Pt x={M[0]} y={M[1]} />
      <Lb x={A[0]-6} y={A[1]+2}>A</Lb>
      <Lb x={B[0]+3} y={B[1]+2}>B</Lb>
      <Lb x={C[0]-4} y={C[1]-14}>C</Lb>
      <Lb x={M[0]+4} y={M[1]-6}>M</Lb>
    </Fig>
  );
}

/** 解答题: △OAB, M=midOA, N on AB with AN=⅓AB */
function EssayTriangleMidN() {
  const O: [number, number] = [8, 88], A: [number, number] = [125, 88], B: [number, number] = [55, 8];
  const M: [number, number] = [(O[0]+A[0])/2, (O[1]+A[1])/2];
  const N: [number, number] = [A[0]+(B[0]-A[0])/3, A[1]+(B[1]-A[1])/3];
  return (
    <Fig w={140} h={105}>
      <Ln x1={O[0]} y1={O[1]} x2={A[0]} y2={A[1]} />
      <Ln x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} />
      <Ln x1={B[0]} y1={B[1]} x2={O[0]} y2={O[1]} />
      <Ln x1={M[0]} y1={M[1]} x2={N[0]} y2={N[1]} dash />
      <Pt x={M[0]} y={M[1]} /><Pt x={N[0]} y={N[1]} />
      <Lb x={O[0]-6} y={O[1]+2}>O</Lb>
      <Lb x={A[0]+2} y={A[1]+2}>A</Lb>
      <Lb x={B[0]-4} y={B[1]-14}>B</Lb>
      <Lb x={M[0]-4} y={M[1]+4}>M</Lb>
      <Lb x={N[0]+4} y={N[1]-8}>N</Lb>
    </Fig>
  );
}

const diagramMap: Record<string, () => React.JSX.Element> = {
  'subset-number-line': SubsetNumberLine,
  'vector-triangle-midpoint': VectorTriangleMidpoint,
  'vector-parallelogram-diag': VectorParallelogramDiag,
  'vector-angle-circle': VectorAngleCircle,
  'essay-parallelogram': EssayParallelogram,
  'essay-triangle-abc': EssayTriangleABC,
  'essay-triangle-mid-n': EssayTriangleMidN,
};

export function QuizDiagrams({ name }: { name?: string }) {
  if (!name) return null;
  const Diagram = diagramMap[name];
  return Diagram ? <Diagram /> : null;
}
