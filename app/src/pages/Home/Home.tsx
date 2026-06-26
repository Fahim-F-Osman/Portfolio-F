import styles from "./Home.module.css";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ResumeSection from "./ResumeSection/ResumeSection";
import ContactSection from "./ContactSection/ContactSection";

import { useData } from "@/context/data/useData";
import LeftNavbar from "@/components/Navbars/Leftnavbar";


export default function Home() {
  const { data, sections } = useData();
  const hero = data.hero;

  return (
    <main className={styles.container}>
      <aside className={styles.leftNav}>
        <LeftNavbar sections={sections}/>
      </aside>

      <section id="hero" className={styles.hero}>
        <p className={styles.eyebrow}>{hero?.eyebrow}</p>
        <HeroSection />
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>About</p>
          <h1>Who I Am</h1>
        </div>
        <AboutSection />
      </section>

      <section id="skills" className={styles.skills}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Skills</p>
          <h1>Technologies &amp; Tools</h1>
        </div>
        <SkillsSection />
      </section>

      <section id="projects" className={styles.projects}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Projects</p>
          <h1>Selected Work</h1>
        </div>
        <ProjectsSection />
      </section>

      <section id="resume" className={styles.resume}>
        <ResumeSection />
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Contact</p>
          <h1>Get in Touch</h1>
          <p className={styles.subtext}>
            Feel free to reach out for discussions around software engineering,
            frontend development, or technical ideas.
          </p>
        </div>
        <ContactSection />
      </section>

      <aside className={styles.rightNav}>Right Nav</aside>
    </main>
  );
}