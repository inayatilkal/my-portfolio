import { useFocusMode } from '@/context/FocusModeContext';
import { Cloud, Eye } from 'lucide-react';
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, 
  SiPython, SiTypescript, SiBrevo,
  SiClerk, SiGit, SiStripe, SiTensorflow
} from 'react-icons/si';
import { RiJavaFill } from "react-icons/ri";
import { BsJavascript } from "react-icons/bs";
import { RiBootstrapLine } from "react-icons/ri";

type IconComponent = React.ComponentType<{ className?: string }>;

const row1: { name: string; icon: IconComponent; color: string }[] = [
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-slate-300' },
  { name: 'React', icon: SiReact, color: 'text-blue-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Java', icon: RiJavaFill, color: 'text-red-400' },
];

const row2: { name: string; icon: IconComponent; color: string }[] = [
  { name: 'Brevo ', icon: SiBrevo , color: 'text-green-400' },
  { name: 'Clerk', icon: SiClerk, color: 'text-violate-500' },
  { name: 'Git', icon: SiGit, color: 'text-red-500' },
  { name: 'Bootstrap', icon: RiBootstrapLine, color: 'text-violet-700' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
  { name: 'Stripe', icon: SiStripe, color: 'text-violet-500' },
  { name: 'Javascript', icon: BsJavascript, color: 'text-yellow-300' },
];

export default function Skills() {
  const { isFocusMode } = useFocusMode();

  return (
    <section id="skills" className="py-24 w-full relative z-10 bg-slate-950/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
          Technical Arsenal
          <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-cyan-500 rounded-full"></span>
        </h2>
      </div>

      {/* Marquees */}
      <div className={`space-y-6 mb-20 transition-opacity duration-500 ${isFocusMode ? 'opacity-30' : 'opacity-100'}`}>
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...row1, ...row1, ...row1].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={`${skill.name}-${index}`} className="flex items-center gap-3 px-6 py-3 mx-3 bg-slate-800/60 border border-slate-700/40 rounded-full hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors shrink-0">
                  <Icon className={`w-6 h-6 ${skill.color}`} />
                  <span className="font-medium text-slate-300">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 (reverse) */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
            {[...row2, ...row2, ...row2].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={`${skill.name}-${index}`} className="flex items-center gap-3 px-6 py-3 mx-3 bg-slate-800/60 border border-slate-700/40 rounded-full hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors shrink-0">
                  <Icon className={`w-6 h-6 ${skill.color}`} />
                  <span className="font-medium text-slate-300">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              Coding Profile
            </h3>
            <ul className="space-y-3">
              {['150+ DSA Problems Solved in GFG', 'Java Programming', 'Arrays, Strings, Linked Lists', 'Stack, Queue', 'Recursion, Trees, Algorithms', "OOP's with Java"].map((item) => (
                <li key={item} className="text-slate-400 font-medium">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Frontend */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Frontend Engineering
            </h3>
            <ul className="space-y-3">
              {['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'Responsive Design', 'Redux'].map((item) => (
                <li key={item} className="text-slate-400 font-medium">{item}</li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-green-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Backend Architecture
            </h3>
            <ul className="space-y-3">
              {['Node.js', 'Express.js', 'Authentication', 'Payment Integration (Stripe Payment)', 'REST APIs'].map((item) => (
                <li key={item} className="text-slate-400 font-medium">{item}</li>
              ))}
            </ul>
          </div>

          {/* DB & Cloud */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Database & Cloud
            </h3>
            <ul className="space-y-3">
              {['MongoDB', 'Mongoose', 'Vercel Deployment', 'Cloudinary'].map((item) => (
                <li key={item} className="text-slate-400 font-medium">{item}</li>
              ))}
            </ul>
          </div>

          {/* AI/ML */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              AI Integration & Automation
            </h3>
            <ul className="space-y-3">
              {['Gemini AI', 'Prompt Engineering', 'Computer Vision', 'TensorFlow', 'AI API Integration'].map((item) => (
                <li key={item} className="text-slate-400 font-medium">{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-red-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Tools & Platforms
            </h3>
            <ul className="space-y-3">
              {['Git & GitHub', 'VS Code', 'Postman', 'Stripe', 'Clerk', 'Inngest', 'Brevo', 'Vercel'].map((item) => (
                <li key={item} className="text-slate-400 font-medium">{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
