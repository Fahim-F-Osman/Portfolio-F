import styles from "./ProjectPagination.module.css";
import getPaginationRange from "./getPaginationRange";

type Props = {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProjectPagination({ page, totalPages, setPage }: Props) {
  const pages = getPaginationRange(page, totalPages, 2);

  return (
    <div className={styles.pagination}>
      <span
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className={`${styles.navBtn} ${page === 1 ? styles.disabled : ""}`}
      >
        ← Previous
      </span>

      {pages.map((p, i) => (
        <button
          key={i}
          disabled={p === "..."}
          onClick={() => p !== "..." && setPage(p)}
          className={`${styles.pageBtn} ${
            p === "..." ? styles.dotsBtn : ""
          } ${page === p ? styles.activePage : ""}`}
        >
          {p}
        </button>
      ))}

      <span
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        className={`${styles.navBtn} ${
          page === totalPages ? styles.disabled : ""
        }`}
      >
        Next →
      </span>
    </div>
  );
}