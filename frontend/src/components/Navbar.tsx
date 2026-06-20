import { useState } from 'react';
import { useFocusMode } from '@/context/FocusModeContext';
import { Menu, X, Eye, EyeOff } from 'lucide-react';

export default function Navbar() {
  const { isFocusMode, toggleFocusMode } = useFocusMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-slate-950/70 border-b border-blue-500/10 ${
        isFocusMode ? 'shadow-[0_0_15px_rgba(59,130,246,0.2)] border-blue-500/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-mono text-2xl font-bold tracking-tight text-slate-100">
              Inayat<span className="text-blue-500">.</span>dev
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-xl font-medium text-slate-300 hover:text-blue-400 transition-colors cursor-pointer" data-testid="nav-about">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-xl font-medium text-slate-300 hover:text-blue-400 transition-colors cursor-pointer" data-testid="nav-projects">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-xl font-medium text-slate-300 hover:text-blue-400 transition-colors cursor-pointer" data-testid="nav-skills">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-xl font-medium text-slate-300 hover:text-blue-400 transition-colors cursor-pointer" data-testid="nav-contact">Contact</button>
            
            {/* Focus Mode Toggle */}
            <div className="flex items-center border-l border-slate-700/50 pl-8 ml-6">
              <button 
                onClick={toggleFocusMode}
                data-testid="toggle-focus"
                className="flex items-center space-x-2 text-xm font-medium text-slate-400 hover:text-slate-200 transition-colors bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50 cursor-pointer"
              >
                {isFocusMode ? (
                  <>
                    <EyeOff className="w-4.5 h-4.5 text-blue-400" />
                    <span className="text-blue-400">Focus: On</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4.5 h-4.5" />
                    <span>Focus: Off</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
              data-testid="btn-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">About</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Contact</button>
            <div className="px-3 py-2">
              <button 
                onClick={toggleFocusMode}
                className="flex w-full items-center space-x-2 text-sm font-medium text-slate-300 hover:text-white py-2"
              >
                {isFocusMode ? (
                  <>
                    <EyeOff className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400">Disable Focus Mode</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    <span>Enable Focus Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
