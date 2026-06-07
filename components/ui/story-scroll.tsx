'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image'; // For optimized images if using Next.js

gsap.registerPlugin(ScrollTrigger);

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => (
  <section
    data-flow-section
    aria-label={ariaLabel}
    className={cx('relative min-h-[70vh] sm:min-h-screen w-full overflow-hidden', className)}
  >
    <div
      data-flow-inner
      className={cx(
        'flow-art-container relative flex min-h-[65vh] sm:min-h-screen w-full flex-col justify-between gap-4 sm:gap-6 px-4 sm:px-[4vw] pt-6 sm:pt-[clamp(2rem,8vw,4vw)] pb-6 sm:pb-[4vw]',
        'will-change-transform',
      )}
      style={{ transformOrigin: 'bottom left', ...style }}
    >
      {children}
    </div>
  </section>
);

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const childCount = (children: React.ReactNode) => React.Children.count(children);

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Project showcase',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const mm = window.matchMedia('(max-width: 640px)');
    const onChange = () => setIsMobile(mm.matches);
    onChange();
    mm.addEventListener('change', onChange);
    return () => mm.removeEventListener('change', onChange);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion || isMobile) return;

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('[data-flow-section]'),
      );
      if (sections.length === 0) return;

      const triggers: ScrollTrigger[] = [];

      sections.forEach((section, i) => {
        gsap.set(section, { zIndex: i + 1 });

        const inner = section.querySelector<HTMLElement>('.flow-art-container');
        if (!inner) return;

        if (i > 0) {
          gsap.set(inner, { rotation: 30, transformOrigin: 'bottom left' });
          const tween = gsap.to(inner, {
            rotation: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top 25%',
              scrub: true,
            },
          });
          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
        }

        if (i < sections.length - 1) {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: 'bottom bottom',
              end: 'bottom top',
              pin: true,
              pinSpacing: false,
            }),
          );
        }
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: containerRef, dependencies: [childCount(children), reducedMotion, isMobile] },
  );

  // Mobile fallback: simple fade-in/out for sections using IntersectionObserver
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const sections = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>('[data-flow-section]'),
    );
    if (sections.length === 0) return;

    sections.forEach((s) => {
      // Remove any inline z-index or transform left behind by GSAP on initial render
      try {
        s.style.zIndex = '';
      } catch (e) {
        /* ignore */
      }
      const inner = s.querySelector<HTMLElement>('.flow-art-container');
      if (inner) {
        try {
          inner.style.transform = '';
        } catch (e) {
          /* ignore */
        }
      }

      s.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('opacity-100');
            el.classList.remove('opacity-0', 'translate-y-6');
          } else {
            el.classList.remove('opacity-100');
            el.classList.add('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [isMobile, children]);

  return (
    <main
      ref={containerRef}
      aria-label={ariaLabel}
      className={cx('w-full overflow-x-hidden', className)}
    >
      {children}
    </main>
  );
};

export default FlowArt;
