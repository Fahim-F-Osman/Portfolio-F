import { useData } from "@/context/data/useData";

export default function AboutSection() {
  const { data } = useData();

  const about = data.about;

  return (
    <>

      <div className="about-header">
        <p className="eyebrow">About</p>
        <h1>Who I Am</h1>
      </div>

      <div className="about-content">
        {about?.map((text, index) => (
          <p key={index} className="text">
            {text}
          </p>
        ))}
      </div>

    </>
  );
}