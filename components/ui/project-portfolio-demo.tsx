'use client';

import React from 'react';
import FlowArt, { FlowSection } from './story-scroll';

const projects = [
  {
    id: 1,
    title: 'Across Nigeria',
    subtitle: 'Reality Show & Game Platform',
    description:
      'A comprehensive entertainment platform offering diverse giveaways, game shows, and reality shows designed to suit diverse tastes and interests.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://acrossnig.com',
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
    color: '#6b46c1',
    challenge:
      'Designing an addictive yet non-intrusive notification system that motivates users without causing notification fatigue.',
  },
];

/* ---------------------------------------------------------------- *
 * Slug helper — gives each section a stable anchor id
 * ---------------------------------------------------------------- */
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/* ---------------------------------------------------------------- *
 * Wikipedia-style infobox
 * ---------------------------------------------------------------- */
interface InfoboxRow {
  label: string;
  value: React.ReactNode;
}

function Infobox({ title, rows }: { title: string; rows: InfoboxRow[] }) {
  return (
    <aside
      className="mb-4 border border-[#a2a9b1] bg-[#f8f9fa] text-[0.8125rem] leading-[1.5] text-[#202122] sm:float-right sm:ml-5 sm:w-[17.5rem] sm:clear-right"
      aria-label={`${title} quick facts`}
    >
      <div className="border-b border-[#a2a9b1] bg-[#eaecf0] px-3 py-2 text-center text-[0.95rem]">
        {title}
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#c8ccd1] align-top last:border-b-0">
              <th scope="row" className="w-[38%] px-3 py-2 text-left align-top font-bold">
                {row.label}
              </th>
              <td className="px-3 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
}

/* ---------------------------------------------------------------- *
 * Hatnote — the italic "For other uses, see…" line
 * ---------------------------------------------------------------- */
function Hatnote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 pl-6 text-[0.875rem] italic leading-[1.5] text-[#54595d]">{children}</p>
  );
}



/* ---------------------------------------------------------------- *
 * Portfolio page
 * ---------------------------------------------------------------- */
export default function ProjectPortfolioDemo() {
  return (
    <FlowArt title="Project Portfolio" aria-label="My Project Portfolio">
      {/* ---------- Lead section ---------- */}
      <FlowSection aria-label="Introduction">
        <p>
          Each entry below summarises the product, its technical stack, and the primary
          engineering challenge addressed during development.
        </p>
      </FlowSection>

      {projects.map((project) => (
        <FlowSection
          key={project.id}
          id={slugify(project.title)}
          title={project.title}
          aria-label={project.title}
          className="clear-both mb-17"
        >
          <Infobox
            title={project.title}
            rows={[
              { label: 'Type', value: project.subtitle },
              { label: 'Developer', value: 'Alimam Ahmed' },
              {
                label: 'Stack',
                value: project.techStack.join(', '),
              },
              {
                label: 'Website',
                value: (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {new URL(project.liveUrl).hostname.replace(/^www\./, '')}
                  </a>
                ),
              },
            ]}
          />

          <p>
                        {project.description}
          </p>

          <h3 className="mb-2 mt-6 text-zinc-300 text-xs">
            Stack
          </h3>
          <ul>
            {project.techStack.map((tech) => (
              <li className='text-zinc-300 text-xs' key={tech}>{tech}</li>
            ))}
          </ul>

          <h3 className="mb-2 mt-6 text-zinc-300 text-xs">
            Engineering challenge
          </h3>
          <p className='text-zinc-300 text-xs'>{project.challenge}</p>

          <p className="mt-4 text-zinc-600 text-xs">
            Live deployment:{' '}
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {project.liveUrl}
            </a>
          </p>
        </FlowSection>
      ))}

      {/* ---------- Contact ---------- */}
      <FlowSection title="Contact" id="contact" className="clear-both">
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
      </FlowSection>

      {/* ---------- External links ---------- */}
      <FlowSection title="External links" id="external-links" className="clear-both">
        <ul>
          {projects.map((p) => (
            <li key={p.id}>
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>{' '}
              — official site
            </li>
          ))}
        </ul>
      </FlowSection>
    </FlowArt>
  );
}