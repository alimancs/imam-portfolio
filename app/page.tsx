"use client";

import { useCallback, useEffect, useState } from "react";
import Connect from "@/components/ui/Connect";
import ProjectPortfolioDemo from "@/components/ui/project-portfolio-demo";
import RevealSection from "@/components/ui/reveal-section";
import ScrollTechWall from "@/components/ui/scroll-tech-wall";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Github, Twitter, Linkedin, ChevronUp, Menu, X, Terminal, Server, LayersPlus } from "lucide-react";

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
        <div className="md:w-[50%] w-full mx-auto px-4 py-5 sm:px-6 sm:py-5 md:px-8 flex gap-2 flex-row sm:items-center justify-between">
          <Link href="/" className="text-base sm:text-lg md:text-xl text-black dark:text-zinc-100">
            imam.builds
          </Link>
        
          <div className="flex items-center justify-between w-auto">
            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="sm:hidden inline-flex items-center justify-centertext-gray-800 transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 dark:text-gray-100 dark:hover:bg-slate-800"
              aria-expanded={mobileNavOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
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
            <div className="max-w-6xl mx-auto px-4 py-7 flex flex-col justify-center gap-5 text-base">
              {['hero', 'tech', 'projects', 'contact'].map((section) => {
                const label = section === 'hero' ? 'Work' : section.charAt(0).toUpperCase() + section.slice(1);
                return (
                  <button
                    key={section}
                    type="button"
                    onClick={() => scrollToSection(section)}
                    className="w-full text-center text-2xl tracking-wide text-gray-900 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary dark:border-slate-700 dark:text-gray-100 dark:hover:bg-slate-900"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main className="flex flex-1 w-full max-w-6xl flex-col items-center pb-28 pt-40 bg-white dark:bg-black sm:items-start">
        {/* Hero Section */}
        <RevealSection id="hero" className="w-full h-fit mb-12 md:mb-15 scroll-mt-24 px-4 sm:px-0">
          <div className="relative h-30 w-30 mx-auto rounded-full overflow-hidden">
            <Image src="/imam.png" alt="Imam Ahmed" fill objectFit="cover" priority />
          </div>
          <div className="mt-3 text-xl mx-auto text-center text-zinc-200">
            Imam Ahmed
          </div>
          <div className="text-sm mx-auto text-center text-slate-500">
          Abuja, Nigeria
          </div>
          <div className="flex flex-col mt-5 text-3xl text-center mx-auto gap-0">
            <div className="w-fit flex flex-row mx-auto items-center gap-3">
              <span>Fullstack</span>
              <LayersPlus size={28} strokeWidth={1} color="white"/>
              <span>Software</span>
            </div>
            <span>Developer</span>
          </div>
        </RevealSection>

        {/* Tech Stack Wall Section */}
        <RevealSection id="tech" className="w-full mb-15 scroll-mt-10">
          <ScrollTechWall />
        </RevealSection>

        {/* Projects Section */}
        <section id="projects" className="w-full md:mt-5">
          <ProjectPortfolioDemo />
        </section>

        {/* Minimalist Footer */}
        <footer className="w-full md:w-[50%] mx-auto mt-20 pb-15">
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
                <Instagram size={18} strokeWidth={1} />
              </a>
              <a
                href="https://github.com/alimancs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} strokeWidth={1} />
              </a>
              <a
                href="https://twitter.com/imam.builds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={1} />
              </a>
              <a
                href="https://www.linkedin.com/in/alimam-ahmed-67b686402/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Imam Ahmed. All rights reserved.
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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