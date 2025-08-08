import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 95, icon: 'React' },
  { name: 'TypeScript', category: 'frontend', level: 85, icon: 'FileCode' },
  { name: 'Next.js', category: 'frontend', level: 88, icon: 'Zap' },
  { name: 'Tailwind CSS', category: 'frontend', level: 92, icon: 'Palette' },
  { name: 'HTML5', category: 'frontend', level: 95, icon: 'Code' },
  { name: 'CSS3', category: 'frontend', level: 90, icon: 'Brush' },
  { name: 'JavaScript', category: 'frontend', level: 93, icon: 'Code2' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 90, icon: 'Server' },
  { name: 'Express.js', category: 'backend', level: 88, icon: 'Layers' },
  { name: 'MongoDB', category: 'backend', level: 85, icon: 'Database' },
  { name: 'REST APIs', category: 'backend', level: 92, icon: 'Link' },
  
  // Tools
  { name: 'AWS', category: 'tools', level: 75, icon: 'Cloud' },
  { name: 'Vercel', category: 'tools', level: 85, icon: 'Zap' },
  { name: 'Figma', category: 'tools', level: 70, icon: 'Figma' },
  { name: 'VS Code', category: 'tools', level: 95, icon: 'Code' },
];