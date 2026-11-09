import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Code, 
  Layers, 
  Figma, 
  Paintbrush, 
  Video, 
  Sparkles, 
  Box, 
  Flame, 
  Terminal, 
  Laptop, 
  Clock, 
  BookOpen, 
  Award, 
  TrendingUp,
  Activity,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

// Robust, dependency-free count-up sub-component to trigger numbers rising when visible in viewport
function CountUp({ end, suffix = "", delay = 0.1 }: { end: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            let start = 0;
            const duration = 1.3; // seconds
            const totalSteps = 40;
            const stepValue = Math.ceil(end / totalSteps);
            const stepTime = (duration * 1000) / totalSteps;
            
            const timer = setInterval(() => {
              start += stepValue;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(start);
              }
            }, stepTime);
          }, delay * 1000);
          
          observer.unobserve(elementRef);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(elementRef);
    return () => observer.disconnect();
  }, [elementRef, end, delay]);

  return (
    <span ref={setElementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const radius = 26;
  const circumference = 2 * Math.PI * radius; // ~163.36

  // Categorized premium technology and creative portfolios
  const skillCategories = [
    {
      title: "Frontend Engineering",
      glowColor: "rgba(16, 185, 129, 0.12)", // emerald
      glowBorder: "group-hover:border-emerald-500/30",
      accentText: "text-emerald-400",
      skills: [
        { name: "HTML", level: 95, icon: Code, desc: "Semantic structural hierarchy & SEO protocols." },
        { name: "CSS", level: 90, icon: Flame, desc: "Fluid grid systems, custom vars & modern animations." },
        { name: "JavaScript", level: 94, icon: Terminal, desc: "Asynchronous runtime, dynamic DOM state & ESNext." },
        { name: "React", level: 85, icon: Layers, desc: "State lifecycle management, components & micro-hooks." },
        { name: "Python", level: 90, icon: Terminal, desc: "Advanced scripting, OOP, Discord API integrations, and async execution backends." }
      ]
    },
    {
      title: "UI Design & Prototyping",
      glowColor: "rgba(0, 180, 216, 0.12)", // cyan
      glowBorder: "group-hover:border-cyan-500/30",
      accentText: "text-cyan-400",
      skills: [
        { name: "UI Design", level: 90, icon: Laptop, desc: "Optimal visual weight structures, margins & typography." },
        { name: "Figma", level: 75, icon: Figma, desc: "Precise vector framing, layouts & high fidelity wires." },
        { name: "Photoshop", level: 80, icon: Paintbrush, desc: "Creative synthesis, color grades & raster assets." }
      ]
    },
    {
      title: "Creative Art & Systems",
      glowColor: "rgba(217, 184, 112, 0.12)", // gold/yellow
      glowBorder: "group-hover:border-[#d9b870]/30",
      accentText: "text-[#d9b870]",
      skills: [
        { name: "3D Modeling", level: 70, icon: Box, desc: "Spatial projection, meshes & ambient render setups." },
        { name: "Video Editing", level: 85, icon: Video, desc: "Sensory pacing, timeline motion flow & composite audio." }
      ]
    }
  ];

  const learningSkills = [
    { name: "TypeScript & Complex Nestings", progress: 65, goal: "Secure Scalable Microservices" },
    { name: "Next.js & Serverless Nodes", progress: 50, goal: "Optimized Incremental Static Web" },
    { name: "Framer Motion & Shader Effects", progress: 75, goal: "Cinematic High-Fi Fluid Components" }
  ];

  const timelineSteps = [
    { 
      year: "2022", 
      title: "Discovered Code", 
      tech: "HTML", 
      desc: "Unlocked basic structure, nested nodes, layout drafts, and visual positioning." 
    },
    { 
      year: "2023", 
      title: "Visual Synthesis", 
      tech: "CSS & Transitions", 
      desc: "Engineered responsive systems, micro-transitions, animations, and fluid media queries." 
    },
    { 
      year: "2024", 
      title: "Craft & Ideation", 
      tech: "UI Design & Figma", 
      desc: "Designed components with absolute spatial alignment, font structures, and Figma vectors." 
    },
    { 
      year: "2026 & Beyond", 
      title: "Aventurism", 
      tech: "Future Full-Stack", 
      desc: "Sculpting immersive user interfaces, server processes, and web architectures." 
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-[#fafaf7] text-stone-800 border-t border-stone-200/40">
      
      {/* Absolute Ambient Background Blobs matching personal branding */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[420px] h-[420px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/15">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span className="font-mono text-[9px] font-bold text-emerald-800 tracking-wider uppercase">My Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-[56px] font-display font-black text-stone-900 tracking-tight leading-none">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Superpowers</span>
          </h2>
          <p className="text-[#878370] font-sans text-sm sm:text-base font-normal tracking-wide max-w-2xl leading-relaxed">
            Technologies and creative tools I use to build experiences.
          </p>
        </div>

        {/* 1. EXTRA PREMIUM FEATURES: LIVE PERFORMANCE OVERVIEW PANEL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 sm:p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-stone-200/60 shadow-[0_15px_30px_rgba(0,0,0,0.015)] relative overflow-hidden group hover:border-emerald-500/25 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 text-emerald-500/10 opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all">
              <Activity className="w-16 h-16" />
            </div>
            <div className="flex items-center gap-5.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900">
                  <CountUp end={24} suffix="+" />
                </div>
                <div className="font-sans text-[11px] sm:text-xs font-semibold text-stone-500 tracking-wide uppercase mt-0.5">Projects Created</div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-stone-200/60 shadow-[0_15px_30px_rgba(0,0,0,0.015)] relative overflow-hidden group hover:border-cyan-500/25 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 text-cyan-500/10 opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all">
              <Clock className="w-16 h-16" />
            </div>
            <div className="flex items-center gap-5.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center text-cyan-600 shrink-0">
                <TrendingUp className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900">
                  <CountUp end={1800} suffix="+" />
                </div>
                <div className="font-sans text-[11px] sm:text-xs font-semibold text-stone-500 tracking-wide uppercase mt-0.5">Hours Invested</div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-stone-200/60 shadow-[0_15px_30px_rgba(0,0,0,0.015)] relative overflow-hidden group hover:border-[#d9b870]/25 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 text-[#d9b870]/10 opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all">
              <Award className="w-16 h-16" />
            </div>
            <div className="flex items-center gap-5.5">
              <div className="w-12 h-12 rounded-2xl bg-[#d9b870]/10 border border-[#d9b870]/15 flex items-center justify-center text-[#d9b870] shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="font-sans text-[11px] sm:text-xs font-semibold text-stone-500 tracking-wide uppercase mt-0.5">Skills Mastered</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE FUTURISTIC SKILLS CONSOLE (Bento layout partitioned by categories) */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="space-y-6">
              
              {/* Category banner */}
              <div className="flex items-center gap-3">
                <span className={`h-1.5 w-6 rounded-full bg-stone-900`} />
                <h3 className="font-sans font-bold text-sm sm:text-base text-stone-900 uppercase tracking-widest leading-none">
                  {category.title}
                </h3>
              </div>

              {/* Grid of skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIdx) => {
                  const IconComponent = skill.icon;
                  const offset = circumference - (circumference * skill.level) / 100;
                  const skillId = `${catIdx}-${skillIdx}`;

                  return (
                    <motion.div
                      key={skill.name}
                      className="group relative cursor-pointer"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIdx * 0.08 }}
                      whileHover={{ 
                        scale: 1.03,
                        rotateX: 1.8,
                        rotateY: -1.8,
                        transition: { duration: 0.25 }
                      }}
                      onHoverStart={() => setHoveredCard(skillId)}
                      onHoverEnd={() => setHoveredCard(null)}
                    >
                      {/* Interactive Frost-glowing backplate */}
                      <div 
                        className={`absolute inset-0 rounded-[28px] pointer-events-none transition-all duration-300 z-0`}
                        style={{
                          backgroundColor: hoveredCard === skillId ? category.glowColor : "transparent",
                          boxShadow: hoveredCard === skillId ? `0 20px 40px -15px ${category.glowColor}` : "none"
                        }}
                      />

                      {/* Glassmorphic Shell */}
                      <div className={`p-6 bg-gradient-to-b from-stone-950/90 to-stone-900/90 backdrop-blur-2xl rounded-[28px] border border-white/5 ${category.glowBorder} shadow-2xl relative z-10 flex flex-col justify-between h-[210px] sm:h-[220px] transition-all duration-300 overflow-hidden`}>
                        
                        {/* Highlights inside glass card */}
                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/[0.08] pointer-events-none" />

                        {/* Top: Tech Tag + Indicator */}
                        <div className="flex items-start justify-between w-full">
                          
                          {/* Floating active icon */}
                          <div className={`w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-stone-300 group-hover:text-white group-hover:scale-110 group-hover:border-white/20 transition-all duration-300`}>
                            <IconComponent className="w-5 h-5" />
                          </div>

                          {/* Futuristic Circular glow progress dial */}
                          <div className="relative w-[60px] h-[60px] flex items-center justify-center shrink-0">
                            
                            {/* Inner percentage glow */}
                            <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center text-[11px] font-sans font-bold text-white tracking-tighter shadow-inner">
                              <CountUp end={skill.level} suffix="%" />
                            </div>

                            {/* Gauge path layout */}
                            <svg className="w-full h-full transform -rotate-90 pointer-events-none">
                              {/* Background mute outline */}
                              <circle
                                cx="50%"
                                cy="50%"
                                r={radius}
                                className="stroke-white/[0.06] fill-none"
                                strokeWidth={strokeWidthForDevice()}
                              />
                              {/* Glowing Active Trail path with custom drop shadow glow */}
                              <motion.circle
                                cx="50%"
                                cy="50%"
                                r={radius}
                                className="stroke-emerald-400 fill-none"
                                style={{
                                  stroke: hoveredCard === skillId ? "none" : "",
                                  filter: hoveredCard === skillId ? "drop-shadow(0 0 5px #34d399)" : "none"
                                }}
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                initial={{ strokeDashoffset: circumference }}
                                whileInView={{ strokeDashoffset: offset }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, ease: "easeOut", delay: skillIdx * 0.1 }}
                              />
                            </svg>

                          </div>

                        </div>

                        {/* Bottom Info details */}
                        <div className="space-y-1 w-full text-left">
                          <h4 className="font-sans font-bold text-sm text-stone-100 tracking-wide uppercase flex items-center gap-1.5 leading-none">
                            <span>{skill.name}</span>
                            <ArrowUpRight className={`w-3 h-3 ${category.accentText} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200`} />
                          </h4>
                          <p className="font-sans font-light text-[11px] text-stone-400 leading-relaxed tracking-wide">
                            {skill.desc}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* 3. CURRENTLY LEARNING & TIMELINE PANELS (Symmetric high-fidelity split layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24">
          
          {/* Left: Active Learning track (5 cols) */}
          <div className="lg:col-span-5 bg-stone-950/95 backdrop-blur-2.5xl p-7 sm:p-9 rounded-[35px] border border-stone-800 shadow-[0_25px_65px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/[0.04] pointer-events-none" />
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold text-[#d9b870] uppercase tracking-wider bg-[#d9b870]/10 border border-[#d9b870]/15 px-3 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 text-[#d9b870]" />
                  <span>Research Track</span>
                </div>
                <h3 className="font-sans font-black text-xl sm:text-2xl text-stone-100 uppercase tracking-wide leading-none">
                  Currently Learning
                </h3>
                <p className="font-sans font-light text-xs text-stone-400 leading-relaxed tracking-wide">
                  Evolving skillsets to synthesize dynamic, enterprise level digital architecture.
                </p>
              </div>

              {/* Progress items */}
              <div className="space-y-6.5 pt-4">
                {learningSkills.map((item, index) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between items-end font-sans tracking-wide">
                      <div>
                        <span className="font-sans font-bold text-[12px] sm:text-[12.5px] text-stone-200 uppercase leading-none block">
                          {item.name}
                        </span>
                        <span className="font-sans text-[10px] text-stone-500 italic mt-0.5 block">
                          Goal: {item.goal}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#d9b870]">
                        {item.progress}%
                      </span>
                    </div>

                    {/* Progress tracking track bar */}
                    <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden border border-white/5 relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#d9b870] to-yellow-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Details */}
            <div className="pt-8 border-t border-stone-900 flex items-center justify-between text-stone-500 font-mono text-[8px] sm:text-[8.5px] tracking-widest uppercase mt-8">
              <span>NODE: LAB_ENGINE</span>
              <span>STABLE FEEDBACK CYCLE</span>
            </div>
          </div>

          {/* Right: Immersive Creative Timeline Pathway (7 cols) */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-md p-7 sm:p-9 rounded-[35px] border border-stone-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.015)] relative overflow-hidden flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold text-cyan-600 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/15 px-3 py-1 rounded-full">
                  <Activity className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Timeline Progression</span>
                </div>
                <h3 className="font-sans font-black text-xl sm:text-2xl text-stone-900 uppercase tracking-wide leading-none">
                  My Career Roadmap
                </h3>
                <p className="font-sans font-light text-xs text-stone-500 leading-relaxed tracking-wide">
                  Interactive journey tracing the integration of craft, structure, and dynamic processes.
                </p>
              </div>

              {/* Vertical / Connected horizontal timeline path */}
              <div className="relative pt-6 grid grid-cols-1 sm:grid-cols-4 gap-4 leading-none">
                
                {/* Horizontal progress connector (hidden on small screen) */}
                <div className="absolute top-[38px] left-[15%] right-[15%] h-[1.5px] bg-stone-200 pointer-events-none hidden sm:block z-0" />
                
                {timelineSteps.map((step, sIdx) => {
                  const isHovered = activeStep === sIdx;
                  return (
                    <motion.div
                      key={step.year}
                      className="relative z-10 flex sm:flex-col items-center sm:text-center text-left gap-4 sm:gap-0 group cursor-pointer"
                      onMouseEnter={() => setActiveStep(sIdx)}
                      onMouseLeave={() => setActiveStep(null)}
                      whileHover={{ y: -3 }}
                    >
                      {/* Timeline Year Node */}
                      <div className="relative mb-2 sm:mb-4 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border font-mono text-[9px] font-extrabold z-10 transition-all duration-300 ${
                          isHovered 
                          ? "bg-stone-900 border-stone-900 text-white shadow-lg shadow-stone-900/10 scale-110" 
                          : "bg-white border-stone-300 text-stone-600"
                        }`}>
                          {step.year}
                        </div>
                        {/* Glow halo on hover inside pathway */}
                        <div className={`absolute w-12 h-12 rounded-full bg-stone-900/5 blur-sm scale-110 z-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                      </div>

                      {/* Content block inside columns */}
                      <div className="space-y-1 relative pr-1.5 sm:pr-0">
                        <h4 className="font-sans font-extrabold text-[12px] text-stone-900 uppercase tracking-wide">
                          {step.title}
                        </h4>
                        <span className="font-sans text-[10px] text-emerald-600 font-bold block tracking-wider uppercase">
                          {step.tech}
                        </span>
                        
                        {/* Smooth collapsible description overlay/caption */}
                        <p className={`font-sans font-normal text-[10.5px] text-stone-500 leading-normal tracking-wide mt-1.5 sm:mt-2 bg-stone-100 p-2.5 rounded-xl border border-stone-200/60 max-w-[200px] text-left transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0 scale-100" : "sm:opacity-0 sm:pointer-events-none block sm:h-0 sm:py-0 sm:border-0 sm:overflow-hidden translate-y-1 scale-95"}`}>
                          {step.desc}
                        </p>
                      </div>

                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* Timeline footer guidance for visitors */}
            <div className="pt-8 border-t border-stone-100 sm:text-center text-left text-stone-400 font-sans italic text-[10.5px] leading-none mt-8">
              * Hover over the milestones to unfold the chronological archives.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Helper to determine optimum stroke width for devices cleanly
function strokeWidthForDevice() {
  return "3";
}
