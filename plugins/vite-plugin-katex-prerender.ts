import type { Plugin } from 'vite';
import katex from 'katex';

/**
 * Vite plugin: pre-render static <MathTex tex="..." /> at compile time.
 *
 * Matches patterns like:
 *   <MathTex tex="x^2+1" />
 *   <MathTex tex="x^2" display />
 *   <MathTex tex="x^2" display className="foo" />
 *   <MathTex tex="x^2" className="foo" />
 *   <MathTex tex="x^2" className="foo" display />
 *
 * Replaces with a raw <span dangerouslySetInnerHTML> at build time.
 * Dynamic tex (using {variable}) is left untouched.
 */
export default function katexPrerender(): Plugin {
  // Match <MathTex with tex="..." (static string) and optional display/className props
  // Captures the full tag so we can replace it entirely
  const TAG_RE =
    /<MathTex\s+((?:(?:tex|display|className)\s*=\s*(?:"[^"]*"|{[^}]*}|\w+)\s*|display\s+)*)\/?>/g;

  // Extract individual props
  const TEX_RE = /tex\s*=\s*"([^"]*)"/;
  const DISPLAY_RE = /(?:^|\s)display(?:\s*=\s*(?:\{true\}|"true"|true))?(?:\s|\/|$)/;
  const CLASSNAME_RE = /className\s*=\s*"([^"]*)"/;

  function transform(code: string, id: string): string | null {
    if (!id.match(/\.[jt]sx$/)) return null;
    if (!code.includes('MathTex')) return null;

    let changed = false;

    const result = code.replace(TAG_RE, (match, propsStr: string) => {
      const texMatch = TEX_RE.exec(propsStr);
      if (!texMatch) return match; // dynamic tex, skip

      const tex = texMatch[1];
      const display = DISPLAY_RE.test(propsStr);
      const classMatch = CLASSNAME_RE.exec(propsStr);
      const className = classMatch ? classMatch[1] : '';

      try {
        const html = katex.renderToString(tex, {
          displayMode: display,
          throwOnError: false,
          trust: true,
        });

        // Escape backticks and ${} for the template literal
        const escaped = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

        changed = true;
        const classAttr = className ? ` className="${className}"` : '';
        return `<span${classAttr} dangerouslySetInnerHTML={{ __html: \`${escaped}\` }} />`;
      } catch {
        // If KaTeX fails, leave original for runtime fallback
        return match;
      }
    });

    return changed ? result : null;
  }

  return {
    name: 'vite-plugin-katex-prerender',
    enforce: 'pre',
    transform(code, id) {
      return transform(code, id);
    },
  };
}
