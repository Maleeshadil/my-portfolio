export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category:string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  verificationUrl?: string;
  credentialID: string | null;
  imageUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}


