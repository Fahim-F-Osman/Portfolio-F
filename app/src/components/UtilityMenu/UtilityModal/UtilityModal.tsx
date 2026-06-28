import styles from "./UtilityModal.module.css";
import { RxCross1 } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useData } from "@/context/data/useData";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
};


export default function Modal({ open, onClose, title }: ModalProps) {
  const { data } = useData();
  const contacts = data.contact;

  if (!open) return null;
  
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>{title? title : "MODAL"}</h1>
          <button className={styles.closeButton} onClick={onClose}><RxCross1 /></button>
        </div>
        <div className={styles.content}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              className={styles.contactModalContent}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.left}>
                <span className={styles.icon}>
                  <contact.icon />
                </span>
                <span>{contact.label}</span>
              </span>

              <span className={styles.right}>
                <FaExternalLinkAlt />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}