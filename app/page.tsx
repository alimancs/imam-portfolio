"use client";

import { useCallback, useEffect, useState } from "react";
import Connect from "@/components/ui/Connect";
import ProjectPortfolioDemo from "@/components/ui/project-portfolio-demo";
import RevealSection from "@/components/ui/reveal-section";
import ScrollTechWall from "@/components/ui/scroll-tech-wall";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Github, Twitter, Linkedin, ChevronUp, Menu, X, Terminal, Server, LayersPlus } from "lucide-react";
import ExperienceSection from "@/components/ui/experience-section";

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
       <main className="flex flex-1 w-full max-w-7xl flex-col items-center pb-28 pt-15 bg-white dark:bg-black sm:items-start">
        {/* Hero Section */}
        <RevealSection id="hero" className="w-full h-fit mb-5 scroll-mt-24 px-4 sm:px-0">
          <div className="relative h-25 w-25 mx-auto rounded-full overflow-hidden">
            <Image src="/imam.png" alt="Imam Ahmed" fill objectFit="cover" priority />
          </div>
          <div className="mt-3 text-xl mx-auto text-center text-zinc-200">
            Imam Ahmed
          </div>
          <div className="text-sm mx-auto text-center text-slate-500">
            Abuja, Nigeria
          </div>
          <div className="flex flex-col mt-5 text-xl text-center mx-auto gap-0">
            <div className="w-fit flex flex-row mx-auto items-center gap-3">
              <span>Fullstack</span>
              <LayersPlus size={28} strokeWidth={1} color="white"/>
              <span>Software</span>
            </div>
            <span>Developer</span>
          </div>
        </RevealSection>

        

        {/* Tech Stack Wall Section */}
        <RevealSection className="w-full md:w-[50%] px-4 md:px-0 mx-auto">
          <h2
            className={'mb-2 text-md font-semibold'}
          >
          About me
          </h2>
          <p>
            I believe a jack of all trades is a master of none, but oftentimes better than a master of one.
          </p>
        </RevealSection>

        <RevealSection id="tech" className="w-full mb-5 scroll-mt-10">
          <ScrollTechWall />
        </RevealSection>

        <ExperienceSection/>

        {/* Projects Section */}
        <ProjectPortfolioDemo />

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