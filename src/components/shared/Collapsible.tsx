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
}

export function Collapsible({
  title,
  children,
  defaultOpen = false,
  variant = 'default',
  storageKey,
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
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-3 text-left font-medium cursor-pointer hover:opacity-80 transition-opacity"
      >
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        <span className={titleStyles[variant]}>{title}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}
