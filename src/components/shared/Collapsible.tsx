import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

import { useUIState } from '@/hooks/useUIState';

import type { CollapsibleVariant } from '@/types';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: CollapsibleVariant;
  /** If provided, open/close state is persisted to IndexedDB */
  storageKey?: string;
  /** Extra element rendered after the title (e.g. SpeakButton) */
  headerExtra?: React.ReactNode;
}

export function Collapsible({
  title,
  children,
  defaultOpen = false,
  variant = 'default',
  storageKey,
  headerExtra,
}: CollapsibleProps) {
  const [localOpen, setLocalOpen] = useState(defaultOpen);
  const [persistedOpen, setPersistedOpen] = useUIState(
    storageKey ? `collapsible:${storageKey}` : '',
    defaultOpen,
  );

  const open = storageKey ? persistedOpen : localOpen;
  const setOpen = storageKey ? setPersistedOpen : setLocalOpen;

  const styles = {
    default: 'border-gray-200 bg-white',
    answer: 'border-blue-200 bg-blue-50',
    tip: 'border-amber-200 bg-amber-50',
  };

  const titleStyles = {
    default: 'text-gray-700',
    answer: 'text-blue-700',
    tip: 'text-amber-700',
  };

  return (
    <div className={`rounded-xl border ${styles[variant]} mb-3 overflow-hidden`}>
      <div className="flex items-center px-4 py-3">
        <button
          onClick={() => setOpen(!open)}
          className="flex-1 flex items-center gap-2 text-left font-medium cursor-pointer hover:opacity-80 transition-opacity"
        >
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          <span className={titleStyles[variant]}>{title}</span>
        </button>
        {headerExtra && (
          <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
            {headerExtra}
          </div>
        )}
      </div>
      {open && (
        <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}
