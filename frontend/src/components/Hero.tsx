import { useEffect, useRef, useState } from "react";
import { useFocusMode } from "@/context/FocusModeContext";
import { ChevronDown, MessageSquare } from "lucide-react";

export default function Hero() {
  const { isFocusMode } = useFocusMode();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const phrases = [
    "Building AI-Powered Web Applications.",
    "Crafting Full-Stack MERN Solutions.",
    "Turning Ideas into Digital Reality.",
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      const fullPhrase = phrases[phraseIndex];

      if (!isDeleting && currentPhrase === fullPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentPhrase === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setCurrentPhrase((prev) =>
          isDeleting
            ? fullPhrase.substring(0, prev.length - 1)
            : fullPhrase.substring(0, prev.length + 1),
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, phraseIndex]);

  // Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];

      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dist2 = Math.sqrt(
            Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2),
          );

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist2 / 120)})`;

            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);

      window.removeEventListener("mousemove", handleMouseMove);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openAIChat = () => {
    window.dispatchEvent(new CustomEvent("open-ai-chat"));
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          isFocusMode ? "opacity-10" : "opacity-40"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-0"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-5 flex flex-col items-center text-center">
        {/* Avatar */}
        <div
          className={`mh-5 mb-4 mt-16 w-46 h-46 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-900 p-1 flex items-center justify-center transition-opacity duration-500 ${
            isFocusMode ? "opacity-20" : "opacity-100"
          }`}
        >
          <div className="mh-3 w-full h-full rounded-full bg-slate-950 flex items-center justify-center border-1 border-slate-800/50">
            
              <img src="Inayat.jpeg" className="w-full h-full rounded-full object-cover border-1 border-cyan-400 shadow-lg" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
          Hi, I'm <br className="md:hidden" />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
            Inayat Ahemed Ilkal.
          </span>
        </h1>

        {/* Typing */}
        <div className="h-8 md:h-12 mb-6">
          <p className="text-xl md:text-3xl font-medium text-slate-300 font-mono">
            {currentPhrase}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Full-Stack MERN Developer with Strong DSA & Problem-Solving Skills.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
          >
            Explore My Work
          </button>

          <button
            onClick={openAIChat}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-blue-500/30 backdrop-blur text-slate-200 font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-purple-400" />
            Chat with my AI
          </button>
        </div>
      </div>

      {/* Scroll */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-500 ${
          isFocusMode ? "opacity-20" : "opacity-70"
        }`}
      >
        <span className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-2">
          Scroll
        </span>

        <ChevronDown className="w-5 h-5 text-slate-400" />
      </div>
    </section>
  );
}
