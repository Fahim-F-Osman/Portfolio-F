import { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.css";

export interface NavSection {
  id: string;
  label: string;
  icon: React.ComponentType;
}

interface LeftNavbarProps {
  sections: NavSection[];
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function LeftNavbar({ sections }: LeftNavbarProps) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);

        if (visibleEntries.length === 0) return;

        // pick most visible section
        const best = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        if (best?.target?.id) {
          setActive(best.target.id);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = sections.findIndex((s) => s.id === active);
  const activeLabel = sections[activeIndex]?.label ?? "";

  const goPrev = useCallback(() => {
    const prev = sections[activeIndex - 1];
    if (prev) {
      setActive(prev.id);
      scrollTo(prev.id);
    }
  }, [activeIndex, sections]);

  const goNext = useCallback(() => {
    const next = sections[activeIndex + 1];
    if (next) {
      setActive(next.id);
      scrollTo(next.id);
    }
  }, [activeIndex, sections]);

  const handleSelect = (id: string) => {
    setActive(id);
    scrollTo(id);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className={styles.leftNav} aria-label="Section navigation">
        {sections.map(({ id, label, icon }) => {
          const Icon = icon;

          return (
            <button
              key={id}
              className={`${styles.iconBtn} ${active === id ? styles.active : ""}`}
              onClick={() => {
                setActive(id);
                scrollTo(id);
              }}
              aria-label={label}
              title={label}
            >
              <Icon aria-hidden="true" />
              <span className={styles.tooltip}>{label} ›</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile pill nav */}
      <nav className={styles.pillNav} aria-label="Section navigation">
        <div className={styles.pill}>
          <button
            className={styles.pillArrow}
            onClick={goPrev}
            disabled={activeIndex <= 0}
            aria-label="Previous section"
          >
            ‹
          </button>

          <button
            className={styles.pillLabel}
            onClick={() => setDropdownOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            {activeLabel}
            <span className={styles.pillCaret}>
              {dropdownOpen ? "▲" : "▼"}
            </span>
          </button>

          <button
            className={styles.pillArrow}
            onClick={goNext}
            disabled={activeIndex >= sections.length - 1}
            aria-label="Next section"
          >
            ›
          </button>
        </div>

        {dropdownOpen && (
          <ul className={styles.pillDropdown} role="listbox">
            {sections.map(({ id, label }) => (
              <li
                key={id}
                role="option"
                aria-selected={active === id}
                tabIndex={0}
                className={`${styles.pillOption} ${
                  active === id ? styles.pillOptionActive : ""
                }`}
                onClick={() => handleSelect(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleSelect(id);
                  }
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}