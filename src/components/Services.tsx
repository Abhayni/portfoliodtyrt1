import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Code, Layers, Sparkles, Check } from "lucide-react";

const IconMap: { [key: string]: any } = {
  Code,
  Layers,
  Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent selection:bg-[#0c2419] selection:text-white">
      {/* Glow backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full glow-radial-emerald opacity-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full glow-radial-yellow opacity-10 pointer-events-none" />

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
            <span>04 . EXPERTISE</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-stone-850 text-center"
          >
            My Craft & <span className="bg-gradient-to-r from-emerald-base to-yellow-base bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <div className="h-1 w-20 bg-emerald-base/30 rounded-full mt-4" />
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {SERVICES.map((service, idx) => {
            const IconComponent = IconMap[service.iconName] || Code;
            const borderColors = idx === 1 ? "border-l-yellow-base group-hover:border-yellow-base/40" : "border-l-emerald-base group-hover:border-emerald-base/40";
            const iconGlow = idx === 1 ? "bg-yellow-base/5 border-yellow-base/20 hover:border-yellow-base/50 text-yellow-base" : "bg-emerald-base/5 border-emerald-base/20 hover:border-emerald-base/50 text-emerald-base";
            
            return (
              <motion.div
                key={service.id}
                className={`group relative w-full max-w-[380px] min-h-[460px] glass-panel rounded-[28px] p-8 flex flex-col justify-between overflow-hidden border-l-4 ${borderColors} hover:shadow-xl hover:shadow-stone-200/45 transition-all duration-500`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
              >
                {/* Visual grid overlay */}
                <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none" />

                <div>
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${iconGlow} shadow-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] text-[#b09d7c] tracking-widest font-bold uppercase">
                      SERVICE // 0{idx + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-medium text-2xl text-stone-850 group-hover:text-[#b8954e] tracking-wide transition-colors mb-4 leading-snug">
                    {service.title}
                  </h3>

                  {/* Service Core Description */}
                  <p className="text-stone-550 font-sans text-xs leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Service Specs Checklist */}
                <div>
                  <h4 className="font-mono text-[9px] text-[#bca06a] font-bold tracking-wider uppercase mb-3">
                    Deliverable Parameters:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-2 items-start">
                        <div className="w-4.5 h-4.5 rounded-full bg-emerald-base/5 border border-emerald-base/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-base animate-pulse" />
                        </div>
                        <span className="text-stone-600 font-sans text-[11px] leading-relaxed select-none">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-emerald-base/5 border border-emerald-base/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
