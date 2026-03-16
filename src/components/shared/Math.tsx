import { memo, useMemo } from 'react';
import katex from 'katex';

interface MathProps {
  tex: string;
  display?: boolean;
  className?: string;
}

export const Math = memo(function Math({ tex, display = false, className = '' }: MathProps) {
  const html = useMemo(
    () =>
      katex.renderToString(tex, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      }),
    [tex, display],
  );

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
});
