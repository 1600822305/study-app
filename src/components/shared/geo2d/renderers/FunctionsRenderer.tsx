import type { FunctionCurve2D, CoordinateSystem2D, Axes2D } from '../types';
import { toPixel } from '../utils';

interface FunctionsRendererProps {
  functions: FunctionCurve2D[];
  cs: CoordinateSystem2D;
  axes: Axes2D;
  strokeColor: string;
}

export function FunctionsRenderer({ functions, cs, axes, strokeColor }: FunctionsRendererProps) {
  return (
    <>
      {functions.map((curve, i) => {
        const [xMin, xMax] = curve.xRange ?? axes.xRange;
        const samples = curve.samples ?? 200;
        const step = (xMax - xMin) / samples;

        // 采样并转像素坐标，跳过 NaN / Infinity
        const segments: string[] = [];
        let currentPath = '';

        for (let s = 0; s <= samples; s++) {
          const x = xMin + s * step;
          const y = curve.fn(x);

          if (!Number.isFinite(y)) {
            // 断开：遇到不连续点（如 1/x 在 x=0）
            if (currentPath) {
              segments.push(currentPath);
              currentPath = '';
            }
            continue;
          }

          const [px, py] = toPixel([x, y], cs);
          if (!currentPath) {
            currentPath = `M ${px} ${py}`;
          } else {
            currentPath += ` L ${px} ${py}`;
          }
        }
        if (currentPath) segments.push(currentPath);

        return segments.map((d, j) => (
          <path
            key={`fn-${i}-${j}`}
            d={d}
            fill="none"
            stroke={curve.color ?? strokeColor}
            strokeWidth={curve.strokeWidth ?? 2}
            strokeDasharray={curve.dashed ? '5 4' : undefined}
          />
        ));
      })}
    </>
  );
}
