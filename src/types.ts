export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: "frontend" | "design" | "tools";
  iconName: string; // lucide icon name representation
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  year: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string; // to make it feel awwwards (e.g. "+140% Load Speed")
  category: "web" | "design" | "experimental";
  heightClass?: string; // custom heights for masonry grids
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}
