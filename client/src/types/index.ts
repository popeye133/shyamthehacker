export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  color: "terminal" | "neon-blue" | "neon-purple";
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: "terminal" | "neon-blue" | "neon-purple";
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  status: string;
  color: "terminal" | "neon-blue" | "neon-purple";
  duties: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  color: "terminal" | "neon-blue" | "neon-purple";
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  action?: (...args: string[]) => string;
}

export interface TerminalOutput {
  text: string;
  isCommand?: boolean;
}

export interface FileNode {
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FileNode[];
}
