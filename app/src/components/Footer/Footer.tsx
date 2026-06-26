import styles from "./Footer.module.css";
import { useData } from "@/context/data/useData";

export default function Footer() {
  const { data } = useData();

  return (
    <footer className={styles.footer}>
      <p className="copyright">
        © {new Date().getFullYear()} <span>{data.hero.name}</span>
      </p>
      <p className="credit">
        Built with React
      </p>
    </footer>
  )
}
