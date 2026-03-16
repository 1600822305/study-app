/**
 * 三角函数教学图解 — 使用 Mafs 库
 */
import { Coordinates, Circle, Point, Line, Plot } from 'mafs';
import { DebugMafs, DText, DLatex } from './MafsDebug';

/* ── 单位圆图解 ── */
export function UnitCircleDiagram() {
  const angle = 40;
  const rad = (angle * Math.PI) / 180;
  const cosV = Math.cos(rad);
  const sinV = Math.sin(rad);

  return (
    <div className="my-1">
      <DebugMafs viewBox={{ x: [-0.05, 0.75], y: [-0.05, 0.7] }} preserveAspectRatio="contain" height={248}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
          yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
        />

        {/* 单位圆 */}
        <Circle center={[0, 0]} radius={1} color="#6b7280" fillOpacity={0} strokeOpacity={0.4} />

        {/* 半径线 O → P */}
        <Line.Segment point1={[0, 0]} point2={[cosV, sinV]} color="#2563eb" weight={2.5} />

        {/* cos θ 投影 (水平虚线 O → x坐标) */}
        <Line.Segment point1={[0, 0]} point2={[cosV, 0]} color="#1d4ed8" weight={2.5} style="dashed" />

        {/* sin θ 投影 (竖直虚线 P → x轴) */}
        <Line.Segment point1={[cosV, 0]} point2={[cosV, sinV]} color="#16a34a" weight={2} style="dashed" />

        {/* 角度弧 */}
        <Plot.Parametric
          xy={(t) => [0.22 * Math.cos(t), 0.22 * Math.sin(t)]}
          domain={[0, rad]}
          color="#dc2626"
          weight={2}
        />

        {/* 点 P */}
        <Point x={cosV} y={sinV} color="#dc2626" />

        {/* 点 D（P 在 x 轴上的投影） */}
        <Point x={cosV} y={0} color="#2563eb" />

        {/* 标签 */}
        <DText x={cosV + 0.55} y={sinV + 0.22} size={20} color="#dc2626">P(cos θ, sin θ)</DText>
        <DText x={-0.12} y={-0.12} size={20}>O</DText>
        <DText x={0.32} y={0.1} size={20} color="#dc2626">θ</DText>
        <DText x={cosV + 0.12} y={-0.1} size={18} color="#2563eb">D</DText>
        <DText x={cosV / 2} y={-0.22} size={18} color="#2563eb">OD = cos θ</DText>
        <DText x={cosV + 0.34} y={sinV / 2} size={18} color="#16a34a">DP = sin θ</DText>
        <DText x={cosV / 2 - 0.12} y={sinV / 2 + 0.1} size={18} color="#2563eb">1</DText>
      </DebugMafs>
    </div>
  );
}

/* ── 诱导公式对称小图（通用组件） ── */
function SymmetryMini({ originalAngle, newAngle, label, color, labelOffset }: { originalAngle: number; newAngle: number; label: string; color: string; labelOffset?: [number, number] }) {
  const r1 = (originalAngle * Math.PI) / 180;
  const r2 = (newAngle * Math.PI) / 180;
  const c1 = Math.cos(r1), s1 = Math.sin(r1);
  const c2 = Math.cos(r2), s2 = Math.sin(r2);

  return (
    <DebugMafs viewBox={{ x: [-1.4, 1.4], y: [-1.4, 1.4] }} preserveAspectRatio="contain" height={136}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Circle center={[0, 0]} radius={1} color="#d1d5db" fillOpacity={0} strokeOpacity={0.3} />
      <Line.Segment point1={[0, 0]} point2={[c1, s1]} color="#2563eb" weight={2} />
      <Point x={c1} y={s1} color="#2563eb" />
      <DText x={c1 * 1.2 + 0.35} y={s1 * 1.2 + 0.15} size={14} color="#2563eb">30°</DText>
      <Line.Segment point1={[0, 0]} point2={[c2, s2]} color={color} weight={2} style="dashed" />
      <Point x={c2} y={s2} color={color} />
      <DText x={c2 * 1.2 + (labelOffset?.[0] ?? 0.35)} y={s2 * 1.2 + (labelOffset?.[1] ?? 0.15)} size={13} color={color}>{label}</DText>
    </DebugMafs>
  );
}

export function SymNegative() { return <SymmetryMini originalAngle={30} newAngle={-30} label="-30°" color="#dc2626" />; }
export function SymPiMinus() { return <SymmetryMini originalAngle={30} newAngle={150} label="150°" color="#16a34a" labelOffset={[-0.1, 0.3]} />; }
export function SymPiPlus() { return <SymmetryMini originalAngle={30} newAngle={210} label="210°" color="#7c3aed" labelOffset={[-0.2, -0.3]} />; }
export function SymHalfPiMinus() { return <SymmetryMini originalAngle={30} newAngle={60} label="60°" color="#d97706" />; }
export function SymHalfPiPlus() { return <SymmetryMini originalAngle={30} newAngle={120} label="120°" color="#0891b2" />; }

