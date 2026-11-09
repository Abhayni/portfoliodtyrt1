import { motion } from "motion/react";
import { User, Terminal, Milestone, Award } from "lucide-react";

export default function About() {
  const stats = [
    { value: "05+", label: "PREMIUM PRODUCTS", color: "text-emerald-base" },
    { value: "98%", label: "PIXEL ACCURACY", color: "text-[#bca46e]" },
    { value: "02+", label: "YEARS EXP", color: "text-emerald-base" },
    { value: "100%", label: "MODULAR DESIGN", color: "text-[#bca46e]" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-transparent selection:bg-[#0c2419] selection:text-white">
      {/* Visual background accents */}
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full glow-radial-yellow opacity-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full glow-radial-emerald opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-emerald-base tracking-widest uppercase mb-3 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-base animate-pulse" />
            <span>01 . DISCOVERY</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-stone-850 text-center"
          >
            About <span className="bg-gradient-to-r from-emerald-base to-yellow-base bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <div className="h-1 w-20 bg-emerald-base/30 rounded-full mt-4" />
        </div>

        {/* Bento Grid Concept Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Box 1: Core Personal Narrative */}
          <motion.div 
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-base/5 border border-emerald-base/20 flex items-center justify-center mb-6 shadow-sm">
                <User className="w-6 h-6 text-emerald-base" />
              </div>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-stone-850 mb-4 leading-snug">
                Merging Digital Architecture With Creative Aesthetics
              </h3>
              <p className="text-stone-500 font-sans text-base leading-relaxed mb-6">
                Based in my core sandbox workspace, I am a developer who believes programming is an art form. Over the years, I've refined my skills in client-side performance, state management, and fluid animations to construct websites that represent who my clients are.
              </p>
              <p className="text-stone-550 font-sans text-base leading-relaxed mb-8">
                To me, a portfolio is not merely a grid of screenshots. It is a live application showing precise interactive flows and optimized structural details. I obsess over micro-interactions, responsive sizing rules, and high-contrast styling boundaries.
              </p>
            </div>

            {/* Sub details timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-100">
              <div className="flex gap-3">
                <Terminal className="w-5 h-5 text-emerald-base flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs text-stone-800 uppercase font-bold tracking-wider">CREATIVE DEV</h4>
                  <p className="text-xs text-stone-500 mt-1">Vite + React, Tailwind styling grids, Framer Motion transitions.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Milestone className="w-5 h-5 text-yellow-base flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs text-stone-800 uppercase font-bold tracking-wider">UI STRATEGIST</h4>
                  <p className="text-xs text-stone-500 mt-1">Figma tokens, responsive wireframes, eye-safe typography.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Box 2: Profile Accent Banner / Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Box 2A: Stats Panel */}
            <motion.div 
              className="glass-panel rounded-3xl p-8 flex-grow flex flex-col justify-center border-l-4 border-l-emerald-base relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col justify-center p-4 bg-white/60 border border-stone-200/50 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                    <span className={`text-3xl sm:text-4xl font-display font-semibold tracking-tight ${stat.color}`}>
                      {stat.value}
                    </span>
                    <span className="font-mono text-[9px] text-stone-400 tracking-wider mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Box 2B: High Tech Quote Panel */}
            <motion.div 
              className="glass-panel-yellow rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 glow-radial-yellow opacity-10 pointer-events-none" />
              
              <div className="w-10 h-10 rounded-xl bg-yellow-base/5 border border-yellow-base/20 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-yellow-base" />
              </div>
              
              <blockquote className="text-stone-600 font-mono text-xs italic leading-relaxed">
                "Digital craftsmanship lies in completing the details that no one else takes the time to construct. The spacing, the transition, the layout physics — that's where the website comes alive."
              </blockquote>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-yellow-base" />
                  <span className="font-display font-semibold text-xs tracking-wide text-stone-800 uppercase">Abhay</span>
                </div>
                <span className="font-mono text-[9px] text-[#bca46e] font-bold">CREATOR CREDENTIALS</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
