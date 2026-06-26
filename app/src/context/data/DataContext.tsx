import { createContext } from "react";

export type Hero = {
  eyebrow: string;
  name: string;
  role: string;
  tagline: string;
};

type AboutHighlight = {
  stat: string;
  description: string;
};

export type SkillGroup = {
  header: string;
  tools: string[];
};

export type Project = {
  title: string;
  summary: string;
  description: string;

  image?: string;
  link?: string;

  icon?: string;

  techStack: string[];

  maxVisible: number,
};

export type Resume = {
  downloadLink: string;
  fileName: string;
};

export type ContactItem = {
  type: string;
  label: string;
  value: string;
  href: string;
  icon: string;
};

export type Section = {
  id: string;
  label: string;
  icon: string;
};

export type Data = {
  hero: Hero;
  about: string[];
  aboutHighlights: AboutHighlight[];
  skills: SkillGroup[];
  projects: Project[];
  resume: Resume;
  contact: ContactItem[];
};

export type DataContextType = {
  data: Data;
  setData: (value: Data) => void;
  sections: Section[];
};

export const DataContext = createContext<DataContextType | undefined>(undefined);