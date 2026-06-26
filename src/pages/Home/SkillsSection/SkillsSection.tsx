import { useData } from "@/context/data/useData";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  const { data } = useData();

  const skills = data.skills;

  return (
    <>
      <div>
        <p>Skills</p>
        <h1>Technologies & Tools</h1>
      </div>

      <div className={styles.cardList}>
        {skills.map((group) => (
          <div key={group.header} className={styles.card}>
            <h3 className={styles.cardTitle}>{group.header}</h3>

            <div className={styles.tools}>
              {group.tools.map((tool) => (
                <p key={tool} className={styles.tool}>
                  {tool}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}