/* ── y = sin x 图像 ── */
export function SinGraphDiagram() {
  const HP = Math.PI / 2;   // π/2
  const PI = Math.PI;        // π
  const HP3 = 3 * Math.PI / 2; // 3π/2
  const TP = 2 * Math.PI;    // 2π

  return (
    <div className="my-1">
      <DebugMafs viewBox={{ x: [-0.5, 7.5], y: [-1.35, 1.58] }} preserveAspectRatio="contain" height={160}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: () => '' }}
          yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
        />
        {/* sin 曲线 */}
        <Plot.OfX y={(x) => Math.sin(x)} color="#16a34a" weight={2.5} />
        {/* 关键点 */}
        <Point x={0} y={0} color="#16a34a" />
        <Point x={HP} y={1} color="#dc2626" />
        <Point x={PI} y={0} color="#16a34a" />
        <Point x={HP3} y={-1} color="#dc2626" />
        <Point x={TP} y={0} color="#16a34a" />
        {/* x 轴刻度线 */}
        <Line.Segment point1={[HP, -0.08]} point2={[HP, 0.08]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[PI, -0.08]} point2={[PI, 0.08]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[HP3, -0.08]} point2={[HP3, 0.08]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[TP, -0.08]} point2={[TP, 0.08]} color="#6b7280" weight={1.5} />
        {/* x 轴刻度标签 — 数学渲染 */}
        <DLatex at={[1.58, -0.32]} tex="\frac{\pi}{2}" color="#6b7280" />
        <DText x={3.15} y={-0.32} size={24} color="#6b7280">π</DText>
        <DLatex at={[4.71, -0.31]} tex="\frac{3\pi}{2}" color="#6b7280" />
        <DText x={6.29} y={-0.28} size={14} color="#6b7280">2π</DText>
        {/* 最值标注 */}
        <DText x={1.76} y={1.41} size={19} color="#dc2626">最大值 1</DText>
        <DText x={4.74} y={-1.41} size={14} color="#dc2626">最小值 -1</DText>
        {/* 函数名 */}
        <DText x={10.61} y={1.50} size={24} color="#16a34a">y = sin x</DText>
      </DebugMafs>
    </div>
  );
}

/* ── y = cos x 图像 ── */
export function CosGraphDiagram() {
  const HP = Math.PI / 2;
  const PI = Math.PI;
  const HP3 = 3 * Math.PI / 2;
  const TP = 2 * Math.PI;

  return (
    <div className="my-1">
      <DebugMafs viewBox={{ x: [-0.3, 7], y: [-1.35, 1.4] }} preserveAspectRatio="contain" height={153}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: () => '' }}
          yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
        />
        {/* cos 曲线 */}
        <Plot.OfX y={(x) => Math.cos(x)} color="#2563eb" weight={2.5} />
        {/* 关键点 */}
        <Point x={0} y={1} color="#dc2626" />
        <Point x={HP} y={0} color="#2563eb" />
        <Point x={PI} y={-1} color="#dc2626" />
        <Point x={HP3} y={0} color="#2563eb" />
        <Point x={TP} y={1} color="#dc2626" />
        {/* x 轴刻度线 */}
        <Line.Segment point1={[HP, -0.07]} point2={[HP, 0.07]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[PI, -0.07]} point2={[PI, 0.07]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[HP3, -0.07]} point2={[HP3, 0.07]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[TP, -0.07]} point2={[TP, 0.07]} color="#6b7280" weight={1.5} />
        {/* x 轴刻度标签 — 数学渲染 */}
        <DLatex at={[1.61, -0.48]} tex="\frac{\pi}{2}" color="#6b7280" />
        <DText x={3.16} y={-0.46} size={14} color="#6b7280">π</DText>
        <DLatex at={[4.71, -0.51]} tex="\frac{3\pi}{2}" color="#6b7280" />
        <DText x={6.32} y={-0.46} size={18} color="#6b7280">2π</DText>
        {/* 最值标注 */}
        <DText x={0.72} y={1.40} size={14} color="#dc2626">最大值 1</DText>
        <DText x={3.21} y={-1.53} size={14} color="#dc2626">最小值 -1</DText>
        {/* 函数名 */}
        <DText x={7.75} y={1.68} size={15} color="#2563eb">y = cos x</DText>
      </DebugMafs>
    </div>
  );
}

