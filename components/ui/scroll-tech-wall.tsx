"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TechItem {
  name: string;
  description: string; // e.g., "Frontend Library", "Backend Framework"
  /** Image URL – preferably square logo with transparent background */
  logoSrc: string;
}

export interface ScrollTechWallProps {
  /** Big sticky title rendered with `mix-blend-exclusion`. */
  title?: React.ReactNode;
  /** Small line under the title. */
  date?: React.ReactNode;
  /** Scroll hint that fades out as the wall comes into view. */
  hint?: React.ReactNode;
  /** Tech stack items to scatter across the wall. */
  items?: TechItem[];
  /** Columns on large screens (auto-reduced to 3 on `sm` and 2 on mobile). */
  columns?: number;
  /** Show the name / description caption under each logo. Default `true`. */
  showCaptions?: boolean;
  className?: string;
}

function buildLayout(count: number, cols: number): number[][] {
  const rows: number[][] = [];
  let i = 0;
  let r = 0;
  while (i < count) {
    const row = new Array<number>(cols).fill(-1);
    const a = (r * 2 + (r % 2)) % cols;
    row[a] = i++;
    if (r % 3 === 0 && i < count) {
      let b = (a + 2) % cols;
      if (b === a) b = (a + 1) % cols;
      row[b] = i++;
    }
    rows.push(row);
    r++;
  }
  return rows;
}

function useResponsiveColumns(desired: number): number {
  const [cols, setCols] = React.useState(desired);

  React.useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      if (lg.matches) setCols(desired);
      else if (sm.matches) setCols(Math.min(desired, 3));
      else setCols(Math.min(desired, 2));
    };
    update();
    sm.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, [desired]);

  return cols;
}

const DEMO_TECH_ITEMS: TechItem[] = [
  {
    name: "Java",
    description: "Backend / Spring Boot",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "React",
    description: "UI Library",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    description: "React Framework",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React Native",
    description: "Mobile Apps",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Express.js",
    description: "Node.js Framework",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MySQL",
    description: "Database",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Spring Boot",
    description: "Java Framework",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Python",
    description: "Backend / AI",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C",
    description: "Systems Programming",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MongoDB",
    description: "NoSQL Database",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

export function ScrollTechWall({
  title = "Tech Stack",
  date = "Full-Stack & Mobile",
  hint = "scroll to explore",
  items = DEMO_TECH_ITEMS,
  columns = 4,
  showCaptions = true,
  className,
}: ScrollTechWallProps) {
  const root = React.useRef<HTMLElement | null>(null);
  const hintRef = React.useRef<HTMLDivElement | null>(null);
  const cols = useResponsiveColumns(Math.max(1, columns));
  const layout = React.useMemo(
    () => buildLayout(items.length, cols),
    [items.length, cols],
  );
  const [isMobile, setIsMobile] = React.useState(false);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mobile = window.matchMedia('(max-width: 640px)').matches;
      setIsMobile(mobile);
      const itemsEl = gsap.utils.toArray<HTMLElement>(".spw-item");

      if (reduce || mobile) {
        gsap.set(itemsEl, { clearProps: 'all' });
        return;
      }

      gsap.to(hintRef.current, {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=40%",
          scrub: true,
        },
      });

      itemsEl.forEach((el) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
          .fromTo(el, { scale: 0 }, { scale: 1, ease: "power2.out", duration: 0.5 })
          .to(el, { scale: 0, ease: "power2.in", duration: 0.5 });
      });
    },
    { scope: root, dependencies: [cols], revertOnUpdate: true },
  );

  // Mobile fade-in/out for tech items using IntersectionObserver
  React.useEffect(() => {
    if (!isMobile || !root.current) return;

    const items = Array.from(root.current.querySelectorAll<HTMLElement>('.spw-item'));
    items.forEach((it) => {
      it.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-600', 'ease-out');
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('opacity-100');
            el.classList.remove('opacity-0', 'translate-y-4');
          } else {
            el.classList.remove('opacity-100');
            el.classList.add('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    items.forEach((it) => obs.observe(it));

    return () => obs.disconnect();
  }, [isMobile, cols]);

  return (
    <section
      ref={root}
      aria-label={typeof title === "string" ? title : undefined}
      className={cn("relative w-full px-4 py-8 text-foreground sm:px-0", className)}
    >
      <div
        ref={hintRef}
        className="pointer-events-none absolute left-1/2 top-[60vh] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center"
      >
        <span className="relative max-w-[12ch] text-xs uppercase leading-tight text-muted-foreground after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:to-muted-foreground/40 after:content-['']">
          {hint}
        </span>
      </div>

      <div className="pointer-events-none sticky top-1/2 z-20 -translate-y-1/2 text-center text-white mix-blend-exclusion">
        <h2 className="text-5xl font-semibold font-changa sm:text-7xl md:text-8xl lg:text-9xl">
          {title}
        </h2>
        {date && (
          <p className="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
            {date}
          </p>
        )}
      </div>

      <div className="relative z-0 mb-[30vh] mt-[30vh] sm:mb-[50vh] sm:mt-[50vh]">
        {layout.map((row, ri) => (
          <div key={ri} className="flex w-full gap-2">
            {row.map((idx, ci) => {
              if (idx === -1) return <div key={ci} className="aspect-square flex-1 min-w-0" />;

              const item = items[idx];
              const origin = ci < cols / 2 ? "right bottom" : "left bottom";

              return (
                <div key={ci} className="aspect-square flex-1 min-w-0">
                  <div
                    className="spw-item relative h-full w-full"
                    style={{ transformOrigin: origin, transform: "scale(0)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.logoSrc}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-contain p-6 grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95 dark:invert"
                    />
                    {showCaptions && (
                      <div className="absolute -bottom-2 left-0 flex w-full translate-y-full justify-between gap-2 text-[11px] uppercase leading-tight text-muted-foreground sm:text-sm">
                        <span className="truncate">{item.name}</span>
                        <span className="shrink-0">({item.description})</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollTechWall;
