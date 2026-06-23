import { useData } from "../../context/data/useData";
import styles from "./Home.module.css"

export default function Home() {
  const { data } = useData();
  return (
    <main className={styles.container}>
      This is the Home Page.

      <p>This is context data: {data}</p>

      <section id="hero">Hero Section</section>
      <section id="about">About Section</section>
      <section id="skills">Skills Section</section>
      <section id="projects">Projects Section</section>
      <section id="resume">Resume Section</section>
      <section id="contact">Contact Section</section>

    </main>
  )
}
