import { useData } from "@/context/data/useData"
import styles from "./HeroSection.module.css"

export default function HeroSection() {
  const { data } = useData();
  const hero = data.hero;

  return (
    <>
      <h1 className={styles.name}>{hero?.name}</h1>

      <p className={styles.role}>{hero?.role}</p>

      <p className={styles.tagline}>{hero?.tagline}</p>

      <div className={styles.cta}>
        <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
          View Work →
        </a>
        <a href="#contact" className={`${styles.btn} ${styles.secondary}`}>
          Get in Touch
        </a>
      </div>
    </>
  );
}