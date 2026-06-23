import styles from "./Home.module.css";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ResumeSection from "./ResumeSection/ResumeSection";
import ContactSection from "./ContactSection/ContactSection";

export default function Home() {
  return (
    <main className={styles.container}>
      <section id="hero">
        <HeroSection/>
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="resume">
        <ResumeSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}
