import { memo, useMemo } from 'react';
import katex from 'katex';

// Runtime fallback cache for dynamic tex strings not handled by vite-plugin-katex-prerender
const cache = new Map<string, string>();

function renderKatex(tex: string, display: boolean): string {
  const key = display ? `D:${tex}` : `I:${tex}`;
  let html = cache.get(key);
  if (html === undefined) {
    html = katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      trust: true,
    });
    cache.set(key, html);
  }
  return html;
}

interface MathProps {
  tex: string;
  display?: boolean;
  className?: string;
}

export const Math = memo(function Math({ tex, display = false, className = '' }: MathProps) {
  const html = useMemo(() => renderKatex(tex, display), [tex, display]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
});
