import { useState, useRef, useEffect, useCallback } from 'react';
import { Delete, ChevronUp, ChevronDown } from 'lucide-react';
import type { MathfieldElement } from 'mathlive';
import 'mathlive';

interface MathInputProps {
  value?: string;
  onChange?: (latex: string) => void;
  placeholder?: string;
  className?: string;
}

type KeyAction =
  | { type: 'insert'; latex: string }
  | { type: 'command'; cmd: string };

interface KeyDef {
  label: string;
  action: KeyAction;
  variant?: 'default' | 'operator' | 'accent';
}

const KEYS: KeyDef[][] = [
  [
    { label: '7', action: { type: 'insert', latex: '7' } },
    { label: '8', action: { type: 'insert', latex: '8' } },
    { label: '9', action: { type: 'insert', latex: '9' } },
    { label: '÷', action: { type: 'insert', latex: '\\div ' }, variant: 'operator' },
    { label: '√', action: { type: 'insert', latex: '\\sqrt{#0}' }, variant: 'accent' },
  ],
  [
    { label: '4', action: { type: 'insert', latex: '4' } },
    { label: '5', action: { type: 'insert', latex: '5' } },
    { label: '6', action: { type: 'insert', latex: '6' } },
    { label: '×', action: { type: 'insert', latex: '\\times ' }, variant: 'operator' },
    { label: 'x²', action: { type: 'insert', latex: '^{2}' }, variant: 'accent' },
  ],
  [
    { label: '1', action: { type: 'insert', latex: '1' } },
    { label: '2', action: { type: 'insert', latex: '2' } },
    { label: '3', action: { type: 'insert', latex: '3' } },
    { label: '−', action: { type: 'insert', latex: '-' }, variant: 'operator' },
    { label: 'aᵇ', action: { type: 'insert', latex: '^{#0}' }, variant: 'accent' },
  ],
  [
    { label: '0', action: { type: 'insert', latex: '0' } },
    { label: '.', action: { type: 'insert', latex: '.' } },
    { label: 'i', action: { type: 'insert', latex: 'i' }, variant: 'accent' },
    { label: '+', action: { type: 'insert', latex: '+' }, variant: 'operator' },
    { label: 'ᵃ⁄ᵦ', action: { type: 'insert', latex: '\\frac{#0}{#1}' }, variant: 'accent' },
  ],
  [
    { label: '(', action: { type: 'insert', latex: '(' }, variant: 'operator' },
    { label: ')', action: { type: 'insert', latex: ')' }, variant: 'operator' },
    { label: '±', action: { type: 'insert', latex: '\\pm ' }, variant: 'operator' },
    { label: 'π', action: { type: 'insert', latex: '\\pi ' }, variant: 'accent' },
    { label: '=', action: { type: 'insert', latex: '=' }, variant: 'operator' },
  ],
];

export function MathInput({
  value = '',
  onChange,
  placeholder = '点击输入答案...',
  className = '',
}: MathInputProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mfRef = useRef<MathfieldElement | null>(null);

  const syncValue = useCallback(() => {
    if (mfRef.current && onChange) {
      onChange(mfRef.current.value);
    }
  }, [onChange]);

  // Create math-field once
  useEffect(() => {
    if (!containerRef.current) return;

    const mf = document.createElement('math-field') as MathfieldElement;
    mf.value = value;
    mf.mathVirtualKeyboardPolicy = 'manual';
    mf.setAttribute('virtual-keyboard-mode', 'off');
    mf.addEventListener('input', syncValue);

    // Styling
    Object.assign(mf.style, {
      width: '100%',
      fontSize: '20px',
      padding: '8px 12px',
      borderRadius: '8px',
      border: '2px solid #e0ddd4',
      outline: 'none',
      background: '#faf8f4',
      minHeight: '44px',
      display: 'block',
      '--keycap-height': '0',
    } as Record<string, string>);

    if (placeholder) {
      mf.setAttribute('placeholder', placeholder);
    }

    mf.addEventListener('focus', () => {
      mf.style.borderColor = '#93b48b';
      mf.style.boxShadow = '0 0 0 3px rgba(147, 180, 139, 0.15)';
    });
    mf.addEventListener('blur', () => {
      mf.style.borderColor = '#e0ddd4';
      mf.style.boxShadow = 'none';
    });

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(mf);
    mfRef.current = mf;

    return () => {
      mf.removeEventListener('input', syncValue);
      mfRef.current = null;
    };
  }, []);

  // Sync external value
  useEffect(() => {
    if (mfRef.current && mfRef.current.value !== value) {
      mfRef.current.value = value;
    }
  }, [value]);

  const handleKey = (key: KeyDef) => {
    const mf = mfRef.current;
    if (!mf) return;

    if (key.action.type === 'insert') {
      mf.insert(key.action.latex, {
        focus: true,
        feedback: true,
        format: 'auto',
        selectionMode: 'placeholder',
      });
    }
    mf.focus();
    syncValue();
  };

  const handleBackspace = () => {
    const mf = mfRef.current;
    if (!mf) return;
    mf.executeCommand(['deleteBackward']);
    mf.focus();
    syncValue();
  };

  const handleClear = () => {
    const mf = mfRef.current;
    if (!mf) return;
    mf.value = '';
    mf.focus();
    syncValue();
  };

  const variantClass = (v?: string) => {
    switch (v) {
      case 'operator':
        return 'bg-[#e8efe5] text-[#3d5a3a] hover:bg-[#dce6d8] border-[#c5d4c0]';
      case 'accent':
        return 'bg-[#e6e0d4] text-[#5c4e3c] hover:bg-[#ddd6c8] border-[#cfc6b5]';
      default:
        return 'bg-[#faf8f4] text-[#4a4a42] hover:bg-[#f0ede6] border-[#e0ddd4]';
    }
  };

  return (
    <div className={className}>
      {/* MathLive editing field */}
      <div ref={containerRef} />

      {/* Toggle keyboard */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-1 mt-1 py-1.5 text-xs text-gray-500 hover:text-blue-600 cursor-pointer transition-colors"
      >
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        {open ? '收起键盘' : '展开数学键盘'}
      </button>

      {/* Custom keyboard panel */}
      {open && (
        <div className="p-2 bg-[#f5f3ee] rounded-xl border border-[#e0ddd4] shadow-sm">
          {/* Action bar */}
          <div className="flex items-center gap-1.5 mb-2">
            <button
              type="button"
              onClick={handleBackspace}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-red-50 text-red-600 rounded-lg hover:bg-red-100 border border-red-200 cursor-pointer transition-colors"
            >
              <Delete size={14} />
              退格
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 border border-gray-200 cursor-pointer transition-colors"
            >
              清空
            </button>
            <div className="flex-1" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-3 py-1.5 text-xs font-medium bg-[#6b8f63] text-white rounded-lg hover:bg-[#5a7d53] cursor-pointer transition-colors"
            >
              完成
            </button>
          </div>

          {/* Key grid */}
          <div className="space-y-1.5">
            {KEYS.map((row, ri) => (
              <div key={ri} className="grid grid-cols-5 gap-1.5">
                {row.map((key, ki) => (
                  <button
                    key={ki}
                    type="button"
                    onClick={() => handleKey(key)}
                    className={`py-3 rounded-lg text-lg font-semibold border cursor-pointer transition-colors active:scale-95 ${variantClass(key.variant)}`}
                  >
                    {key.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