/* ── y = tan x 图像 ── */
export function TanGraphDiagram() {
  const HP = Math.PI / 2;
  const PI = Math.PI;
  const HP3 = 3 * Math.PI / 2;
  const TP = 2 * Math.PI;
  const HP5 = 5 * Math.PI / 2;

  return (
    <div className="my-1">
      <DebugMafs viewBox={{ x: [-0.3, 7], y: [-2.2, 2.5] }} preserveAspectRatio="contain" height={148}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: () => '' }}
          yAxis={{ lines: false, labels: (n) => (n === 1 || n === -1 ? n : '') }}
        />
        {/* 渐近线 */}
        <Line.Segment point1={[HP, -3]} point2={[HP, 3]} color="#ef4444" weight={1} style="dashed" />
        <Line.Segment point1={[HP3, -3]} point2={[HP3, 3]} color="#ef4444" weight={1} style="dashed" />
        <Line.Segment point1={[HP5, -3]} point2={[HP5, 3]} color="#ef4444" weight={1} style="dashed" />
        {/* tan 曲线分段画 */}
        <Plot.OfX y={(x) => Math.tan(x)} color="#7c3aed" weight={2.5} domain={[-0.3, HP - 0.08]} />
        <Plot.OfX y={(x) => Math.tan(x)} color="#7c3aed" weight={2.5} domain={[HP + 0.08, HP3 - 0.08]} />
        <Plot.OfX y={(x) => Math.tan(x)} color="#7c3aed" weight={2.5} domain={[HP3 + 0.08, HP5 - 0.08]} />
        {/* 关键点 */}
        <Point x={0} y={0} color="#7c3aed" />
        <Point x={PI} y={0} color="#7c3aed" />
        <Point x={TP} y={0} color="#7c3aed" />
        {/* x 轴刻度线 */}
        <Line.Segment point1={[HP, -0.12]} point2={[HP, 0.12]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[PI, -0.12]} point2={[PI, 0.12]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[HP3, -0.12]} point2={[HP3, 0.12]} color="#6b7280" weight={1.5} />
        <Line.Segment point1={[TP, -0.12]} point2={[TP, 0.12]} color="#6b7280" weight={1.5} />
        {/* x 轴刻度标签 */}
        <DLatex at={[1.57, -0.5]} tex="\frac{\pi}{2}" color="#6b7280" />
        <DText x={3.14} y={-0.4} size={14} color="#6b7280">π</DText>
        <DLatex at={[4.71, -0.5]} tex="\frac{3\pi}{2}" color="#6b7280" />
        <DText x={6.28} y={-0.4} size={14} color="#6b7280">2π</DText>
        {/* 渐近线标注 */}
        <DText x={1.64} y={1.45} size={13} color="#ef4444">渐近线</DText>
        {/* 函数名 */}
        <DText x={5.91} y={2.18} size={15} color="#7c3aed">y = tan x</DText>
      </DebugMafs>
    </div>
  );
}

/* ── 实战练习配图（针对每道小题） ── */

