'use client';

import React from 'react';
import FlowArt, { FlowSection } from './story-scroll';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Across Nigeria',
    subtitle: 'Reality Show & Game Platform',
    description:
      'A comprehensive entertainment platform offering diverse giveaways, game shows, and reality shows designed to suit diverse tastes and interests.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://acrossnig.com',
    github: 'https://acrossnig.com',
    challenge:
      'Building a scalable platform that handles real-time voting, user engagement, and secure prize distribution across multiple game formats.',
  },
  {
    id: 2,
    title: 'Joone Integrated Farms',
    subtitle: 'Sustainable Agriculture Platform',
    description:
      'An innovative agricultural e-commerce platform specializing in BSF products, organic fertilizers, and sustainable farm solutions.',
    techStack: ['React', 'Express.js', 'MySQL', 'Spring Boot', 'Tailwind CSS'],
    liveUrl: 'https://jooneintegratedfarms.com',
    github: 'https://jooneintegratedfarms.com',
    color: '#2e7d32',
    challenge:
      'Creating a robust inventory management system for perishable agricultural products and implementing a nationwide delivery logistics solution.',
  },
  {
    id: 3,
    title: 'Naija Predictor',
    subtitle: 'Sports Prediction Platform',
    description:
      'A free-to-play football prediction game where users can predict correct match scores to win cash prizes.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    liveUrl: 'https://naijapredictor.com',
    github: 'https://naijapredictor.com',
    color: '#1a237e',
    challenge:
      'Implementing real-time score tracking and ensuring fair play across thousands of simultaneous predictions.',
  },
  {
    id: 4,
    title: 'KeepStreaks',
    subtitle: 'Habit Tracker & Streak Builder',
    description:
      'A minimalist habit tracking application that helps users build unbreakable daily routines and beautiful progress analytics.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://keepstreaks.netlify.app',
    github: 'https://keepstreaks.netlify.app',
    color: '#6b46c1',
    challenge:
      'Designing an addictive yet non-intrusive notification system that motivates users without causing notification fatigue.',
  },
];




/* ---------------------------------------------------------------- *
 * Portfolio page
 * ---------------------------------------------------------------- */
export default function ProjectPortfolioDemo() {
  return (
    <FlowArt title="Project Portfolio" aria-label="My Project Portfolio">
      
      <div className='mt-5'>
      {projects.map((project) => (
        <FlowSection
          key={project.id}
          title={project.title}
          aria-label={project.title}
          className="clear-both mb-5"
        >
          <div className='flex flex-row gap-3 mb-2'>
            <div className='text-zinc-300 flex flex-row transition-all ease-in-out duration-500 hover:gap-1 items-center text-xs' >
              <span className='no-underline'>Live Preview</span>
              <ArrowUpRight size={20} color={'#d4d4d8'} strokeWidth={1}/>
            </div>

            <a className='no-underline' href={project.github}>
              <div className='text-zinc-300 flex flex-row transition-all ease-in-out duration-500 hover:gap-1 items-center text-xs' >
                <span className='no-underline'>Github</span>
                <ArrowUpRight size={20} color={'#d4d4d8'} strokeWidth={1}/>
              </div>
            </a>
          </div>
          <div className='flex flex-row flex-wrap gap-3 mb-3'>
            {project.techStack.map((tech) => (
              <div className='text-zinc-900 bg-zinc-500 px-2 py-1 hover:bg-zinc-100 text-xs' key={tech}>{tech}</div>
            ))}
          </div>

          <p>
            {project.description}
          </p>
        </FlowSection>
      ))}
      </div>

      {/* ---------- Contact ---------- */}
      <section className='mb-9 scroll-mt-4 mt-10 last:mb-0'>
        <h2
        className={'mb-2 text-lg font-semibold'}
      >
        Contact, socials.
      </h2>
        <p>
          I am available for freelance and full-time engagements. From concept to
          deployment — collaboration enquiries are welcome.
        </p>
        <ul>
          <li>
            Email:{' '}
            <a href="mailto:aliman2952003@gmail.com">aliman2952003@gmail.com</a>
          </li>
          <li>
            GitHub:{' '}
            <a href="https://github.com/alimancs" target="_blank" rel="noopener noreferrer">
              github.com/alimancs
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/alimam-ahmed-67b686402/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/alimam-ahmed-67b686402
            </a>
          </li>
          <li>
            X:{' '}
            <a
              href="https://twitter.com/imam.builds"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://x.com/imam.builds
            </a>
          </li>
        </ul>
      </section>

    </FlowArt>
  );
}