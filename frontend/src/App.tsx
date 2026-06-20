import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FocusModeProvider } from "@/context/FocusModeContext";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";

function PortfolioApp() {
  useEffect(() => {
    // Ensure dark mode is active
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Contact />
      <AIChatWidget />
    </div>
  );
}

function App() {
  return (
    <TooltipProvider>
      <FocusModeProvider>
        <PortfolioApp />
      </FocusModeProvider>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
