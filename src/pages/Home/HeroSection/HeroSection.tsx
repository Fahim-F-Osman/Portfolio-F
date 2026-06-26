import { useData } from "@/context/data/useData"

export default function HeroSection() {
  const { data } = useData();
  const hero = data.hero;

  return (
    <>
      <p className="eyebrow">{hero?.eyebrow}</p>

      <h1 className="name">{hero?.name}</h1>

      <p className="role">{hero?.role}</p>

      <p className="tagline">{hero?.tagline}</p>

      <div className="cta">
        <a href="#projects" className="btn primary">
          View Work →
        </a>
        <a href="#contact" className="btn secondary">
          Get in Touch
        </a>
      </div>
    </>
  );
}