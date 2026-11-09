import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ChevronUp } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", name: "Github", color: "hover:text-emerald-base hover:border-emerald-base/40" },
    { icon: Linkedin, href: "#", name: "LinkedIn", color: "hover:text-emerald-base hover:border-emerald-base/40" },
    { icon: Twitter, href: "#", name: "Twitter", color: "hover:text-yellow-base hover:border-yellow-base/40" },
    { icon: Mail, href: "mailto:abhayop0012@gmail.com", name: "Email", color: "hover:text-emerald-base hover:border-emerald-base/40" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-dark-primary border-t border-emerald-base/10 py-12 px-6 md:px-12 mt-20 select-none overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-base/10 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-display font-bold text-lg tracking-wider text-white">
            ABHAY<span className="text-emerald-base font-mono text-xs ml-1">//</span>
          </span>
          <p className="text-gray-500 font-mono text-[9px] tracking-wide mt-1.5 leading-relaxed">
            CREATIVE PORTFOLIO ENGINE v1.2.0 • BUILT WITH HIGH PRECISION
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`w-10 h-10 rounded-xl bg-dark-secondary border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 ${link.color}`}
                aria-label={link.name}
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            );
          })}
        </div>

        {/* Right Side: Back to Top & Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 py-1.5 px-3 bg-dark-secondary/60 hover:bg-dark-secondary border border-emerald-base/10 hover:border-emerald-base/30 rounded-lg text-[10px] font-mono text-gray-400 hover:text-emerald-base cursor-pointer transition-all active:scale-95"
          >
            <span>BACK TO SURFACE</span>
            <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <p className="text-gray-500 font-sans text-[10px]">
            &copy; {new Date().getFullYear()} Abhay. All systems operational.
          </p>
        </div>

      </div>
    </footer>
  );
}
