import type { ProgressItem } from '@/types';

export const derivApplication2ProgressItems: ProgressItem[] = [
  { id: 'da2-monotone-param-eq', label: '已知单调性求参（恒成立）', checked: false },
  { id: 'da2-monotone-param', label: '存在子区间求参', checked: false },
  { id: 'da2-mono-discuss', label: '含参讨论单调性', checked: false },
];
