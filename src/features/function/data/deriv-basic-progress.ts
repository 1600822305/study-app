import type { ProgressItem } from '@/types';

export const derivBasicProgressItems: ProgressItem[] = [
  { id: 'db-formulas', label: '基本导数公式', checked: false },
  { id: 'db-rules', label: '求导法则', checked: false },
  { id: 'db-monotone', label: '导数与单调性', checked: false },
  { id: 'db-extrema', label: '极值与最值', checked: false },
  { id: 'db-tangent', label: '切线方程', checked: false },
];
