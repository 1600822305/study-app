/**
 * Scroll to an element by ID within the main scroll container.
 * Avoids scrollIntoView which can scroll parent overflow-hidden containers,
 * causing blank space at the bottom of the page.
 */
export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  // The scroll container is main > div.overflow-y-auto in Layout.tsx
  const scrollContainer = document.querySelector('main > div');
  if (!scrollContainer) {
    // Fallback: use scrollIntoView if container not found
    target.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const containerRect = scrollContainer.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const offset = targetRect.top - containerRect.top + scrollContainer.scrollTop;

  scrollContainer.scrollTo({
    top: Math.max(0, offset - 16), // 16px padding from top
    behavior: 'smooth',
  });
}
