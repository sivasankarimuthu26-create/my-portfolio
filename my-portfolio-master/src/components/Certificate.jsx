import "./Certificate.css";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certificate() {
  const certificates = [
    {
      title: "HTML & CSS",
      issuer: "Spoken Tutorial - IIT Bombay",
      year: "2025",
      link: "#",
    },
    {
      title: "JavaScript",
      issuer: "Spoken Tutorial - IIT Bombay",
      year: "2025",
      link: "#",
    },
    {
      title: "React.js",
      issuer: "Self Learning",
      year: "2026",
      link: "#",
    },
    {
      title: "Node.js",
      issuer: "Self Learning",
      year: "2026",
      link: "#",
    },
  ];

  return (
    <section className="certificate" id="certificate">
      <h2>Certifications</h2>

      <p>
        Courses and certifications that strengthened my web development skills.
      </p>

      <div className="certificate-container">
        {certificates.map((item, index) => (
          <div className="certificate-card" key={index}>
            <div className="left">
              <FaCertificate className="icon" />
            </div>

            <div className="middle">
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
            </div>

            <div className="right">
              <span>{item.year}</span>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;