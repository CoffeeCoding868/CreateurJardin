import type { ReactNode, ElementType } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
};

/**
 * Wraps children in a scroll-reveal animation.
 * `delay` is in ms — use sparingly for subtle stagger effects.
 */
export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
