import { useState, useEffect, CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowDown, Cpu, Sparkles, Layers, Code, Play, Figma, Terminal, Laptop } from "lucide-react";
// @ts-ignore
import abhayProfile from "../assets/images/abhay_profile_1779633553661.png";

interface TransparentImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

function TransparentImage({ src, alt, className, style }: TransparentImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (!active) return;
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setProcessedSrc(src);
          setLoading(false);
          return;
        }

        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        const isWhite = (r: number, g: number, b: number) => {
          return r > 210 && g > 210 && b > 210;
        };

        const visited = new Uint8Array(width * height);
        const queue: number[] = [];
        const seeds: { x: number; y: number }[] = [];

        for (let x = 0; x < width; x += Math.max(1, Math.floor(width / 20))) {
          seeds.push({ x, y: 0 });
        }
        for (let y = 0; y < height; y += Math.max(1, Math.floor(height / 20))) {
          seeds.push({ x: 0, y });
        }
        for (let y = 0; y < height; y += Math.max(1, Math.floor(height / 20))) {
          seeds.push({ x: width - 1, y });
        }

        seeds.forEach((s) => {
          const idx = s.y * width + s.x;
          const rIdx = idx * 4;
          if (isWhite(data[rIdx], data[rIdx + 1], data[rIdx + 2]) && !visited[idx]) {
            visited[idx] = 1;
            queue.push(s.x, s.y);
          }
        });

        let head = 0;
        while (head < queue.length) {
          const cx = queue[head++];
          const cy = queue[head++];

          const idx = cy * width + cx;
          const rIdx = idx * 4;

          data[rIdx + 3] = 0;

          const neighbors = [
            { nx: cx + 1, ny: cy },
            { nx: cx - 1, ny: cy },
            { nx: cx, ny: cy + 1 },
            { nx: cx, ny: cy - 1 },
          ];

          for (let i = 0; i < neighbors.length; i++) {
            const { nx, ny } = neighbors[i];
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nIdx = ny * width + nx;
              if (!visited[nIdx]) {
                const nrIdx = nIdx * 4;
                if (isWhite(data[nrIdx], data[nrIdx + 1], data[nrIdx + 2])) {
                  visited[nIdx] = 1;
                  queue.push(nx, ny);
                }
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setProcessedSrc(canvas.toDataURL());
      } catch (err) {
        console.error("Failed to make background transparent:", err);
        setProcessedSrc(src);
      }
      setLoading(false);
    };

    img.onerror = () => {
      if (!active) return;
      setProcessedSrc(src);
      setLoading(false);
    };

    return () => {
      active = false;
    };
  }, [src]);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center min-h-[300px]">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-yellow-base/20 border-t-yellow-base animate-spin" />
          <Cpu className="w-6 h-6 text-[#d9b870] animate-pulse" />
        </div>
        <span className="font-mono text-[9px] text-[#a89060] tracking-widest uppercase mt-4 animate-pulse">
          EXTRACTING SILHOUETTE...
        </span>
      </div>
    );
  }

  return (
    <motion.img
      src={processedSrc || src}
      alt={alt}
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    />
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center pt-28 pb-16 px-6 md:px-12 overflow-hidden selection:bg-[#0c2419] selection:text-white"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* HERO LEFT CONTAINER */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0">
          
          {/* Main Display Headlines matching reference layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-1"
          >
            <h1 className="text-[#c5b494] font-display font-light text-5xl sm:text-[64px] tracking-tight leading-[1] mb-1">
              Hey, I'm
            </h1>
            <h2 className="text-7xl sm:text-[98px] font-display font-extrabold tracking-tight leading-[0.9] bg-gradient-to-r from-[#d9b870] via-[#c2aa6b] to-[#8a7240] bg-clip-text text-transparent text-glow-yellow mb-7">
              Abhay
            </h2>
          </motion.div>

          {/* Subtitles: Role Specifications shown in ref */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-1 mb-10"
          >
            <p className="text-[#848278] font-sans text-lg sm:text-2xl font-light tracking-wide flex items-center justify-center lg:justify-start gap-2">
              Creative Developer - UI Designer
            </p>
            <p className="text-[#a49f8a] font-sans text-base sm:text-xl font-normal tracking-wider">
              Web Creator
            </p>
          </motion.div>

          {/* Core Call-to-action Capsules */}
          <motion.div 
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* CTA 1: Hire Me */}
            <button
              onClick={() => scrollToSection("contact")}
              className="group cursor-pointer w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#0c2419] to-[#123023] hover:from-[#113324] hover:to-[#174130] border border-yellow-base/40 text-stone-100 font-sans font-bold tracking-widest text-[11px] rounded-full shadow-[0_15px_35px_rgba(12,36,25,0.22)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase shrink-0"
            >
              Hire Me
            </button>

            {/* CTA 2: View Projects */}
            <button
              onClick={() => scrollToSection("projects")}
              className="group cursor-pointer w-full sm:w-auto px-10 py-5 bg-white/60 border border-[#b8a07c]/30 hover:border-[#9c8461]/60 text-stone-800 font-sans font-bold tracking-widest text-[11px] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.02)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase shrink-0 whitespace-nowrap"
            >
              View Projects
            </button>
          </motion.div>
        </div>

        {/* HERO RIGHT CONTAINER: EXTREMELY STUNNING SILHOUETTE LAYERING */}
        <div className="lg:col-span-6 flex justify-center items-end select-none relative h-[500px] sm:h-[660px] w-full overflow-visible">
          
          {/* Subtle Dynamic Ambient Lighting behind elements */}
          <div className="absolute inset-x-[-20%] inset-y-[-10%] pointer-events-none z-0">
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-[#d9b870]/12 rounded-full blur-[80px]" />
            <div className="absolute bottom-[10%] right-1/4 w-[280px] h-[280px] bg-emerald-base/8 rounded-full blur-[70px]" />
          </div>

          {/* 1. COMPOSITE GLOWING GOLD RING BEHIND THE HEAD */}
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[8%] sm:top-[6%] left-1/2 -translate-x-1/2 w-[270px] h-[270px] sm:w-[410px] sm:h-[410px] rounded-full border-[6px] border-[#d9cdb0]/85 bg-radial from-transparent to-[#faf9f6]/30 shadow-[0_0_60px_rgba(217,184,112,0.48),_inset_0_0_40px_rgba(217,184,112,0.15)] z-0 pointer-events-none"
          />

          {/* ORBITING TECH ICONS SYSTEM (Concentric & dynamic) */}
          <div className="absolute top-[8%] sm:top-[6%] left-1/2 -translate-x-1/2 w-[270px] h-[270px] sm:w-[410px] sm:h-[410px] pointer-events-none z-0 flex items-center justify-center">
            {/* Inner Orbit track: diameter 122% */}
            <div className="absolute w-[122%] h-[122%] rounded-full border border-emerald-500/10 animate-[spin_35s_linear_infinite] flex items-center justify-center">
              <div className="absolute top-0 bg-white/80 backdrop-blur-md border border-emerald-500/15 p-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.04)] flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-emerald-600 animate-[spin_35s_linear_infinite_reverse]" />
              </div>
              <div className="absolute bottom-0 bg-white/80 backdrop-blur-md border border-emerald-500/15 p-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.04)] flex items-center justify-center">
                <Figma className="w-3.5 h-3.5 text-emerald-600 animate-[spin_35s_linear_infinite_reverse]" />
              </div>
            </div>

            {/* Outer Orbit track: diameter 148% in reverse */}
            <div className="absolute w-[148%] h-[148%] rounded-full border border-[#d9b870]/10 animate-[spin_50s_linear_infinite_reverse] flex items-center justify-center">
              <div className="absolute left-0 bg-white/80 backdrop-blur-md border border-[#d9b870]/15 p-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.04)] flex items-center justify-center">
                <Code className="w-3.5 h-3.5 text-[#d9b870] animate-[spin_50s_linear_infinite]" />
              </div>
              <div className="absolute right-0 bg-white/80 backdrop-blur-md border border-[#d9b870]/15 p-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.04)] flex items-center justify-center">
                <Laptop className="w-3.5 h-3.5 text-[#d9b870] animate-[spin_50s_linear_infinite]" />
              </div>
            </div>
          </div>

          {/* 2. THREE-DIMENSIONAL DECORATIVE FLOATING GEMSTONES & EMBELLISHMENTS */}
          {/* Emerald diamond stone top-right of ring */}
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: 45 }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-[8%] right-[14%] sm:right-[18%] w-5 h-5 bg-gradient-to-br from-[#d9cdb0] to-yellow-base rounded-md shadow-md border border-white/40 z-20"
          />

          {/* Little green/gold stone at background */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute top-[18%] left-[16%] w-3.5 h-3.5 bg-gradient-to-br from-[#10b981]/50 to-emerald-base/80 rounded-full shadow z-0"
          />

          {/* 3. PARALLAX FLOATING CAPSULE BADGES SPECIFIED IN THE REFERENCE DESIGN */}
          {/* Code capsule at left */}
          <motion.div 
            initial={{ opacity: 0, x: -30, rotate: -20 }}
            animate={{ opacity: 1, x: 0, rotate: -15 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.08 }}
            className="absolute top-[20%] left-[8%] sm:left-[12%] z-30 flex items-center gap-1 bg-gradient-to-br from-[#0c2419] to-[#123023] border border-yellow-base/40 text-[#d9b870] font-mono text-[10px] font-bold py-2 px-3.5 rounded-xl shadow-xl hover:border-yellow-base/60 cursor-pointer"
          >
            <Code className="w-3.5 h-3.5 text-yellow-base" />
            <span>&lt;I&gt;</span>
          </motion.div>

          {/* Ai capsule at bottom-left */}
          <motion.div 
            initial={{ opacity: 0, x: -30, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 15 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.08 }}
            className="absolute bottom-[35%] left-[4%] sm:left-[8%] z-30 flex items-center justify-center bg-gradient-to-br from-[#0c2419] to-[#123023] border border-yellow-base/40 text-[#d9b870] font-mono text-[11px] font-bold py-2.5 px-4.5 rounded-xl shadow-xl hover:border-yellow-base/60 cursor-pointer"
          >
            <span>Ai</span>
          </motion.div>

          {/* Net capsule at bottom-right */}
          <motion.div 
            initial={{ opacity: 0, x: 30, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.08 }}
            className="absolute bottom-[38%] right-[3%] sm:right-[6%] z-30 flex items-center justify-center bg-gradient-to-br from-[#0c2419] to-[#123023] border border-emerald-base/20 text-[#10b981] font-mono text-[11px] font-bold py-2 px-3.5 rounded-xl shadow-xl hover:border-emerald-base/50 cursor-pointer rotate-12"
          >
            <span>N</span>
          </motion.div>

          {/* 4. DRIPPY LIGHT DUST PARTICLES */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
            <motion.div 
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[16%] right-[28%] w-2 h-2 bg-[#d9b870]/50 rounded-full"
            />
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[28%] left-[24%] w-1.5 h-1.5 bg-emerald-base/40 rounded-full"
            />
          </div>

          {/* 5. DYNAMIC SILHOUETTE STANDING FREELY IN FRONT OF THE RING */}
          <div className="absolute bottom-0 w-full h-[115%] flex justify-center items-end z-10 overflow-visible">
            <TransparentImage
              src={abhayProfile}
              alt="Abhay Portrait Presentation"
              className="w-auto h-full max-h-[105%] object-contain select-none pointer-events-none filter drop-shadow-[0_20px_50px_rgba(12,36,25,0.14)]"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* 6. "SCROLL DOWN" CONTRIVED TO GRAPHICAL REF IMAGE */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="font-sans font-medium text-[10px] text-[#8e8a76] uppercase tracking-widest mb-1.5">Scroll Down</span>
          <div className="w-5 h-5 rounded-full border border-[#8e8a76]/45 flex items-center justify-center">
            <ArrowDown className="w-2.5 h-2.5 text-[#8e8a76]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
