import { useState, useEffect, useCallback, useRef } from 'react';

import { storage } from '@/lib/storage';

/**
 * Persist any JSON-serializable value to IndexedDB via UIStateRepository.
 * Loads saved value on mount, writes back on change.
 */
export function useUIState<T>(key: string, defaultValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(defaultValue);
  const loadedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    storage.ui.getJSON<T>(key, defaultValue).then((saved) => {
      if (!cancelled) {
        setValue(saved);
        loadedRef.current = true;
      }
    });
    return () => { cancelled = true; };
  }, [key]);

  const update = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof newValue === 'function'
          ? (newValue as (prev: T) => T)(prev)
          : newValue;
        if (loadedRef.current) {
          storage.ui.setJSON(key, resolved);
        }
        return resolved;
      });
    },
    [key],
  );

  return [value, update];
}
