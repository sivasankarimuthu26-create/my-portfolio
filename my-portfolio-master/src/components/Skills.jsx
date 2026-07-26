import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "Advanced",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "Intermediate",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      level: "Intermediate",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "Beginner",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: "Beginner",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: "Learning",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "Intermediate",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: "Intermediate",
    },
    {
      name: "VS Code",
      icon: <VscVscode />,
      level: "Daily Use",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      level: "Learning",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <p className="section-subtitle">
          Technologies I use to build responsive and modern web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.name}</h3>

              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;