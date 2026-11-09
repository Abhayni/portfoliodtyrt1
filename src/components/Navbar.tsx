import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 border-b border-yellow-base/15 backdrop-blur-xl py-4 shadow-md shadow-stone-200/5" 
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 cursor-pointer outline-none"
          >
            <span className="font-display font-bold text-xl tracking-wider text-stone-850">
              Abhay<span className="text-[#a89060] group-hover:text-emerald-base transition-colors duration-300 font-mono text-sm ml-1">//</span>
            </span>
            <div className="hidden sm:block h-1.5 w-1.5 rounded-full bg-emerald-base animate-pulse" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-1 cursor-pointer transition-colors duration-300 ${
                  activeSection === item.id ? "text-stone-900 font-bold" : "text-stone-500 hover:text-stone-800"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-base/80"
                    layoutId="activeNavLine"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Right Social/CTA: Hire Me button exactly like ref screenshot */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer bg-gradient-to-r from-[#0c2419] to-[#123023] hover:from-[#113324] hover:to-[#174130] border border-yellow-base/40 text-stone-100 font-sans font-bold tracking-wider text-[11px] px-6 py-2.5 rounded-full shadow-[0_10px_20px_rgba(12,36,25,0.15)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-700 hover:text-emerald-base p-1.5 rounded-lg border border-transparent hover:border-emerald-base/20 transition-all cursor-pointer"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-dark-primary/95 backdrop-blur-xl md:hidden flex flex-col justify-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-display text-4xl font-light tracking-wide hover:text-emerald-base cursor-pointer ${
                    activeSection === item.id ? "text-emerald-base font-semibold" : "text-gray-400"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <span className="font-mono text-lg text-emerald-base/60 mr-4">0{idx + 1}.</span>
                  {item.label}
                </motion.button>
              ))}

              {/* Social links for Mobile Grid */}
              <motion.div 
                className="flex items-center gap-6 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a href="#" className="p-3 bg-dark-secondary rounded-full border border-emerald-base/20 hover:border-emerald-base text-gray-400 hover:text-emerald-base transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-dark-secondary rounded-full border border-emerald-base/20 hover:border-emerald-base text-gray-400 hover:text-emerald-base transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:abhayop0012@gmail.com" className="p-3 bg-dark-secondary rounded-full border border-emerald-base/20 hover:border-emerald-base text-gray-400 hover:text-emerald-base transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
