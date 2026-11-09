import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  Layers, 
  Box, 
  Zap, 
  Eye, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

interface InteractiveProjectCardProps {
  key?: string | number;
  project: Project;
  onAnalyze: (p: Project) => void;
}

// Robust high-fidelity 3D Mouse Tilt card component
function InteractiveProjectCard({ 
  project, 
  onAnalyze 
}: InteractiveProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Normalize coordinates to [-1, 1]
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    setTilt({
      x: percentX * 7, // Max 7 degrees tilt
      y: percentY * 7
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Status mapping based on category for realistic feeling
  const statusLabel = project.year === "2026" ? "In Production" : "Released";
  const isWeb = project.category === "web";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="break-inside-avoid inline-block w-full mb-8 relative group cursor-pointer"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      style={{
        transformStyle: "preserve-3d",
        transform: isHovered 
          ? `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg) translateY(-8px)` 
          : "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)",
        transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      {/* Background Neon Emerald Bloom Shadow */}
      <div 
        className="absolute inset-0 rounded-[30px] pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          filter: "blur(25px)",
          transform: "translateZ(-10px)"
        }}
      />

      {/* Frosty Emerald Inner Border Halo */}
      <div className="absolute inset-0 rounded-[30px] border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300 z-0" />

      {/* Main Glass Core */}
      <div className="bg-[#121413]/85 backdrop-blur-3xl rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.5),_inset_0_1px_1px_rgba(255,255,255,0.06)] relative z-10 overflow-hidden flex flex-col justify-between text-left border border-white/5">
        
        {/* Subtle glass light reflection strip */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

        {/* Dynamic Scanline inside card */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-hologram-sweep pointer-events-none" />

        {/* Image viewport container */}
        <div className="relative overflow-hidden aspect-[16/10] bg-stone-900 rounded-t-[29px] select-none">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
          />

          {/* Luxury contrast overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121413] via-[#121413]/20 to-transparent opacity-90" />

          {/* Premium tag overlay labels */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            {project.metrics && (
              <span className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full px-3 py-1 font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-widest shadow-lg">
                ★ {project.metrics}
              </span>
            )}
            <span className={`rounded-full px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md border ${
              project.featured 
              ? "bg-[#d9b870]/10 border-[#d9b870]/20 text-[#d9b870]" 
              : "bg-white/5 border-white/10 text-stone-300"
            }`}>
              {project.category}
            </span>
          </div>

          {/* Active status pulse top-right */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase tracking-widest">
                {statusLabel}
              </span>
            </span>
          </div>
        </div>

        {/* Content body description parameters */}
        <div className="p-6 pt-5 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[#878370] font-mono text-[9px] tracking-wider uppercase">
              <span>{project.role.split(" ")[0]} DEPT</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-sans font-bold text-lg text-white leading-tight group-hover:text-emerald-400 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="w-4.5 h-4.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-400 transition-all duration-300" />
            </h3>
            <p className="text-stone-400 font-sans text-xs leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Technology tags panel block */}
          <div className="flex flex-wrap gap-1.5 pt-1.5">
            {project.tech.slice(0, 3).map((item) => (
              <span 
                key={item} 
                className="bg-white/[0.03] border border-white/5 rounded-md px-2 py-0.5 font-mono text-[8.5px] text-stone-300 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/10 group-hover:text-emerald-200 transition-colors"
              >
                {item}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="bg-white/[0.03] border border-white/5 rounded-md px-1.5 py-0.5 font-mono text-[8.5px] text-stone-400">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Grid partition split line */}
          <div className="h-[1px] bg-white/5 pt-1" />

          {/* User trigger CTA bar */}
          <div className="flex items-center justify-between">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAnalyze(project);
              }}
              className="font-mono text-[9px] font-bold text-stone-400 hover:text-white uppercase tracking-wider flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-white/5 transition-all outline-none"
            >
              <Eye className="w-3.5 h-3.5 text-emerald-400/80" />
              <span>Full Analytics spec</span>
            </button>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 flex items-center justify-center text-stone-300 hover:text-white transition-all scale-95 hover:scale-105"
                  title="Source code"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {project.demoUrl && (
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/15 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-all scale-95 hover:scale-105"
                  title="Live prototype interface"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "ui" | "design" | "experimental">("all");

  // Dynamic filter lists mapping flawlessly onto base elements structure
  const filteredProjects = activeFilter === "all"
    ? PROJECTS
    : activeFilter === "web"
    ? PROJECTS.filter((p) => p.category === "web")
    : activeFilter === "ui"
    ? PROJECTS.filter((p) => p.category === "design")
    : activeFilter === "design"
    ? PROJECTS.filter((p) => p.category === "design")
    : PROJECTS.filter((p) => p.category === "experimental");

  const filters = [
    { label: "All", id: "all" },
    { label: "Web", id: "web" },
    { label: "UI", id: "ui" },
    { label: "Design", id: "design" },
    { label: "Experiments", id: "experimental" },
  ];

  // Select "Rift Music" as spotlight (Project of the Month)
  const spotlightProject = PROJECTS.find(p => p.id === "rift-music") || PROJECTS[0];

  // Calculate stats based on current database lists
  const webCount = PROJECTS.filter(p => p.category === "web").length;
  const designCount = PROJECTS.filter(p => p.category === "design").length;
  const experimentalCount = PROJECTS.filter(p => p.category === "experimental").length;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-transparent selection:bg-emerald-500/35 selection:text-stone-900">
      
      {/* 1. CINEMATIC BACKGROUND BLUR GLOBES & CHIPS */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-15%] w-[420px] h-[420px] rounded-full bg-[#d9b870]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-[30%] w-[180px] h-[180px] rounded-full bg-emerald-400/3 blur-[90px] pointer-events-none animate-pulse" />

      {/* Drifting background cosmic stars */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-24 left-[20%] w-1 h-1 rounded-full bg-emerald-400" />
        <div className="absolute top-96 right-[15%] w-1 h-1 rounded-full bg-[#d9b870] animate-pulse" />
        <div className="absolute bottom-[30%] left-[10%] w-[1.5px] h-[1.5px] rounded-full bg-white" />
        <div className="absolute bottom-12 right-[40%] w-[1.2px] h-[1.2px] rounded-full bg-emerald-400/80 animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">

        {/* 2. HEADER MODULE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/15">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span className="font-mono text-[9px] font-bold text-emerald-800 tracking-wider uppercase">Curation of Craft</span>
            </div>
            <h2 className="text-4xl sm:text-[56px] font-display font-black text-stone-900 tracking-tight leading-none">
              Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Architectures</span>
            </h2>
            <p className="text-[#878370] font-sans text-sm sm:text-base font-normal tracking-wide max-w-xl leading-relaxed">
              Explore dynamic interfaces, high-fidelity brand identities, and customized web experiences engineered at pixel perfection.
            </p>
          </div>

          {/* Quick Counter overview */}
          <div className="flex items-center gap-4 py-2 px-3 sm:py-3 sm:px-5 bg-white/70 backdrop-blur-md rounded-2xl border border-stone-200/50 shadow-sm shrink-0">
            <div className="text-center px-2">
              <div className="font-display font-bold text-lg text-stone-900">{webCount}</div>
              <div className="font-mono text-[7.5px] text-stone-500 uppercase tracking-widest mt-0.5">Web</div>
            </div>
            <div className="h-6 w-[1.5px] bg-stone-200" />
            <div className="text-center px-2">
              <div className="font-display font-bold text-lg text-stone-900">{designCount}</div>
              <div className="font-mono text-[7.5px] text-stone-500 uppercase tracking-widest mt-0.5">Design</div>
            </div>
            <div className="h-6 w-[1.5px] bg-stone-200" />
            <div className="text-center px-2">
              <div className="font-display font-bold text-lg text-stone-900">{experimentalCount}</div>
              <div className="font-mono text-[7.5px] text-stone-500 uppercase tracking-widest mt-0.5">Exper's</div>
            </div>
          </div>
        </div>

        {/* 3. FEATURED PROJECT SPOTLIGHT (Project of the Month) */}
        {spotlightProject && (
          <div className="mb-20">
            <div className="text-left mb-5">
              <span className="font-mono text-[10px] font-bold text-[#bfa163] tracking-[0.25em] uppercase pl-1 block">
                ✦ PROJECT OF THE MONTH ✦
              </span>
            </div>
            
            {/* Split spotlight card */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121413]/95 backdrop-blur-3xl border border-white/5 rounded-[40px] p-6 sm:p-10 shadow-[0_35px_80px_rgba(0,0,0,0.65),_inset_0_1px_1px_rgba(255,255,255,0.06)] relative overflow-hidden text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Internal neon subtle decoration overlay */}
              <div className="absolute top-0 right-0 p-8 text-emerald-500/5 pointer-events-none">
                <Cpu className="w-48 h-48" />
              </div>

              {/* Left Column: Image Mockup & metrics */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="relative rounded-[30px] overflow-hidden project-spotlight-image-container aspect-[16/10] bg-stone-900 border border-white/5 select-none shadow-2xl">
                  <img
                    src={spotlightProject.image}
                    alt={spotlightProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[2000s] ease-linear scale-100 hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* Spotlight label overlay */}
                  <div className="absolute bottom-4 left-4 bg-emerald-500 text-stone-950 font-mono text-[9px] font-bold tracking-widest uppercase rounded px-3 py-1.5 shadow-lg">
                    Featured Blueprint
                  </div>
                </div>

                {/* Micro tech metrics stats box */}
                <div className="grid grid-cols-3 gap-4.5">
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <div className="font-mono text-[8px] text-stone-500 tracking-wider font-bold uppercase mb-1">Architecture</div>
                    <div className="font-sans font-extrabold text-[12px] text-stone-200">
                      {spotlightProject.id === "rift-music" ? "Lavalink Node" : "React 19 Core"}
                    </div>
                  </div>
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <div className="font-mono text-[8px] text-stone-500 tracking-wider font-bold uppercase mb-1">Pacing speed</div>
                    <div className="font-sans font-extrabold text-[12px] text-emerald-400">
                      {spotlightProject.id === "rift-music" ? "8ms Latency" : "0.12s FCP"}
                    </div>
                  </div>
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <div className="font-mono text-[8px] text-stone-500 tracking-wider font-bold uppercase mb-1">Recognition</div>
                    <div className="font-sans font-extrabold text-[11px] text-[#d9b870] leading-none">
                      {spotlightProject.id === "rift-music" ? "HD Lossless" : "Awwwards Rec"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Info */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8 lg:pl-4">
                
                <div className="space-y-5">
                  
                  {/* Badge tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[8.5px] uppercase tracking-wider font-semibold">
                      {spotlightProject.id === "rift-music" ? "Lossless 320kbps" : "Enterprise Grade"}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stone-300 font-mono text-[8.5px] uppercase tracking-wider">
                      {spotlightProject.id === "rift-music" ? "Autoplay Synced" : "Interactive Prototype"}
                    </span>
                  </div>

                  {/* Title / Info */}
                  <div className="space-y-1">
                    <h3 className="font-sans font-black text-2xl sm:text-3.5xl text-white tracking-tight leading-none uppercase">
                      {spotlightProject.title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#bfa163] font-bold uppercase tracking-widest pl-0.5">
                      {spotlightProject.role} // YEAR {spotlightProject.year}
                    </p>
                  </div>

                  {/* Project description copy */}
                  <p className="text-white font-sans text-xs sm:text-[13px] leading-relaxed tracking-wide">
                    {spotlightProject.description}
                  </p>

                  {/* Built-with tags */}
                  <div className="space-y-2">
                    <div className="font-mono text-[8.5px] text-stone-500 uppercase tracking-widest font-bold">
                      Verified System Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {spotlightProject.tech.map((t) => (
                        <span 
                          key={t}
                          className="bg-white/[0.04] border border-white/10 text-stone-300 rounded px-2.5 py-1 font-mono text-[10px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Split line and action buttons */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button 
                    onClick={() => setSelectedProject(spotlightProject)}
                    className="flex-1 py-3 px-5 sm:px-6 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-mono text-[10px] font-extrabold tracking-widest uppercase rounded-xl transition-colors cursor-pointer text-center outline-none"
                  >
                    View System Blueprint
                  </button>
                  <div className="flex items-center justify-start gap-3 shrink-0">
                    <a 
                      href={spotlightProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-stone-100 hover:text-white transition-all scale-95 hover:scale-105"
                      title="Launch Prototype"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a 
                      href={spotlightProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-stone-100 hover:text-white transition-all scale-95 hover:scale-105"
                      title="View Sources"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}

        {/* 4. GALLERY LAYOUT HEADER & CATEGORY BAR FILTERS */}
        <div className="bg-white/35 backdrop-blur-2.5xl border border-stone-200/50 rounded-[35px] sm:rounded-[45px] p-6 sm:p-10 md:p-12 shadow-[0_25px_65px_rgba(0,0,0,0.02),_inset_0_1px_2px_rgba(255,255,255,0.7)] mt-12">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            
            {/* Filter Title */}
            <div className="text-left">
              <span className="font-mono text-[8.5px] text-emerald-600 font-extrabold uppercase tracking-widest block">
                Interactive Grid
              </span>
              <h3 className="font-display font-extrabold text-2xl text-stone-900 uppercase mt-0.5">
                Archival Blueprint Node
              </h3>
            </div>

            {/* Premium Pill Tabs with smooth hover/active indicator */}
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => {
                const isActive = activeFilter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id as any)}
                    className={`cursor-pointer px-4.5 py-2 rounded-full font-sans text-xs tracking-wider font-semibold transition-all duration-300 relative border ${
                      isActive
                        ? "bg-stone-950 border-stone-900 text-white shadow-lg shadow-stone-900/10"
                        : "bg-white/50 border-stone-200/50 hover:bg-white/85 text-stone-700 hover:border-stone-300"
                    }`}
                  >
                    <span>{f.label}</span>
                    {isActive && (
                      <motion.div 
                        className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-emerald-500/60"
                        layoutId="projectsTabUnderline"
                        transition={{ duration: 0.35 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. DESKTOP GALLERY: CINEMATIC MULTI-STAGGER MASONRY COLUMNS */}
          <div className="hidden md:block">
            <motion.div 
              className="columns-1 md:columns-2 lg:columns-3 gap-8"
              layout="position"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <InteractiveProjectCard
                    key={project.id}
                    project={project}
                    onAnalyze={setSelectedProject}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* 6. MOBILE GALLERY: PREMIUM APP-LIKE HORIZONTAL CAROUSEL SWIPE SINK */}
          {/* Using custom mobile swiping viewport cards list */}
          <div className="block md:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-6 -mx-6 px-6">
              {filteredProjects.map((project) => {
                const statusLabel = project.year === "2026" ? "In Production" : "Released";
                return (
                  <div 
                    key={project.id}
                    className="snap-center shrink-0 w-[88vw] max-w-[320px] bg-[#121413] rounded-[30px] border border-white/5 relative overflow-hidden flex flex-col justify-between text-left p-5 text-white"
                  >
                    
                    {/* Header Image viewport */}
                    <div className="aspect-[16/10] bg-stone-900 rounded-2xl overflow-hidden relative select-none">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121413] via-transparent to-transparent" />
                      
                      {/* Badge overlays */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full px-2.5 py-0.5 font-mono text-[8px] font-bold text-emerald-400 uppercase tracking-widest">
                          ★ {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content text */}
                    <div className="space-y-3 pt-4">
                      
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-[#878370] font-mono text-[8px]">
                          <span>{project.role.split(" ")[0]} DEPT</span>
                          <span>{project.year}</span>
                        </div>
                        <h4 className="font-sans font-bold text-base text-stone-100">
                          {project.title}
                        </h4>
                      </div>

                      <p className="text-stone-400 font-sans text-[11.5px] leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((item) => (
                          <span 
                            key={item} 
                            className="bg-white/[0.04] rounded px-2 py-0.5 font-mono text-[8.5px] text-stone-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* CTA Panel buttons on Mobile */}
                      <div className="pt-3.5 border-t border-white/5 flex items-center justify-between gap-2.5">
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 py-2.5 bg-white/70 hover:bg-white text-stone-950 font-mono text-[9px] font-exrabold tracking-wider uppercase rounded-xl transition-all cursor-pointer text-center outline-none"
                        >
                          Inspection
                        </button>

                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-stone-300"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a 
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

            {/* Mobile swipe indicator banner */}
            <div className="flex items-center justify-center gap-1 text-stone-400 font-sans italic text-[11px] pt-4">
              <span>Swipe horizontally to explore cards</span>
              <Sparkles className="w-3 h-3 text-emerald-500 animate-pulse" />
            </div>
          </div>

        </div>

      </div>

      {/* 7. DETAILED SPECS MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Glass Backdrop */}
            <motion.div
              className="absolute inset-0 bg-stone-950/65 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Card frame Container */}
            <motion.div
              className="relative w-full max-w-2xl bg-[#121413]/95 border border-white/5 rounded-[40px] p-6 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)] scale-95 overflow-hidden z-10 max-h-[90vh] overflow-y-auto text-left text-white"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
            >
              {/* Corner highlighted line decor */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent pointer-events-none" />

              {/* Close specimen trigger */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 px-4 py-2 rounded-xl border border-white/10 hover:border-emerald-500/30 text-stone-400 hover:text-white font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer bg-white/[0.02]"
              >
                Close spec [X]
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-7 mt-10 md:mt-6">
                
                {/* Visual Image container */}
                <div className="md:col-span-5 rounded-2xl overflow-hidden border border-white/5 bg-stone-900 h-48 md:h-64 relative select-none shadow-xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {selectedProject.metrics && (
                    <div className="absolute top-3.5 left-3.5 bg-emerald-500 text-stone-950 rounded px-2 py-1 text-[8.5px] font-mono font-bold tracking-widest uppercase">
                      {selectedProject.metrics}
                    </div>
                  )}
                </div>

                {/* Narrative Spec Info details */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2.5 items-center font-mono text-[9px] text-[#bfa163] uppercase tracking-widest pl-0.5">
                      <span className="text-stone-400">Release:</span>
                      <span>{selectedProject.year}</span>
                      <span className="text-white/10">•</span>
                      <span className="text-stone-400">ROLE:</span>
                      <span>{selectedProject.role}</span>
                    </div>

                    <h3 className="font-sans font-black text-2xl uppercase text-white leading-none tracking-tight">
                      {selectedProject.title}
                    </h3>

                    <p className="text-stone-400 font-sans text-xs leading-relaxed">
                      {selectedProject.description} Designed with supreme performance protocols. Crafted as an archival blueprint showcasing robust visual layouts, spatial aesthetics, and cohesive system modules.
                    </p>

                    {/* Stack tags parameters block */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] text-stone-500 font-bold tracking-widest uppercase">
                        Active Stack Parameters:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((item) => (
                          <span
                            key={item}
                            className="bg-white/[0.03] border border-white/5 font-mono text-[9.5px] text-stone-300 rounded px-2.5 py-1"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Operational actions footer buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-white/5">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-mono font-extrabold tracking-widest text-[9.5px] rounded-xl transition-colors cursor-pointer text-center outline-none"
                      >
                        <span>LAUNCH PROTOTYPE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-3 px-5 border border-white/10 hover:border-emerald-500/30 text-stone-300 hover:text-white rounded-xl font-mono text-[9.5px] flex items-center justify-center gap-2 transition-all cursor-pointer bg-white/[0.02]"
                      >
                        <Github className="w-4 h-4" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
