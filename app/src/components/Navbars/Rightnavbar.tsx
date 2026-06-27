import { useData } from "@/context/data/useData";
import styles from "./Navbar.module.css";

type ContactItem = {
  type: string;
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType;
};

export default function RightNavbar() {
  const { data } = useData();
  const contact = data.contact;

  return (
    <nav className={styles.rightNav} aria-label="Social links">
      {contact.map((each: ContactItem) => {
        const isExternal = each.href.startsWith("http");
        const Icon = each.icon;
        return (
          <a
            key={each.label}
            href={each.href}
            className={styles.iconBtn}
            aria-label={each.label}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <span aria-hidden="true">{<Icon />}</span>
            <span className={styles.tooltip}>{each.label}</span>
          </a>
        );
      })}
    </nav>
  );
}