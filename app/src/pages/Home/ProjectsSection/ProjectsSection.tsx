import { useData } from "@/context/data/useData";
import styles from "./ProjectsSection.module.css";
import { useState } from "react";
import ProjectPagination from "./ProjectPagination/ProjectPagination";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function ProjectsSection() {
  const { data } = useData();

  const [page, setPage] = useState(1);
  const pageSize = 2;

  const projects = data.projects;

  const totalPages = Math.ceil(projects.length / pageSize);

  const paginatedProjects = projects.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectList}>
        {paginatedProjects.map((project) => {
          const maxVisibleTech = project.maxVisible ?? 3;

          const visibleTech = project.techStack.slice(0, maxVisibleTech);
          const hiddenCount = project.techStack.length - maxVisibleTech;

          return (
            <article key={project.title} className={styles.eachProject}>
              <ProjectCard
                title={project.title}
                summary={project.summary}
                description={project.description}
                visibleTech={visibleTech}
                hiddenCount={hiddenCount}
              />

              <div className={styles.footer}>
                <span className={styles.footerLabel}>View Details</span>
                <span className={styles.arrow}>→</span>
              </div>
            </article>
          );
        })}
      </div>

      <ProjectPagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}