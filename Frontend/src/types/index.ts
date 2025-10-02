export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  type: 'freelance' | 'education'|'mobile';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}