import { useData } from "@/context/data/useData";
import styles from "./ProjectsSection.module.css"

export default function ProjectsSection() {
  const { data } = useData();

  return (
    <>
      <p>Projects</p>
      <h2>Selected Work</h2>

      <div className={styles.cardList}>
        {data.projects.map((project) => (
          <article key={project.title}>
            <h3>
              {project.icon} {project.title}
            </h3>

            <p>{project.summary}</p>

            <p>{project.description}</p>

            <div>
              {project.techStack.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}