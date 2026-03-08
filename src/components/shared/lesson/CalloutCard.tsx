import { AlertTriangle, Lightbulb, Flame, Info } from 'lucide-react';

type CalloutVariant = 'warning' | 'tip' | 'danger' | 'info';

const variantConfig: Record<CalloutVariant, {
  bg: string;
  border: string;
  titleColor: string;
  textColor: string;
  icon: React.ReactNode;
}> = {
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    titleColor: 'text-amber-800',
    textColor: 'text-amber-700',
    icon: <AlertTriangle size={18} className="text-amber-500" />,
  },
  tip: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    titleColor: 'text-blue-800',
    textColor: 'text-blue-700',
    icon: <Lightbulb size={18} className="text-blue-500" />,
  },
  danger: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    titleColor: 'text-red-800',
    textColor: 'text-red-700',
    icon: <Flame size={18} className="text-red-500" />,
  },
  info: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    titleColor: 'text-gray-800',
    textColor: 'text-gray-700',
    icon: <Info size={18} className="text-gray-500" />,
  },
};

interface CalloutCardProps {
  /** 风格变体 */
  variant?: CalloutVariant;
  /** 标题，不传则不显示 */
  title?: string;
  /** 覆盖默认图标，传 null 隐藏图标 */
  icon?: React.ReactNode | null;
  /** 额外的 className */
  className?: string;
  children: React.ReactNode;
}

export function CalloutCard({
  variant = 'warning',
  title,
  icon,
  className = '',
  children,
}: CalloutCardProps) {
  const config = variantConfig[variant];
  const resolvedIcon = icon === null ? null : (icon ?? config.icon);

  return (
    <div className={`${config.bg} border ${config.border} rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        {resolvedIcon && <span className="shrink-0 mt-0.5">{resolvedIcon}</span>}
        <div className="flex-1 min-w-0">
          {title && <p className={`font-bold text-sm ${config.titleColor} mb-1`}>{title}</p>}
          <div className={`text-sm ${config.textColor} space-y-1`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
