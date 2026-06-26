import { useData } from "@/context/data/useData";

export default function ResumeSection() {
  const { data } = useData();

  return (
    <section id="resume">
      <p>Resume</p>

      <h2>Download My CV</h2>

      <p>
        A one-page summary of my skills, education, and experience.
      </p>

      <a
        href={data.resume.downloadLink}
        download={data.resume.fileName}
      >
        Download Resume ↓
      </a>
    </section>
  );
}