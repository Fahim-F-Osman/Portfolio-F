import { useData } from "@/context/data/useData";
import styles from "./ContactSection.module.css";

const allowed = ["email", "linkedin", "github"];

export default function ContactSection() {
  const { data } = useData();

  return (
    <div className={styles.contactSection}>
      
      <div className={styles.linkList}>
        {data.contact
          .filter((item) => allowed.includes(item.type))
          .map((item) => {
            const Icon = item.icon;
            return(
              <div key={item.type} className={styles.linkItem}>
                
                <div className={styles.text}>
                  
                  <p> <strong>{item.label}</strong> </p>
                  <p>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  </p>
                </div>

                <div className={styles.linkIcon}>{<Icon/>}</div>
              </div>
            )
          })}
      </div>
    </div>
  );
}