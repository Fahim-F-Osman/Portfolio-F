import { useData } from "@/context/data/useData";
import styles from "./ResumeSection.module.css";

export default function ResumeSection() {
  const { data } = useData();

  return (
    <div className={styles.resumeContainer}>
      <p className={styles.eyebrow}>Resume</p>

      <h2 className={styles.header}>Download My CV</h2>

      <p className={styles.description}>
        A one-page summary of my skills, education, and experience.
      </p>

      <a
        className={styles.downloadBtn}
        href={data.resume.downloadLink}
        download={data.resume.fileName}
      >
        Download Resume ↓
      </a>
    </div>
  );
}