"use client";

import { useCallback, useEffect, useState } from "react";
import Connect from "@/components/ui/Connect";
import ProjectPortfolioDemo from "@/components/ui/project-portfolio-demo";
import RevealSection from "@/components/ui/reveal-section";
import ScrollTechWall from "@/components/ui/scroll-tech-wall";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Github, Twitter, Linkedin, ChevronUp, Menu, X } from "lucide-react";

export default function Home() {
  const stack = [
    "NEXT.JS", "TYPESCRIPT", "REACT NATIVE", "EXPRESS.JS"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [heroPassed, setHeroPassed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    setMobileNavOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroPassed(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      {/* Minimalist Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-out ${heroPassed ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <div className="max-w-6xl mx-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 flex gap-2 flex-row sm:items-center justify-between">
          <Link href="/" className="text-base sm:text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            ImamBuilds
          </Link>
          <div className="flex items-center justify-between w-auto">
            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="sm:hidden inline-flex items-center justify-centertext-gray-800 transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 dark:text-gray-100 dark:hover:bg-slate-800"
              aria-expanded={mobileNavOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav className="hidden sm:flex flex-wrap justify-center gap-4 text-sm sm:justify-end">
              <a
                href="#hero"
                className="transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('hero');
                }}
              >
                Work
              </a>
              <a
                href="#tech"
                className="transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('tech');
                }}
              >
                Tech
              </a>
              <a
                href="#projects"
                className="transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('projects');
                }}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {mobileNavOpen && (
          <div className="sm:hidden border-t pt-20 border-gray-200 h-screen dark:border-gray-800 bg-white/80 dark:bg-black/80 shadow-xl backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col justify-center gap-3 font-changa text-base font-semibold">
              {['hero', 'tech', 'projects', 'contact'].map((section) => {
                const label = section === 'hero' ? 'Work' : section.charAt(0).toUpperCase() + section.slice(1);
                return (
                  <button
                    key={section}
                    type="button"
                    onClick={() => scrollToSection(section)}
                    className="w-full text-center text-2xl uppercase tracking-wide text-gray-900 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary dark:border-slate-700 dark:text-gray-100 dark:hover:bg-slate-900"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main className="flex flex-1 w-full max-w-6xl flex-col items-center pb-28 pt-15 sm:pt-32 bg-white dark:bg-black sm:items-start">
        {/* Hero Section */}
        <RevealSection id="hero" className="w-full h-fit mb-12 md:mb-40 scroll-mt-24 px-4 sm:px-0">
          <div className="flex flex-col mb-5 font-changa text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.7] gap-0">
            <span>SOFTWARE</span>
            <span>ENGINEER</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
            {stack.map((tech) => (
              <div key={tech} className="px-3 py-1 text-[10px] sm:text-xs rounded-full dark:bg-gray-800 border dark:border-gray-500 border-slate-800">
                {tech}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:justify-between w-full">
            <div className="w-full lg:w-[55%] h-fit p-0.2 border border-gray-500">
              <div className="relative h-[220px] w-full">
                <Image src="/imam.png" alt="Imam Ahmed" fill objectFit="cover" priority />
              </div>
            </div>
            <div className="w-full text-left md:text-right lg:w-[40%]">
              <div className="mb-6 text-xs text-slate-300 sm:text-sm">
                BUILDING FAST CLEAN WEB & MOBILE APPS<br /> FOR REAL USERS
              </div>
              <div className="flex flex-col flex-1 justify-end font-changa text-6xl sm:text-8xl leading-[0.7] gap-0">
                <span>IMAM</span>
                <span>AHMED</span>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Tech Stack Wall Section */}
        <RevealSection id="tech" className="w-full scroll-mt-24">
          <ScrollTechWall className="mb-30" />
        </RevealSection>

        {/* Projects Section */}
        <section id="projects" className="w-full scroll-mt-24">
          <ProjectPortfolioDemo />
        </section>

        {/* Contact Section */}
        <RevealSection id="contact" className="w-full scroll-mt-24">
          <Connect />
        </RevealSection>

        {/* Minimalist Footer */}
        <footer className="w-full mt-20 pt-8 pb-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-5">
              <a
                href="https://instagram.com/imam.builds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com/alimancs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://twitter.com/imam.builds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/alimam-ahmed-67b686402/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Imam Ahmed. All rights reserved.
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}