import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 99, icon: 'React' },
  { name: 'TypeScript', category: 'frontend', level: 95, icon: 'FileCode' },
  { name: 'Next.js', category: 'frontend', level: 99, icon: 'Zap' },
  { name: 'Tailwind CSS', category: 'frontend', level: 99, icon: 'Palette' },
  { name: 'HTML5', category: 'frontend', level: 99, icon: 'Code' },
  { name: 'CSS3', category: 'frontend', level: 99, icon: 'Brush' },
  { name: 'JavaScript', category: 'frontend', level: 99, icon: 'Code2' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 99, icon: 'Server' },
  { name: 'Express.js', category: 'backend', level: 99, icon: 'Layers' },
  { name: 'MongoDB', category: 'backend', level: 99, icon: 'Database' },
  { name: 'PostgreSQL', category: 'backend', level: 90, icon: 'Database' },
  { name: 'REST APIs', category: 'backend', level: 99, icon: 'Link' },
  
  // Tools
  { name: 'AWS', category: 'tools', level: 90, icon: 'Cloud' },
  { name: 'Vercel', category: 'tools', level: 99, icon: 'Zap' },
  { name: 'Figma', category: 'tools', level: 90, icon: 'Figma' },
  { name: 'VS Code', category: 'tools', level: 99, icon: 'Code' },
];