// ============================================================
// Application-wide constants
// ============================================================

export const APP_NAME = 'StudyGoGoGo';

export const STORAGE_PREFIX = 'studygogo';

export const storageKey = (module: string, key: string) =>
  `${STORAGE_PREFIX}:${module}:${key}`;
