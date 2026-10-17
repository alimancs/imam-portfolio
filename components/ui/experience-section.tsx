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

const experience = [
  {
    title: 'Full-Stack Web Developer, Entertainment Methods',
    years: '2022-2025',
    company: 'Entertainment Methods',
    companyLink: '',
    did: [
      'Designed, developed, and maintained full-stack web applications, working across frontend interfaces, backend logic, database integration, and third-party services.',
      'Built NaijaPredictor.com, a football prediction platform with features supporting user engagement and prediction-based competitions.',
      'Developed AcrossNIG.com, an entertainment platform with interactive features designed to engage its audience.',
      'Collaborated on feature development, debugging, and application improvements to deliver functional and user-focused web experiences.'
    ]
  },
  {
    title: 'Backend Engineer Intern, FlexiSaf',
    years: '2026-2026',
    company: 'FlexiSaf',
    companyLink: 'https://flexisaf.com',
    did: [
      'Developed practical backend engineering skills, focusing on Java, application structure, data handling, and backend development practices.',
      'Worked on a backend project involving applicant intake, input validation, unique application identification, and structured data storage.',
      'Contributed to the company’s technical activities while gaining experience with collaborative development workflows and software engineering practices.',
      'Strengthened my understanding of backend application development, problem-solving, and writing maintainable code.'
    ]
  }
];

/* ---------------------------------------------------------------- *
 * Portfolio page
 * ---------------------------------------------------------------- */
export default function ExperienceSection() {
  return (
    <FlowArt title="Worked as." aria-label="worked as">
      
      <div className='mt-5'>
      {experience.map((e) => (
        <FlowSection
          key={e.company}
          title={e.title}
          className="clear-both mb-5"
        >
          <div className='flex flex-row gap-3 mb-2'>
            <span className='no-underline'>{} at,</span>

            <a className='no-underline' href={e.companyLink}>
              <div className='text-zinc-300 flex flex-row transition-all ease-in-out duration-500 hover:gap-1 items-center text-xs' >
                <span className='no-underline'>{e.company}</span>
                <ArrowUpRight size={20} color={'#d4d4d8'} strokeWidth={1}/>
              </div>
            </a>
          </div>
          <ul className='flex flex-col gap-1 mb-3'>
            {e.did.map((d, i) => (
              <li key={i} className='no-underline'>{d}</li>
            ))}
          </ul>
        </FlowSection>
      ))}
      </div>

    </FlowArt>
  );
}