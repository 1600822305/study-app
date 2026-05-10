import { PageHeader, ExportButton, UnifiedDebugToggle } from '@/components/shared';

export function PowerPage() {
  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2.3 幂函数与总结"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end gap-2 print:hidden">
        <UnifiedDebugToggle />
        <ExportButton title="3.2.3 幂函数与总结" />
      </div>

      <div className="mt-2 text-gray-800">
        {/* TODO: 内容待填充 */}
      </div>
    </div>
  );
}
