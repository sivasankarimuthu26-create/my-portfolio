import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hello">HELLO 👋 I'M</p>

        <h1>
          Sivasankari <span>Muthukrishnan</span>
        </h1>

        <h2>Aspiring Full Stack Developer</h2>

        <p className="hero-text">
          Final-Year Computer Science Engineering student passionate about
          building responsive web applications using React, JavaScript,
          Node.js and SQL.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn1">
            View Projects
          </a>

          <a
            href="resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn2"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="code-card">
          <pre>
{`const developer = {
 name: "Sivasankari",
 role: "Full Stack Developer",
 skills: [
   "React",
   "JavaScript",
   "Node.js",
   "SQL"
 ],
 status: "Available for Hire"
};`}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;