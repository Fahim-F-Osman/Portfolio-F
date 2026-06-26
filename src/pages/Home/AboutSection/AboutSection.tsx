import { useData } from "@/context/data/useData";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const { data } = useData();

  const about = data.about;
  const highlights = data.aboutHighlights;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {about?.map((text, index) => (
          <p key={index} className={styles.text}>
            {text}
          </p>
        ))}
      </div>

      <div className={styles.highlights}>
        {highlights.map(({ stat, description }) => (
          <div key={stat} className={styles.highlight}>
            <span className={styles.highlightStat}>{stat}</span>
            <span className={styles.highlightDescription}>{description}</span>
          </div>
        ))}
      </div>

    </div>
  );
}