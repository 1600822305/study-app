import { Flame } from 'lucide-react';

import { SpeakButton } from '../SpeakButton';

interface Tag {
  label: string;
  color: 'green' | 'blue' | 'purple' | 'amber' | 'red';
}

const tagColors: Record<Tag['color'], string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  amber: 'bg-amber-100 text-amber-700',
  red: 'bg-red-100 text-red-700',
};

interface PageHeaderProps {
  /** 阶段文字，如 "第一阶段 · 数学语言" 或 "前置准备" */
  stage: string;
  /** 阶段类型：lesson 蓝色火焰 | prereq 琥珀色书本 */
  variant?: 'lesson' | 'prereq';
  /** 页面标题，如 "1.3 常用逻辑用语" */
  title: string;
  /** 朗读文本 */
  narration?: string;
  /** 副标题，如 "从零到满分 · 2-3小时搞定" */
  subtitle?: string;
  /** 标签列表 */
  tags?: Tag[];
}

export function PageHeader({
  stage,
  variant = 'lesson',
  title,
  narration,
  subtitle,
  tags,
}: PageHeaderProps) {
  const isPrereq = variant === 'prereq';

  return (
    <div className="mb-8">
      {stage && (
      <div className={`flex items-center gap-2 text-sm mb-2 ${isPrereq ? 'text-amber-600' : 'text-blue-600'}`}>
        {isPrereq ? <span>📚</span> : <Flame size={16} />}
        <span>{stage}</span>
      </div>
      )}
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-black text-gray-900 mb-2">{title}</h1>
        {narration && <SpeakButton text={narration} />}
      </div>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-3">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-3 py-1 text-xs font-medium rounded-full ${tagColors[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
