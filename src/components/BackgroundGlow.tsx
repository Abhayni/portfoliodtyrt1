import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "motion/react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export default function BackgroundGlow() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Springs for smooth mouse follow effect
  const mouseX = useSpring(0, { stiffness: 60, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 60, damping: 25 });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, isMobile]);

  // High-performance canvas particle system
  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const count = isMobile ? 25 : 65;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const colors = [
        "rgba(16, 185, 129, 0.25)", // Emerald
        "rgba(234, 179, 8, 0.2)",    // Yellow
        "rgba(16, 185, 129, 0.12)", // Dim Emerald
      ];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          size: Math.random() * 2.2 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse avoidance/attraction interaction
        if (mouseRef.current.x !== -1000) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 130) {
            // Push slightly away
            const force = (130 - distance) / 130;
            p.x += (dx / distance) * force * 1.5;
            p.y += (dy / distance) * force * 1.5;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color.includes("234") ? "rgba(234, 179, 8, 0.4)" : "rgba(16, 185, 129, 0.4)";
        ctx.shadowBlur = p.size > 1.8 ? 4 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Simple network lines tracking (only on non-mobile grids)
      if (!isMobile) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const pi = particles[i];
            const pj = particles[j];
            const dx = pi.x - pj.x;
            const dy = pi.y - pj.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              const alpha = (100 - dist) / 100 * 0.045;
              ctx.beginPath();
              ctx.moveTo(pi.x, pi.y);
              ctx.lineTo(pj.x, pj.y);
              ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, isMobile]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-dark-primary select-none">
      {/* Dynamic Grid */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Interactive Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Cyber Noise */}
      <div className="absolute inset-0 noise-bg" />

      {/* Static Glows (Fallback and Base Atmosphere) */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] rounded-full glow-radial-emerald opacity-[0.25]" />
      <div className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] max-w-[550px] rounded-full glow-radial-yellow opacity-[0.18]" />
      <div className="absolute top-[40%] right-[15%] w-[35vw] h-[35vw] max-w-[400px] rounded-full glow-radial-emerald opacity-[0.12]" />

      {/* Mouse Follow Glow (Only on Desktop) */}
      {!isMobile && (
        <>
          {/* Emerald follower */}
          <motion.div
            className="absolute w-[28vw] h-[28vw] max-w-[350px] -ml-[14vw] -mt-[14vw] rounded-full opacity-35 bg-radial from-emerald-base/20 to-transparent blur-3xl"
            style={{
              x: mouseX,
              y: mouseY,
            }}
          />
          {/* Yellow follower slightly offset for cool dual-color effect */}
          <motion.div
            className="absolute w-[20vw] h-[20vw] max-w-[250px] -ml-[10vw] -mt-[10vw] rounded-full opacity-20 bg-radial from-yellow-base/15 to-transparent blur-2xl"
            style={{
              x: mouseX,
              y: mouseY,
            }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 20,
            }}
          />
        </>
      )}

      {/* Scanline overlay for high-tech CRT vibe */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-emerald-base/[0.005] to-transparent bg-[size:100%_4px] opacity-30" />
    </div>
  );
}
