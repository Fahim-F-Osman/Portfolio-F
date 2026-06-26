import { useData } from "@/context/data/useData";

const allowed = ["email", "linkedin", "github"];

export default function ContactSection() {
  const { data } = useData();

  return (
    <>
      <p>Contact</p>
      <h2>Get in Touch</h2>

      <p>
        Feel free to reach out for discussions around software engineering,
        frontend development, or technical ideas.
      </p>

      <div>
        {data.contact
          .filter((item) => allowed.includes(item.type))
          .map((item) => (
            <div key={item.type}>
              <p>
                <span>{item.icon} </span>
                <strong>{item.label}:</strong>{" "}
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              </p>
            </div>
          ))}
      </div>
    </>
  );
}