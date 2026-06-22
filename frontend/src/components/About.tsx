import { useFocusMode } from '@/context/FocusModeContext';
import { GraduationCap, Trophy, CheckCircle, BrainCircuit } from 'lucide-react';

export default function About() {
  const { isFocusMode } = useFocusMode();

  return (
    <section id="about" className="py-24 w-full relative z-10 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image/Avatar Placeholder */}
          <div className={`relative transition-opacity duration-700 ${isFocusMode ? 'opacity-30' : 'opacity-100'}`}>
            
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl overflow-hidden relative flex items-center justify-center">
              {/* Decorative background grid */}
              <img src="backgroundImage.jpeg" alt="background" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
              <div className="absolute inset-0 bg-slate-900/5"></div>
              
              <div className="z-10 text-center">
                <div className="w-55 h-55 mx-auto rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center mb-6 shadow-xl">
                  <img src="Inayat.jpeg" className="w-full h-full rounded-full object-cover border-1 border-cyan-400 shadow-lg" />
                </div>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
                  Full-Stack Developer
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-12 h-12 bg-purple-500/20 rounded-lg blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Accent border behind */}
            <div className="absolute -inset-4 border border-slate-800 rounded-3xl -z-10"></div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
                About Me
                <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-blue-500 rounded-full"></span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mt-6">
                I am Inayat Ahemed Ilkal, a Full-Stack MERN Developer and Computer Science Engineer student passionate about building scalable web applications and AI-Powered solutions. Alongside development, I have solved 150+ Data Structures and Algorithms problems in Java, strengthening my problem-solving and software engineering skills.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Computer Science Engineering</h4>
                  <p className="text-xs text-slate-400 mt-1">Degree</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">8.6 CGPA</h4>
                  <p className="text-xs text-slate-400 mt-1">Academic</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">0 Backlogs</h4>
                  <p className="text-xs text-slate-400 mt-1">Record</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200">AI-Powered Development</h4>
                  <p className="text-xs text-slate-400 mt-1">Focus Area</p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Achievements & Roles</h4>
              <div className="flex flex-wrap gap-2">
                {['CodeEclipse Hackathon', 'Inventra 2K25 — Team Lead', 'NSS Volunteer', 'MERN Developer'].map((badge) => (
                  <span 
                    key={badge}
                    className="px-3 py-1.5 text-sm rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
