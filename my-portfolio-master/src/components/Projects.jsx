import "./Projects.css";
import { FaGithub, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website built using React.js to showcase my skills, projects, resume and contact information.",

      tech: ["React", "JavaScript", "CSS"],

      github: "https://github.com/sivasankarimuthu26-create/my-portfolio",

      live: "https://sivasankarimuthu26-create.github.io/my-portfolio",

      image: "/images/portfolio.png",

      button: "Live Demo",
    },

    {
      title: "College Alert App",

      description:
        "An Android application developed using Kotlin in Android Studio that helps students receive college announcements, notifications and important updates.",

      tech: ["Kotlin", "Android Studio", "XML"],

      github:
        "https://github.com/sivasankarimuthu26-create/CodeAlpha_CollegeAlert",

      live: "#",

      image: "/images/collegealert.png",

      button: "Download APK",
    },

    {
      title: "HabitX",

      description:
        "A modern habit tracking application that helps users build daily habits and improve productivity.",

      tech: ["React", "JavaScript", "CSS"],

      github: "https://github.com/sivasankarimuthu26-create",

      live: "#",

      image: "/images/habitx.png",

      button: "Live Demo",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <p className="project-subtitle">
        Here are some of the projects I have developed during my learning
        journey.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                {project.button === "Live Demo" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <a href="#">
                    <FaDownload /> Download APK
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;