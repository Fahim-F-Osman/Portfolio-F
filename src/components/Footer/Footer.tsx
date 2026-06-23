import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="copyright">
        © {new Date().getFullYear()} <span>NAME TO BE ADDED WHEN DATA CONTEXT IS IMPLEMENTED</span>
      </p>
      <p className="credit">
        Built with React
      </p>
    </footer>
  )
}
