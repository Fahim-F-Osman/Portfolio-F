import {
  FaGithub, FaLinkedin, FaEnvelope, FaFileAlt,
  FaHome, FaUser, FaFolderOpen, FaLaptopCode,
  FaJava, FaPython, FaHtml5, FaCss3Alt,
  FaReact, FaNodeJs, FaDocker, FaGitAlt,
  FaAws, FaCode, FaServer, FaTasks
} from "react-icons/fa";

import {
  SiJavascript, SiNextdotjs, SiExpress,
  SiFlask, SiMysql, SiSqlite, SiMongodb,
  SiPostgresql, SiPayloadcms,
} from "react-icons/si";

import { SiLeetcode } from "react-icons/si";

export const maxVisibleTechStack = 4;

export const sections = [
  { id: "hero", icon: FaHome, label: "Home" },
  { id: "about", icon: FaUser, label: "About" },
  { id: "skills", icon: FaLaptopCode, label: "Skills" },
  { id: "projects", icon: FaFolderOpen, label: "Projects" },
  { id: "resume", icon: FaFileAlt, label: "Resume" },
  { id: "contact", icon: FaEnvelope, label: "Contact" },
];

export const PALETTES = [
  { id: "default", name: "Default" },
  { id: "crimson", name: "Crimson" },
  { id: "emerald", name: "Emerald" },
  { id: "amber", name: "Amber" },
  { id: "rose", name: "Rose" },
  { id: "ocean", name: "Ocean" },
];

export const data = {
  hero: {
    eyebrow: "Portfolio · 2024",
    name: "First-Name Last-Name",
    role: "Software Engineering Student",
    tagline:
      "I enjoy building modular, service-oriented software that is easy to maintain and evolve.",
  },
  about: [
    "I’m a Software Engineering student focused on full-stack development. \
    I enjoy building applications that are simple, modular, and easy to maintain.",
    "I prefer breaking systems into clean, service-oriented components and keeping codebases structured and scalable. \
    My approach is influenced by simplicity, maintainability, and clarity over complexity.",
    "I’ve worked on personal projects such as quiz games, end-to-end encrypted messaging applications, and basic e-commerce platforms,\
      focusing on making them functional, clean, and easy to reason about.",
    "I focus on keeping software simple, smooth, and easy to maintain as it grows.",
  ],
  aboutHighlights: [
    { stat: "4th", description: "Year CS Student" },
    { stat: "Built", description: "Multiple Personal Projects" },
    { stat: "Learning", description: "Building Scalable Web Apps" },
  ],
  skills: [
    {
      header: "Languages",
      tools: [
        { name: "C", icon: FaCode },
        { name: "Java", icon: FaJava },
        { name: "Python", icon: FaPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
      ],
    },

    {
      header: "Frontend",
      tools: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
      ],
    },

    {
      header: "Backend",
      tools: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "Flask", icon: SiFlask },
        { name: "REST APIs", icon: FaServer },
      ],
    },

    {
      header: "Databases",
      tools: [
        { name: "MySQL", icon: SiMysql },
        { name: "SQLite", icon: SiSqlite },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },

    {
      header: "DevOps & Cloud",
      tools: [
        { name: "Git", icon: FaGitAlt },
        { name: "Docker", icon: FaDocker },
        { name: "AWS", icon: FaAws },
      ],
    },

    {
      header: "Tools & Practices",
      tools: [
        { name: "Payload CMS", icon: SiPayloadcms },
        { name: "Agile", icon: FaTasks },
      ],
    },
  ],
  projects: [
    {
      title: "E2EE Messaging App",
      summary: "A real-time messaging application with end-to-end encryption.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis nam saepe! Excepturi esse, qui, illum assumenda sequi tenetur autem atque deserunt aspernatur officiis eum itaque. Vel assumenda adipisci perspiciatis. AGAIN: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis nam saepe! Excepturi esse, qui, illum assumenda sequi tenetur autem atque deserunt aspernatur officiis eum itaque. Vel assumenda adipisci perspiciatis.",
      techStack: ["Content System", "Amazon AWS", "React", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB", "Node.js", "MongoDB"],
      maxVisible: maxVisibleTechStack,
    },

    {
      title: "Quiz Game",
      summary: "A multiplayer quiz platform.",
      description: "... Some Description",
      techStack: ["React", "PostgreSQL"],
      maxVisible: maxVisibleTechStack,
    },

    {
      title: "E-Commerce Website",
      summary: "An online store.",
      description: "... Some Description",
      techStack: ["React", "Express.js"],
      maxVisible: maxVisibleTechStack,
    },
  ],
  resume: {
    downloadLink: "/resume.pdf",
    fileName: "RESUME_FILE NAME",
  },

  contact: [
    {
      type: "resume",
      label: "Resume",
      value: "Resume",
      href: "#",
      icon: FaFileAlt,
    },
    {
      type: "leetcode",
      label: "LeetCode",
      value: "LeetCode",
      href: "#",
      icon: SiLeetcode,
    },
    {
      type: "email",
      label: "Email",
      value: "alex.morgan@university.edu",
      href: "mailto:alex.morgan@university.edu",
      icon: FaEnvelope,
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/username",
      href: "https://github.com/username",
      icon: FaGithub,
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/username",
      href: "https://linkedin.com/in/username",
      icon: FaLinkedin,
    },
  ]
};

