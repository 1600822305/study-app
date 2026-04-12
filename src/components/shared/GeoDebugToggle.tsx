/**
 * GeoDebugToggle — 合并的 2D/3D 调试开关
 *
 * 一个按钮同时控制 Geo2dDebug 和 Geo3dDebug 的调试模式
 */
import { useGeo2dDebug, _toggle2d } from './Geo2dDebug';
import { useGeo3dDebug, _toggle3d } from './Geo3dDebug';

export function GeoDebugToggle() {
  const on2d = useGeo2dDebug();
  const on3d = useGeo3dDebug();
  const on = on2d || on3d;

  const handleClick = () => {
    // 同步切换：如果任一个开着就全关，否则全开
    if (on) {
      if (on2d) _toggle2d();
      if (on3d) _toggle3d();
    } else {
      _toggle2d();
      _toggle3d();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 right-16 z-50 text-[11px] font-mono px-3 py-1.5 rounded-md shadow-md print:hidden transition-all border ${
        on
          ? 'bg-teal-500 text-white border-teal-400 hover:bg-teal-600'
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700 opacity-60 hover:opacity-100'
      }`}
    >
      📐 {on ? 'ON' : 'Debug'}
    </button>
  );
}
