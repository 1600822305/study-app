import { useState, useEffect, useCallback } from 'react';

import { storage } from '@/lib/storage';

import type { ProgressItem } from '@/types';

/**
 * Manage learning progress for a module via IndexedDB.
 * Accepts static item definitions, returns items with checked state + toggle function.
 */
export function useProgress(
  module: string,
  itemDefs: { id: string; label: string }[],
): {
  items: ProgressItem[];
  toggle: (id: string) => void;
  loading: boolean;
} {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    storage.progress.getCheckedIds(module).then((ids) => {
      if (!cancelled) {
        setCheckedIds(new Set(ids));
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [module]);

  const toggle = useCallback(
    (id: string) => {
      setCheckedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
      storage.progress.toggle(module, id);
    },
    [module],
  );

  const items: ProgressItem[] = itemDefs.map((def) => ({
    ...def,
    checked: checkedIds.has(def.id),
  }));

  return { items, toggle, loading };
}
