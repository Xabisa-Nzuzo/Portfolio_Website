export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'AI/ML' | 'Web Development' | 'Data Science';
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export interface Skill {
  name: string;
  category: 'Programming' | 'AI/ML' | 'Frameworks' | 'Tools' | 'Cloud' | 'Databases';
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  years: number;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}