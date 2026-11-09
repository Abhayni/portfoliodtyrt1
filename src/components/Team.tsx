import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Terminal } from "lucide-react";
// @ts-ignore
import amanProfile from "../assets/images/aman_profile_1779725430166.png";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  url: string;
  blueprint: string;
  engine: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "aman",
    name: "Aman",
    role: "Creative Developer",
    bio: "Building creative digital experiences",
    image: amanProfile,
    url: "/team/aman.html",
    blueprint: "Blueprint: Developer",
    engine: "Creative Engine"
  },
  {
    id: "samaksh",
    name: "Samaksh",
    role: "UI Designer",
    bio: "Building creative digital experiences",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&fit=crop&crop=face",
    url: "/team/samaksh.html",
    blueprint: "Blueprint: UI/UX",
    engine: "Design Engine"
  },
  {
    id: "krishna",
    name: "Krishna",
    role: "Frontend Developer",
    bio: "Building creative digital experiences",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&fit=crop&crop=face",
    url: "/team/krishna.html",
    blueprint: "Blueprint: Frontend",
    engine: "Interface Engine"
  },
  {
    id: "aarav",
    name: "Aarav",
    role: "Web Creator",
    bio: "Building creative digital experiences",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&h=300&fit=crop&crop=face",
    url: "/team/aarav.html",
    blueprint: "Blueprint: Creator",
    engine: "Svelte & Web3"
  },
  {
    id: "vaibhav",
    name: "Vaibhav",
    role: "Full Stack Developer",
    bio: "Building creative digital experiences",
    image: "/team/vaibhav_profile.png",
    url: "/team/vaibhav.html",
    blueprint: "Blueprint: Full Stack",
    engine: "Architecture Engine"
  }
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <section 
      id="team" 
      className="py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-[#fafaf7] text-stone-800 border-t border-stone-200/40"
    >
      {/* Absolute Ambient Background Blobs matching the premium personal brand style */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[#d9b870]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d9b870]/10 border border-[#d9b870]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#d9b870] animate-pulse" />
            <span className="font-mono text-[9px] font-bold text-[#8a7240] tracking-wider uppercase">Synergy</span>
          </div>
          <h2 className="text-4xl sm:text-[56px] font-display font-black text-stone-900 tracking-tight leading-none uppercase">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-650 via-[#bba061] to-emerald-600">Team</span>
          </h2>
          <p className="text-[#878370] font-sans text-sm sm:text-base font-normal tracking-wide max-w-2xl mx-auto leading-relaxed">
            Leading creative minds, designers, and developers compiling premium digital landmarks.
          </p>
        </div>

        {/* Members Grid - beautifully responsive and elegant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={member.id}
                onClick={() => handleCardClick(member.url)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full cursor-pointer group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Elegant Outer glowing border halo */}
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-[#d9b870]/20 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 z-0" />

                {/* Frost Glass Main Shell */}
                <div className="relative p-6 bg-gradient-to-b from-white/95 to-white/70 backdrop-blur-3xl rounded-[30px] border border-stone-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.02)] sm:shadow-[0_25px_60px_rgba(0,0,0,0.032)] overflow-hidden flex flex-col items-center transition-all duration-300 z-10 min-h-[380px] justify-center">
                  
                  {/* Emerald neon bottom border accent block */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-400 to-[#d9b870] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* High-Fidelity Circular Frame (Even Larger, bolder layout) */}
                  <div className="relative w-48 sm:w-52 h-48 sm:h-52 mb-6 p-2 bg-gradient-to-tr from-[#d9b870]/20 via-[#eedaa3]/45 to-emerald-500/25 group-hover:from-emerald-500/60 group-hover:to-[#d9b870]/60 transition-all duration-700 shadow-[0_0_25px_rgba(217,184,112,0.15)] group-hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] rounded-full z-10 flex items-center justify-center scale-100 group-hover:scale-105">
                    
                    {/* Animated rotating border outline */}
                    <div className="absolute -inset-2 border border-dashed border-stone-300/40 rounded-full animate-[spin_40s_linear_infinite] group-hover:border-emerald-500/40" />
                    
                    {/* Active dynamic glowing aura behind */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-emerald-500/15 to-[#d9b870]/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-stone-900 to-stone-950 overflow-hidden relative flex items-center justify-center border border-stone-200/15">
                      
                      {/* Subtle Tech Cyber Grid inside user frame */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none" />

                      {/* Ambient corner flares */}
                      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl pointer-events-none" />
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d9b870]/20 rounded-full blur-xl pointer-events-none" />

                      {/* Real Portrait image */}
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover rounded-full scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
                        referrerPolicy="no-referrer"
                      />

                      {/* Absolute outer halo tracking spinner inside picture */}
                      <div className="absolute inset-1 border border-emerald-500/20 rounded-full animate-[spin_25s_linear_infinite]" />
                      <div className="absolute inset-2 border border-dashed border-[#d9b870]/20 rounded-full animate-[spin_35s_linear_infinite_reverse]" />
                    </div>

                    {/* Operational high-fidelity dot/indicator beacon at the bottom right */}
                    <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-stone-900 border-2 border-white flex items-center justify-center shadow-lg z-20">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                  </div>

                  {/* Name Details */}
                  <div className="space-y-1 text-center transition-all duration-300">
                    <h3 className="font-display font-black text-xl text-stone-900 tracking-tight leading-none group-hover:text-emerald-600 transition-colors">
                      {member.name}
                    </h3>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#a49f8a] block pt-1">
                      {member.blueprint}
                    </span>
                  </div>

                  {/* HOVER INTERACTIVE GLASSMORPHISM OVERLAY SHIELD */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 bg-[#0e1110]/95 backdrop-blur-xl flex flex-col justify-center items-center p-4 text-center text-white rounded-[30px] border border-emerald-500/30 shadow-2xl z-20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                      >
                        {/* Top Accent line */}
                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

                        <div className="space-y-3 max-w-[240px]">
                          {/* Interactive tag */}
                          <div className="inline-flex items-center gap-1 font-mono text-[7px] tracking-[0.2em] font-bold text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/15 px-2 py-0.5 rounded-full mx-auto">
                            <Terminal className="w-2 h-2" />
                            <span>{member.engine}</span>
                          </div>

                          {/* Info details */}
                          <div className="space-y-1">
                            <h4 className="font-sans font-bold text-base leading-tight uppercase tracking-tight">
                              {member.role}
                            </h4>
                            <p className="font-sans font-normal text-stone-400 text-[11px] leading-relaxed">
                              "{member.bio}"
                            </p>
                          </div>

                          {/* Action CTA Trigger */}
                          <div className="pt-1">
                            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#113324] to-[#174130] border border-emerald-500/30 text-emerald-300 font-mono font-bold tracking-widest text-[8px] rounded-lg group-hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-900/10 hover:border-emerald-500/50 uppercase">
                              <span>View Portfolio</span>
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
