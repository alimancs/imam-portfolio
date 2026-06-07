"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

export default function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    // Smooth pointer animation jumping between tech tags
    animate(
      [
        // Start near center
        ["#pointer", { left: 150, top: 135 }, { duration: 0 }],
        // Move to React
        ["#react-tag", { opacity: 1 }, { duration: 0.2 }],
        ["#pointer", { left: 60, top: 80 }, { at: "+0.3", duration: 0.6, ease: "easeInOut" }],
        ["#react-tag", { opacity: 0.5 }, { at: "-0.2", duration: 0.1 }],
        // Move to Next.js
        ["#next-tag", { opacity: 1 }, { duration: 0.2 }],
        ["#pointer", { left: 210, top: 100 }, { at: "+0.3", duration: 0.6, ease: "easeInOut" }],
        ["#next-tag", { opacity: 0.5 }, { at: "-0.2", duration: 0.1 }],
        // Move to TypeScript
        ["#ts-tag", { opacity: 1 }, { duration: 0.2 }],
        ["#pointer", { left: 120, top: 190 }, { at: "+0.3", duration: 0.6, ease: "easeInOut" }],
        ["#ts-tag", { opacity: 0.5 }, { at: "-0.2", duration: 0.1 }],
        // Move to React Native
        ["#rn-tag", { opacity: 1 }, { duration: 0.2 }],
        ["#pointer", { left: 230, top: 200 }, { at: "+0.3", duration: 0.6, ease: "easeInOut" }],
        ["#rn-tag", { opacity: 0.5 }, { at: "-0.2", duration: 0.1 }],
        // Move to Express
        ["#express-tag", { opacity: 1 }, { duration: 0.2 }],
        ["#pointer", { left: 40, top: 150 }, { at: "+0.3", duration: 0.6, ease: "easeInOut" }],
        ["#express-tag", { opacity: 0.5 }, { at: "-0.2", duration: 0.1 }],
        // Finally point to contact area (near buttons)
        ["#pointer", { left: 90, top: 50 }, { at: "+0.5", duration: 0.8, ease: "easeInOut" }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      }
    );
  }, [animate]);

  return (
    <section className="relative mx-auto mb-20 mt-6 max-w-7xl">
      <HighlightGroup className="group h-full">
        <div className="group/item h-full md:col-span-6 lg:col-span-12" data-aos="fade-down">
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl bg-white dark:bg-black">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color="#555555"
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  {/* Animated tech tags area */}
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    {/* Center dot */}
                    <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <path d="M12 1v6" />
                        <path d="M4.22 4.22l4.24 4.24" />
                        <path d="M1 12h6" />
                        <path d="M4.22 19.78l4.24-4.24" />
                        <path d="M12 17v6" />
                        <path d="M19.78 19.78l-4.24-4.24" />
                        <path d="M23 12h-6" />
                        <path d="M19.78 4.22l-4.24 4.24" />
                      </svg>
                    </div>

                    {/* Tech tags */}
                    <div
                      id="react-tag"
                      className="absolute left-4 top-16 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-medium opacity-0 dark:border-slate-600 dark:bg-slate-800"
                    >
                      React
                    </div>
                    <div
                      id="next-tag"
                      className="absolute right-8 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-medium opacity-0 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Next.js
                    </div>
                    <div
                      id="ts-tag"
                      className="absolute bottom-20 left-16 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-medium opacity-0 dark:border-slate-600 dark:bg-slate-800"
                    >
                      TypeScript
                    </div>
                    <div
                      id="rn-tag"
                      className="absolute bottom-28 right-12 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-medium opacity-0 dark:border-slate-600 dark:bg-slate-800"
                    >
                      React Native
                    </div>
                    <div
                      id="express-tag"
                      className="absolute left-20 top-36 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-medium opacity-0 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Express.js
                    </div>

                    {/* Animated pointer */}
                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-blue-500 drop-shadow-md"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="relative -top-1 left-3 rounded-3xl bg-blue-500 px-2 py-1 text-xs font-medium text-white shadow-sm">
                        Explore
                      </span>
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center text-center md:text-left">
                      <h3 className="mt-6 pb-1 font-bold">
                        <span className="text-2xl font-changa md:text-4xl">
                          Let's build something great
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-500 dark:text-slate-400">
                      Have a project in mind or just want to chat? Reach out anytime.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                      <Link href="mailto:imam@example.com" target="_blank">
                        <Button className="gap-2">
                          <Mail className="h-4 w-4" />
                          Email me
                        </Button>
                      </Link>
                      <Link
                        href="https://wa.me/2348102942477"
                        target="_blank"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "icon" })
                        )}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/alimam-ahmed-67b686402/"
                        target="_blank"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "icon" })
                        )}
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link
                        href="https://github.com/alimancs"
                        target="_blank"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "icon" })
                        )}
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}