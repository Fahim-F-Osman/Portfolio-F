import { useData } from "@/context/data/useData";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  const { data } = useData();

  const skills = data.skills;

  return (
    <div className={styles.cardList}>
      {skills.map((group) => (
        <div key={group.header} className={styles.card}>
          <div className={styles.header}>
            <h3 className={styles.title}>{group.header}</h3>
          </div>

          <div className={styles.tools}>
            {group.tools.map(({ name, icon: Icon }) => (
              <div key={name} className={styles.tool}>
                <span className={styles.icon}><Icon/></span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}