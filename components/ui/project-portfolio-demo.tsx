'use client';

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
    color: '#fd5200',
    stats: [
      { value: '₦1M+', label: 'Prize Pool' },
      { value: '10K+', label: 'Active Users' },
      { value: '15+', label: 'Game Shows' },
    ],
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
    stats: [
      { value: '94%', label: 'Satisfaction Rate' },
      { value: '2K+', label: 'Farmers Empowered' },
      { value: '50+', label: 'Products' },
    ],
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
    stats: [
      { value: '₦100K', label: 'Weekly Prize' },
      { value: '5K+', label: 'Active Players' },
      { value: 'AI', label: 'Powered Pundit' },
    ],
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
    stats: [
      { value: '10K+', label: 'Active Streaks' },
      { value: '95%', label: 'Retention Rate' },
      { value: '1M+', label: 'Days Tracked' },
    ],
    challenge:
      'Designing an addictive yet non-intrusive notification system that motivates users without causing notification fatigue.',
  },
];

export default function ProjectPortfolioDemo() {
  return (
    <FlowArt aria-label="My Project Portfolio">
      <FlowSection aria-label="Hero" style={{ color: '#fff' }}>
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary">01 — My Work</p>
        <hr className="my-[1vw] border-none border-t border-white/20" />
        <div>
          <h1 className="text-[clamp(1.8rem,9vw,4.5rem)] sm:text-[clamp(2rem,8vw,5.5rem)] font-changa font-bold leading-[0.9] uppercase tracking-tight">
            Building
            <br />
            Digital
            <br />
            Experiences
          </h1>
        </div>
        <hr className="my-[1vw] border-none border-t border-white/20" />
        <p className="mt-auto max-w-full sm:max-w-[50ch] text-[clamp(0.95rem,2.5vw,1.5rem)] sm:text-[clamp(1rem,2.2vw,2rem)] font-normal leading-relaxed">
          A showcase of my journey building scalable web applications, from entertainment platforms to productivity tools.
        </p>
      </FlowSection>

      {projects.map((project, index) => (
        <FlowSection
          key={project.id}
          aria-label={project.title}
          style={{ backgroundColor: project.color, color: index % 2 === 0 ? '#fff' : '#000' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
            {String(index + 2).padStart(2, '0')} — Featured Project
          </p>
          <hr className="my-[2vw] border-none border-t border-current opacity-30" />

          <div>
            <h2 className="text-[clamp(2rem,9vw,7rem)] font-changa leading-[0.85] uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg mt-4 font-medium opacity-80">{project.subtitle}</p>
          </div>

          <hr className="my-[2vw] border-none border-t border-current opacity-30" />

          <div className="flex flex-wrap gap-4">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="min-w-[120px] sm:min-w-[150px] flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">•</span>
                  <p className="text-sm sm:text-[0.95rem] font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
                <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <hr className="my-[1vw] border-none border-t border-current opacity-30" />

          <p className="max-w-full sm:max-w-[50ch] text-[clamp(0.95rem,2vw,1.4rem)] sm:text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed">
            {project.description}
          </p>

          <hr className="my-[1vw] border-none border-t border-current opacity-30" />

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/20 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <hr className="my-[1vw] border-none border-t border-current opacity-30" />

          <div>
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider mb-2">The Challenge</p>
            <p className="text-sm sm:text-base leading-relaxed opacity-80 max-w-full sm:max-w-[40ch]">{project.challenge}</p>
          </div>

          <hr className="my-[2vw] border-none border-t border-current opacity-30" />

          <div className="mt-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b-2 border-current pb-1 hover:opacity-70 transition-opacity"
            >
              Live Demo
            </a>
          </div>
        </FlowSection>
      ))}

      <FlowSection aria-label="Get in touch" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">Let's Collaborate</p>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <div>
          <h2 className="text-[clamp(2rem,9vw,7rem)] font-changa font-bold leading-[0.85] uppercase tracking-tight">
            Have a
            <br />
            Project
            <br />
            in Mind?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          From concept to deployment — let's build something remarkable together.
        </p>
               <div className="flex gap-4 mt-4">
          <a href="mailto:aliman2952003@gmail.com" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
            Email Me
          </a>
          <a href="https://github.com/alimancs" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/alimam-ahmed-67b686402/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
            LinkedIn
          </a>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/20" />
      </FlowSection>
    </FlowArt>
  );
}