/* Q1: sin 递增区间 [-π/2, π/2] 高亮 */
export function MiniQ1SinIncreasing() {
  const HP = Math.PI / 2;
  return (
    <DebugMafs viewBox={{ x: [-3.5, 3.5], y: [-1.4, 1.4] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Plot.OfX y={(x) => Math.sin(x)} color="#d1d5db" weight={1.5} />
      <Plot.OfX y={(x) => Math.sin(x)} color="#16a34a" weight={3} domain={[-HP, HP]} />
      <Point x={-HP} y={-1} color="#16a34a" />
      <Point x={HP} y={1} color="#dc2626" />
      <DText x={0} y={-1.15} size={11} color="#16a34a">递增</DText>
    </DebugMafs>
  );
}

/* Q2: cos 偶函数，关于 y 轴对称 */
export function MiniQ2CosEven() {
  return (
    <DebugMafs viewBox={{ x: [-4.08, 4.68], y: [-1.55, 1.95] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Plot.OfX y={(x) => Math.cos(x)} color="#2563eb" weight={2} />
      <Line.Segment point1={[0, -1.3]} point2={[0, 1.3]} color="#dc2626" weight={1.5} style="dashed" />
      <Point x={0} y={1} color="#dc2626" />
      <DText x={-0.09} y={1.94} size={13} color="#dc2626">对称轴</DText>
    </DebugMafs>
  );
}

/* Q3: cos 递减，标出 π/5 和 π/3 两个点 */
export function MiniQ3CosCompare() {
  const a = Math.PI / 5, b = Math.PI / 3;
  return (
    <DebugMafs viewBox={{ x: [0.23, 1.8], y: [-0.36, 1.07] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Plot.OfX y={(x) => Math.cos(x)} color="#2563eb" weight={2.5} />
      <Point x={a} y={Math.cos(a)} color="#dc2626" />
      <Point x={b} y={Math.cos(b)} color="#dc2626" />
      <Line.Segment point1={[a, 0.15]} point2={[a, Math.cos(a)]} color="#dc2626" weight={1} style="dashed" />
      <Line.Segment point1={[b, 0.15]} point2={[b, Math.cos(b)]} color="#dc2626" weight={1} style="dashed" />
      <DText x={0.63} y={0.05} size={12} color="#dc2626">π/5</DText>
      <DText x={1.05} y={0.05} size={12} color="#dc2626">π/3</DText>
    </DebugMafs>
  );
}

/* Q4: tan 一个周期，从 -π/2 到 π/2 */
export function MiniQ4TanPeriod() {
  const HP = Math.PI / 2;
  return (
    <DebugMafs viewBox={{ x: [-2.1, 4.9], y: [-2.5, 2.5] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Line.Segment point1={[HP, -2.5]} point2={[HP, 2.5]} color="#ef4444" weight={0.8} style="dashed" />
      <Line.Segment point1={[-HP, -2.5]} point2={[-HP, 2.5]} color="#ef4444" weight={0.8} style="dashed" />
      <Line.Segment point1={[HP * 3, -2.5]} point2={[HP * 3, 2.5]} color="#ef4444" weight={0.8} style="dashed" />
      <Plot.OfX y={(x) => Math.tan(x)} color="#d1d5db" weight={1.5} domain={[HP + 0.1, HP * 3 - 0.1]} />
      <Plot.OfX y={(x) => Math.tan(x)} color="#7c3aed" weight={3} domain={[-HP + 0.1, HP - 0.1]} />
      <DText x={0.21} y={-2.00} size={12} color="#7c3aed">T = π</DText>
    </DebugMafs>
  );
}

/* Q5: sin 对称中心 (π,0) 标注 */
export function MiniQ5SinCenter() {
  const PI = Math.PI;
  return (
    <DebugMafs viewBox={{ x: [-0.3, 6.8], y: [-1.5, 1.3] }} preserveAspectRatio="contain" height={77}>
      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
      <Plot.OfX y={(x) => Math.sin(x)} color="#16a34a" weight={2} />
      <Point x={PI} y={0} color="#dc2626" />
      <DText x={3.11} y={1.08} size={14} color="#dc2626">(π,0)</DText>
      <DText x={3.15} y={-0.90} size={11} color="#dc2626">对称中心</DText>
    </DebugMafs>
  );
}

/* ── 象限符号图解 ── */
/* ═══════════════════════════════════════════════════════
   解三角形配图 — Solve Triangle Page
   ═══════════════════════════════════════════════════════ */

/* ── 象限符号图解 ── */
export function QuadrantSignDiagram() {
  return (
    <div className="my-3" style={{ maxWidth: 360, margin: '0 auto' }}>
      <DebugMafs viewBox={{ x: [-2.2, 2.2], y: [-2, 2.2] }} preserveAspectRatio="contain" height={286}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: () => '' }}
          yAxis={{ lines: false, labels: () => '' }}
        />

        {/* 第一象限 */}
        <DText x={1.1} y={1.4} size={15} color="#16a34a">第一象限</DText>
        <DText x={1.1} y={1.0} size={14} color="#16a34a">sin+ cos+ tan+</DText>
        <DText x={1.1} y={0.55} size={16} color="#16a34a">全正</DText>

        {/* 第二象限 */}
        <DText x={-1.1} y={1.4} size={15} color="#2563eb">第二象限</DText>
        <DText x={-1.1} y={1.0} size={14} color="#2563eb">sin +</DText>
        <DText x={-1.1} y={0.55} size={13} color="#9ca3af">cos− tan−</DText>

        {/* 第三象限 */}
        <DText x={-1.1} y={-0.5} size={15} color="#7c3aed">第三象限</DText>
        <DText x={-1.1} y={-0.9} size={14} color="#7c3aed">tan +</DText>
        <DText x={-1.1} y={-1.35} size={13} color="#9ca3af">sin− cos−</DText>

        {/* 第四象限 */}
        <DText x={1.1} y={-0.5} size={15} color="#d97706">第四象限</DText>
        <DText x={1.1} y={-0.9} size={14} color="#d97706">cos +</DText>
        <DText x={1.1} y={-1.35} size={13} color="#9ca3af">sin− tan−</DText>
      </DebugMafs>
    </div>
  );
}
