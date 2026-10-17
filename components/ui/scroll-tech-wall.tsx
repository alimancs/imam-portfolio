"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface TechItem {
  name: string;
  description: string; // e.g., "Frontend Library", "Backend Framework"
  /** Image URL – preferably square logo with transparent background */
  logoSrc: string;
}

export interface ScrollTechWallProps {
  /** Section heading. */
  title?: React.ReactNode;
  /** Supporting label beside the heading. */
  date?: React.ReactNode;
  /** Technologies to show in the logo strip. */
  items?: TechItem[];
  /** Show technology names below the logos. Default `false`. */
  showCaptions?: boolean;
  /** Seconds each logo takes to travel past. Higher = slower. Default `3`. */
  secondsPerItem?: number;
  /**
   * Stop the animation when the OS has "reduce motion" enabled.
   * Default `false`: many systems have this on by default, which would freeze the loop.
   * When `false`, reduced-motion users get a much slower drift instead.
   */
  respectReducedMotion?: boolean;
  className?: string;
}

const DEMO_TECH_ITEMS: TechItem[] = [
  { name: "Java", description: "Backend / Spring Boot", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "React", description: "UI Library", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", description: "React Framework", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", description: "Typed JavaScript", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React Native", description: "Mobile Apps", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Express.js", description: "Node.js Framework", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MySQL", description: "Database", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Spring Boot", description: "Java Framework", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Python", description: "Backend / AI", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", description: "Systems Programming", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Tailwind CSS", description: "Utility-first CSS", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", description: "NoSQL Database", logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

/**
 * Fade both edges with a mask instead of overlay gradients.
 * Works on any background (light, dark, patterned) with no color matching.
 */
const EDGE_FADE =
  "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)";

export function ScrollTechWall({
  title = "Tech Stack",
  date = "Full-Stack & Mobile",
  items = DEMO_TECH_ITEMS,
  showCaptions = false,
  secondsPerItem = 3,
  respectReducedMotion = false,
  className,
}: ScrollTechWallProps) {
  const duration = Math.max(items.length * secondsPerItem, 10);
  const REDUCED_RULE = respectReducedMotion
    ? "animation: none;"
    : "animation-duration: calc(var(--tech-wall-duration, 40s) * 2);";

  const renderItems = (hidden: boolean) =>
    items.map((item) => (
      <li
        key={`${hidden ? "dup" : "main"}-${item.name}`}
        aria-hidden={hidden || undefined}
        role={hidden ? undefined : "img"}
        aria-label={
          hidden
            ? undefined
            : `${item.name}${showCaptions ? ` — ${item.description}` : ""}`
        }
        className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center border border-black/5 bg-white p-2 transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-zinc-900"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.logoSrc}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-full w-full object-contain"
        />
      </li>
    ));

  return (
    <section
      aria-label={typeof title === "string" ? title : undefined}
      className={cn("w-[90%] md:w-[50%] mx-auto py-3 text-foreground", className)}
    >
      {/* Local keyframes so the component stays self-contained */}
      <style>{`
        @keyframes tech-wall-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .tech-wall-track {
          animation: tech-wall-marquee var(--tech-wall-duration, 40s) linear infinite;
          will-change: transform;
        }
        .tech-wall-viewport:hover .tech-wall-track,
        .tech-wall-viewport:focus-within .tech-wall-track {
          animation-play-state: paused;
        }
        .tech-wall-viewport {
          overflow: hidden;
          scrollbar-width: none;
        }
        .tech-wall-viewport::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          .tech-wall-track {
            ${REDUCED_RULE}
          }
        }
      `}</style>
      <div
        role="region"
        aria-label="Technology logos"
        className="tech-wall-viewport w-full py-1.5"
        style={{
          maskImage: EDGE_FADE,
          WebkitMaskImage: EDGE_FADE,
        }}
      >
        <ul
          className="tech-wall-track flex w-max items-center"
          style={
            { "--tech-wall-duration": `${duration}s` } as React.CSSProperties
          }
        >
          {renderItems(false)}
          {/* Duplicate set makes the -50% loop seamless; hidden from assistive tech */}
          {renderItems(true)}
        </ul>
      </div>

    </section>
  );
}

export default ScrollTechWall;