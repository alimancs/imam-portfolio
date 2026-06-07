'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  threshold?: number;
}

export default function RevealSection({
  children,
  className,
  threshold = 0.15,
  ...props
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out opacity-0 translate-y-8 scale-[0.99] will-change-transform',
        visible && 'opacity-100 translate-y-0 scale-100',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
