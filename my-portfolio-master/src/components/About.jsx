import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>

        <p>
          Hello! I'm <strong>Sivasankari M</strong>, a Final-Year Computer
          Science Engineering student passionate about Full Stack Web
          Development.
        </p>

        <p>
          I enjoy building responsive and user-friendly web applications using
          HTML, CSS, JavaScript, React, Node.js and SQL.
        </p>

        <p>
          I am continuously improving my Data Structures & Algorithms,
          problem-solving skills, and modern web technologies to become a
          professional Full Stack Developer.
        </p>

        <div className="about-info">
          <div>
            <h3>Education</h3>
            <p>B.E. Computer Science Engineering</p>
          </div>

          <div>
            <h3>Current Status</h3>
            <p>Final Year Student</p>
          </div>

          <div>
            <h3>Career Goal</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;