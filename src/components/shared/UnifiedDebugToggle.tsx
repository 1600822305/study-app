/**
 * UnifiedDebugToggle — 统一的 Mafs / Geo2dSvg / Geo3dSvg 调试开关
 *
 * 一个按钮同时控制三套调试系统：
 *   - Mafs（函数曲线）
 *   - Geo2dSvg（2D 平面几何）
 *   - Geo3dSvg（3D 立体几何）
 *
 * 点击逻辑：任一开着则全关，否则全开。
 * 各图上的 🛠 小按钮维持不变。
 */
import { useGeo2dDebug, _toggle2d } from './geo2d/Geo2dDebug';
import { useGeo3dDebug, _toggle3d } from './Geo3dDebug';
import { useDebugEnabled as useMafsDebug, _toggleMafs } from '@/features/trig/MafsDebug';

export function UnifiedDebugToggle() {
  const on2d = useGeo2dDebug();
  const on3d = useGeo3dDebug();
  const onMafs = useMafsDebug();
  const on = on2d || on3d || onMafs;

  const handleClick = () => {
    if (on) {
      if (on2d) _toggle2d();
      if (on3d) _toggle3d();
      if (onMafs) _toggleMafs();
    } else {
      _toggle2d();
      _toggle3d();
      _toggleMafs();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 right-4 z-50 text-[11px] font-mono px-3 py-1.5 rounded-md shadow-md print:hidden transition-all border ${
        on
          ? 'bg-teal-500 text-white border-teal-400 hover:bg-teal-600'
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700 opacity-60 hover:opacity-100'
      }`}
      title="统一调试模式（Mafs / 2D / 3D）"
    >
      📏 {on ? 'ON' : 'Debug'}
    </button>
  );
}
