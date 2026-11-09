import { Skill, Project, Service } from "./types";
// @ts-ignore
import riftMusicImg from "./assets/images/rift_music_dashboard_1779814766867.png";

export const SKILLS: Skill[] = [
  // Core Skills
  { name: "HTML", level: 98, category: "frontend", iconName: "Code" },
  { name: "CSS", level: 96, category: "frontend", iconName: "Wind" },
  { name: "JavaScript", level: 93, category: "frontend", iconName: "Shield" },
  { name: "Python", level: 90, category: "frontend", iconName: "Terminal" },
  
  // Design & Creative Stack
  { name: "UI Design", level: 94, category: "design", iconName: "Layers" },
  { name: "Photoshop", level: 86, category: "design", iconName: "Image" },
  { name: "Figma", level: 92, category: "design", iconName: "Figma" },
];

export const PROJECTS: Project[] = [
  {
    id: "rift-music",
    title: "Rift Music",
    description: "Rift Music is a modern high-performance Discord music bot platform built for seamless HD audio streaming, autoplay, queue management, playlist systems, interactive controls, and premium music experience.",
    tech: ["Python", "Discord.py", "Wavelink", "Lavalink", "React", "Tailwind CSS"],
    role: "Lead Platform Architect",
    year: "2026",
    image: riftMusicImg,
    featured: true,
    metrics: "99.9% Uptime Verified",
    githubUrl: "https://github.com",
    demoUrl: "https://rift-music-740957167610.asia-southeast1.run.app",
    category: "web",
    heightClass: "h-72"
  },
  {
    id: "aetherial",
    title: "Aetherial Workspace",
    description: "An advanced web-based 3D workspace and component dashboard, engineered with custom-glass interfaces, reactive particles, and a fluid layout.",
    tech: ["React 19", "Vite", "Motion/React", "Tailwind CSS"],
    role: "Lead Creative Developer",
    year: "2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    featured: true,
    metrics: "CSS Design Award Nominee",
    githubUrl: "#",
    demoUrl: "#",
    category: "web",
    heightClass: "h-64"
  },
  {
    id: "quantum",
    title: "Quantum Flux Analytics",
    description: "A dark-themed high-density analytics module and stream visualizer tracking sub-second network events with custom Recharts. Minimalist yet comprehensive.",
    tech: ["TypeScript", "Recharts", "Tailwind CSS", "React"],
    role: "UI Engineer",
    year: "2025",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    featured: true,
    metrics: "0.15s LCP Speed",
    githubUrl: "#",
    demoUrl: "#",
    category: "experimental",
    heightClass: "h-[360px]"
  },
  {
    id: "helion-identity",
    title: "Helion Brand Identity",
    description: "An elegant interactive brand guide with digital tokens, variable typography pairings, dynamic contrast calculation, and customized overlay panels.",
    tech: ["Figma Design", "Layouting", "Color Science"],
    role: "Identity Lead",
    year: "2026",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    featured: true,
    metrics: "99.8% Client Rating",
    githubUrl: "#",
    demoUrl: "#",
    category: "design",
    heightClass: "h-[290px]"
  },
  {
    id: "synthetix",
    title: "Synthetix Token Editor",
    description: "A premium designer tool that generates futuristic tailwind utility configurations on the fly. Fits perfectly in the browser workspace.",
    tech: ["React JS", "Tailwind v4", "Lucide Icons", "LocalStorage"],
    role: "Sole Creator",
    year: "2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    featured: true,
    metrics: "+40% Design Velocity",
    githubUrl: "#",
    demoUrl: "#",
    category: "web",
    heightClass: "h-72"
  },
  {
    id: "nebula-vision",
    title: "Nebula CSS Shader",
    description: "An abstract CSS animation editor creating beautiful flowing geometric patterns, color noise filters, and glowing responsive backgrounds.",
    tech: ["HTML5 Canvas", "Tailwind CSS", "Motion API", "Vite"],
    role: "Creative Developer",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    featured: false,
    metrics: "4.8k GitHub Stars",
    githubUrl: "#",
    demoUrl: "#",
    category: "experimental",
    heightClass: "h-[320px]"
  },
  {
    id: "vortex-ux",
    title: "Vortex Motion Wireframe",
    description: "Highly polished user interaction schemas built to highlight reactive physics and spring-bouncy drag actions on multiple axes.",
    tech: ["Framer Motion", "Figma Design", "Physics Design"],
    role: "Interaction Prototyper",
    year: "2026",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    featured: false,
    metrics: "Awwwards HM nominee",
    githubUrl: "#",
    demoUrl: "#",
    category: "design",
    heightClass: "h-60"
  }
];

export const SERVICES: Service[] = [
  {
    id: "creative-dev",
    title: "Immersive Frontend Architectures",
    description: "Authoring high-fidelity, high-performance web realities using the latest standards. Beautiful structural markup paired with fluid, bulletproof client-side state.",
    iconName: "Code",
    features: ["Sub-second serverless response proxying", "Extensive Framer Motion state chains", "Advanced responsive grid strategies", "Fully custom CSS shader wrappers"]
  },
  {
    id: "ui-ux",
    title: "Futuristic Visual Systems",
    description: "Converting complicated feature trees into elegant, high-contrast dark wireframes. Design systems emphasizing spatial rhythm, distinct typography, and subtle micro-shadowing.",
    iconName: "Layers",
    features: ["Awwwards-inspired modern layouting", "Advanced interactive component trees", "Figma library creation & tokens", "Eye-safe twilight color balancing"]
  },
  {
    id: "motion",
    title: "High-Interaction Concepts",
    description: "Enriching application user journeys through playful micro-states, scroll triggers, magnetic actions, bouncy hover physics, and customized overlay panels.",
    iconName: "Sparkles",
    features: ["Bouncy magnetic link anchors", "Custom multi-axis 3D mouse card tilts", "Interactive noise and canvas overlays", "Frictionless spring transitions"]
  }
];
