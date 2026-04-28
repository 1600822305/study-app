import type { ProgressItem } from '@/types';

export const derivPrereqProgressItems: ProgressItem[] = [
  { id: 'dp-substitute', label: '函数值的代入与化简', checked: false },
  { id: 'dp-slope', label: '直线斜率与点斜式', checked: false },
  { id: 'dp-avg-rate', label: '平均变化率（割线斜率）', checked: false },
  { id: 'dp-limit', label: '极限直觉与瞬时变化率', checked: false },
];
