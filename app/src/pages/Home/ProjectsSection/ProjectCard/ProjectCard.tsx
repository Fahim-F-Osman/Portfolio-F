import styles from "./ProjectCard.module.css"

type ProjectCardProps = {
  title: string;
  summary: string;
  description: string;
  visibleTech: string[];
  hiddenCount: number;
};

export default function ProjectCard({
  title,
  summary,
  description,
  visibleTech,
  hiddenCount,
}: ProjectCardProps) {
  return (
    <div className={styles.content}>

      <div className={styles.cardTop}>
        <div className={styles.headerGroup}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.summary}>{summary}</h2>
        </div>
        <p className={styles.description}> {description} </p>
      </div>

      <div className={styles.techStack}>
        {visibleTech.map((tech, index) => (
          <span
            key={index}
            className={styles.techTag}
          >
            {tech}
          </span>
        ))}
        {hiddenCount > 0 && (
          <span className={styles.techTag}>
            +{hiddenCount}
          </span>
        )}

      </div>
      
    </div>
  )
}
