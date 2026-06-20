import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Film, Clock, Eye } from 'lucide-react';

const projects = [
  {
    id: 'cinemax',
    title: 'CineMax',
    subtitle: 'Full-production movie booking platform with AI recommendations',
    description: "A feature-complete cinema booking application featuring Clerk authentication, Inngest background jobs, Stripe payments, and Brevo email notifications. Powered by 'CineBot' — an AI recommendation assistant that learns your taste.",
    tech: ["React", "Node.js", "Clerk", "Stripe", "Inngest", "Brevo", "MongoDB", "AI/ML"],
    icon: Film,
    color: 'from-blue-600/20 to-blue-900/20',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-blue-400',
    badge: 'Featured',
    link: 'https://cinemax-client-two.vercel.app/'
  },
  {
    id: 'focusflow',
    title: 'Focus Flow',
    subtitle: 'Minimalist productivity & Pomodoro tracker',
    description: "A beautifully minimal productivity application centered around the Pomodoro technique. Engineered for focus: distraction-free UI, smooth session tracking, and task management that gets out of your way.",
    tech: ["React", "Tailwind CSS", "TypeScript", "LocalStorage"],
    icon: Clock,
    color: 'from-purple-600/20 to-purple-900/20',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    link: null
  },
  {
    id: 'aidriver',
    title: 'AI Driver Behaviour',
    subtitle: 'Computer vision safety monitoring system',
    description: "A machine learning system using computer vision to detect driver distraction and safety risks in real-time. Complex data pipeline with backend processing, behavioral classification models, and live alerting.",
    tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "ML", "FastAPI"],
    icon: Eye,
    color: 'from-cyan-600/20 to-cyan-900/20',
    borderColor: 'border-cyan-500/30',
    accentColor: 'text-cyan-400',
    link: 'https://ai-driver-behaviour-montoring.vercel.app/'
  }
];

function TiltCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="relative h-full"
    >
      <div className={`h-full flex flex-col bg-slate-900/80 border ${project.borderColor} rounded-2xl overflow-hidden backdrop-blur-sm transition-colors duration-300 hover:border-slate-500 group`}>
        
        {/* Banner area */}
        <div className={`h-32 bg-gradient-to-br ${project.color} relative p-6 flex items-start justify-between border-b border-slate-800/50`}>
          <div className={`w-12 h-12 rounded-xl bg-slate-950/50 border ${project.borderColor} flex items-center justify-center backdrop-blur-md`}>
            <Icon className={`w-6 h-6 ${project.accentColor}`} />
          </div>
          {project.badge && (
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold rounded-full uppercase tracking-wider">
              {project.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className={`text-sm font-medium mb-4 ${project.accentColor}`}>{project.subtitle}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-md border border-slate-700/50">
                {tech}
              </span>
            ))}
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              data-testid={`link-project-${project.id}`}
              className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mt-auto"
            >
              View Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-500 mt-auto cursor-not-allowed">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {

  return (
    <section id="projects" className="py-24 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-500 rounded-full"></span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-4">
            A selection of my recent work, showcasing full-stack development and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((project) => (
            <TiltCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
