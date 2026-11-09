import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/BackgroundGlow";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Team from "./components/Team";
import { Sparkles } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Premium, slow, ultra-subtle drifting dust particles (calm feeling)
  const floatingDots = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: (i * 47) % 100,
    y: (i * 23) % 100,
    size: (i % 2) === 0 ? 0.8 : 1.4,
    duration: 18 + (i % 4) * 4,
    delay: i * 0.5
  }));

  // Loading Screen Count-Up with smooth, premium pacing
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 4) + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 900);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [loading]);

  // Handle active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "team", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafaf7] text-stone-800 antialiased overflow-x-hidden selection:bg-emerald-base/30 selection:text-stone-900">
      <AnimatePresence mode="wait">
        {loading ? (
          /* MINIMAL PREMIUM SOFT-BLACK LOADING SCREEN */
          <motion.div
            key="preloader"
            className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-b from-[#0a0a0a] to-[#121212] select-none overflow-hidden"
            exit={{ 
              opacity: 0, 
              scale: 1.05,
              filter: "blur(12px)",
              transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } 
            }}
          >
            {/* Soft Ambient backlighting glow (elegant, subtle emerald bloom) */}
            <motion.div
              className="absolute w-[320px] h-[320px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none"
              animate={{
                scale: [0.95, 1.05, 0.95],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Calm Cinematic Drifting Particles */}
            {floatingDots.map((dot) => (
              <motion.div
                key={dot.id}
                className="absolute bg-emerald-500/10 rounded-full pointer-events-none"
                style={{
                  left: `${dot.x}%`,
                  top: `${dot.y}%`,
                  width: dot.size,
                  height: dot.size,
                }}
                animate={{
                  y: [0, -35, 0],
                  opacity: [0.08, 0.35, 0.08],
                }}
                transition={{
                  duration: dot.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: dot.delay,
                }}
              />
            ))}

            <div className="relative flex flex-col items-center max-w-[320px] w-full px-6 text-center z-10">
              
              {/* Very tiny premium focal dot resembling luxury portfolio details */}
              <div className="w-1 h-1 rounded-full bg-emerald-500/65 shadow-[0_0_6px_rgba(16,185,129,0.4)] mb-7 animate-pulse" />

              {/* Title & Brand Info */}
              <div className="space-y-2.5 mb-8">
                <h2 className="font-sans font-normal text-3xl tracking-[0.3em] text-stone-100 uppercase pl-[0.3em] leading-none">
                  ABHAY
                </h2>
                <p className="font-sans font-light text-[10px] sm:text-[10.5px] tracking-[0.16em] text-stone-400 capitalize pl-[0.16em] leading-none">
                  Creative Developer & Designer
                </p>
              </div>

              {/* Minimalist Elegant Loading Line */}
              <div className="w-full max-w-[170px]">
                {/* Thin loading trail */}
                <div className="w-full h-[1.5px] bg-[#1a1c1a] rounded-full overflow-hidden relative mb-3">
                  <motion.div
                    className="h-full bg-emerald-500/60"
                    style={{ width: `${progress}%` }}
                    transition={{ type: "tween", ease: "easeOut" }}
                  />
                </div>

                {/* Smooth percentage counter */}
                <div className="font-sans font-light text-[9.5px] text-stone-500 tracking-[0.15em] pl-[0.15em] uppercase leading-none">
                  {Math.round(progress)}%
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          /* CORE MAIN SYSTEM SITE VIEWPORT */
          <motion.div
            key="main-system"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Ambient Background layer follow mouse */}
            <BackgroundGlow />

            {/* Navigation Drawer Header */}
            <Navbar activeSection={activeSection} />

            {/* Viewport content stack sections */}
            <main>
              {/* Section 0: Home / Hero banner */}
              <Hero />

              {/* Section 1: About Me */}
              <About />

              {/* Section 2: Technical Arsenal Skills */}
              <Skills />

              {/* Section 3: Works Projects */}
              <Projects />

              {/* Section 4: Operational Services */}
              <Services />

              {/* Section 4.5: Our Team */}
              <Team />

              {/* Section 5: Secure Transmission Contact */}
              <Contact />
            </main>

            {/* Operational Footer Details */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
