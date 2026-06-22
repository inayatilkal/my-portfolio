
import { useState } from "react";
import { useFocusMode } from "@/context/FocusModeContext";
import { Menu, X, Eye, EyeOff } from "lucide-react";

export default function Navbar() {
  const { isFocusMode, toggleFocusMode } = useFocusMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-2xl bg-slate-950/50 border-b border-slate-800/50 ${
        isFocusMode
          ? "shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div
            className="cursor-pointer select-none"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <span className="font-mono text-2xl font-bold text-white">
              Inayat<span className="text-blue-500">.</span>dev
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">

            {/* Glass Pill Nav */}
            <div
              className="
                flex items-center gap-2
                px-3 py-1
                rounded-full
                bg-slate-900/40
                backdrop-blur-xl
                border border-slate-700/50
                shadow-[0_8px_32px_rgba(0,0,0,0.35)]
              "
            >
              <button
                onClick={() => scrollToSection("about")}
                className="
                  px-5 py-1
                  rounded-full
                  text-sm font-medium
                  text-slate-300
                  hover:text-white
                  hover:bg-slate-800/60
                  transition-all duration-300
                  cursor-pointer
                "
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="
                  px-5 py-1
                  rounded-full
                  text-sm font-medium
                  text-slate-300
                  hover:text-white
                  hover:bg-slate-800/60
                  transition-all duration-300
                  cursor-pointer
                "
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className="
                  px-5 py-1
                  rounded-full
                  text-sm font-medium
                  text-slate-300
                  hover:text-white
                  hover:bg-slate-800/60
                  transition-all duration-300
                  cursor-pointer
                "
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="
                  px-5 py-1
                  rounded-full
                  text-sm font-medium
                  text-slate-300
                  hover:text-white
                  hover:bg-slate-800/60
                  transition-all duration-300
                  cursor-pointer
                "
              >
                Contact
              </button>
            </div>

            {/* Focus Mode */}
            <button
              onClick={toggleFocusMode}
              data-testid="toggle-focus"
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-slate-900/40
                backdrop-blur-xl
                border border-slate-700/50
                text-slate-300
                hover:text-white
                transition-all duration-300
                cursor-pointer
                shadow-[0_8px_32px_rgba(0,0,0,0.35)]
              "
            >
              {isFocusMode ? (
                <>
                  <EyeOff className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm">
                    Focus On
                  </span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">
                    Focus Off
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
          <div className="px-4 py-4 space-y-2">

            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Contact
            </button>

            <div className="pt-2">
              <button
                onClick={toggleFocusMode}
                className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-white"
              >
                {isFocusMode ? (
                  <>
                    <EyeOff className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400">
                      Disable Focus Mode
                    </span>
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
//   );
// }
