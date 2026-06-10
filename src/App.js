import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0
      }}>
        <h2 style={{ color: "white", margin: 0 }}>Sivasankari M</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {["About", "Skills", "Projects", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ color: "white", textDecoration: "none",
                       fontSize: "16px" }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        textAlign: "center",
        padding: "100px 20px",
      }}>
        <h1 style={{ fontSize: "48px", margin: "0 0 10px" }}>
          Hi, I'm Sivasankari! 👋
        </h1>
        <h2 style={{ fontSize: "24px", fontWeight: "normal", margin: "0 0 20px" }}>
          Frontend Web Developer
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "600px",
                    margin: "0 auto 30px" }}>
          I build beautiful and interactive web applications using
          React and modern JavaScript.
        </p>
        <a href="#projects" style={{
          background: "white",
          color: "#667eea",
          padding: "12px 30px",
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px"
        }}>
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: "80px 40px",
        background: "#f9f9f9",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", color: "#667eea",
                     marginBottom: "20px" }}>About Me</h2>
        <p style={{ fontSize: "18px", maxWidth: "700px",
                    margin: "0 auto", lineHeight: "1.8",
                    color: "#555" }}>
          I am a passionate Frontend Developer from
          Oasys Institute of Technology. I love creating
          beautiful and user-friendly web applications.
          Currently preparing for placement drives and
          building real-world projects with React.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: "80px 40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", color: "#667eea",
                     marginBottom: "40px" }}>My Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap",
                      justifyContent: "center", gap: "15px" }}>
          {["HTML", "CSS", "JavaScript", "React",
            "Responsive Design", "Git", "GitHub"].map(skill => (
            <span key={skill} style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              padding: "10px 25px",
              borderRadius: "25px",
              fontSize: "16px",
              fontWeight: "bold"
            }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: "80px 40px",
        background: "#f9f9f9",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", color: "#667eea",
                     marginBottom: "40px" }}>My Projects</h2>
        <div style={{ display: "flex", flexWrap: "wrap",
                      justifyContent: "center", gap: "20px" }}>
          {[
            {
              title: "Weather App",
              desc: "Real-time weather app using React and OpenWeather API",
              color: "#667eea",
              link: "https://github.com/sivasankarimuthu26-create/weather-app"
            },
            {
              title: "Student Dashboard",
              desc: "Student list app with search and filter using React",
              color: "#764ba2",
              link: "https://github.com/sivasankarimuthu26-create"
            },
            {
              title: "Todo List App",
              desc: "Full CRUD Todo application with React hooks",
              color: "#f093fb",
              link: "https://github.com/sivasankarimuthu26-create"
            }
          ].map(project => (
            <div key={project.title} style={{
              background: "white",
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "30px",
              width: "280px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}>
              <div style={{
                width: "60px", height: "60px",
                background: project.color,
                borderRadius: "50%",
                margin: "0 auto 15px"
              }}/>
              <h3 style={{ color: "#333", marginBottom: "10px" }}>
                {project.title}
              </h3>
              <p style={{ color: "#666", marginBottom: "20px",
                          lineHeight: "1.6" }}>
                {project.desc}
              </p>
              <a href={project.link} target="_blank"
                rel="noreferrer" style={{
                  background: project.color,
                  color: "white",
                  padding: "8px 20px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontSize: "14px"
                }}>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: "80px 40px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Contact Me
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Feel free to reach out for opportunities!
        </p>
        <div style={{ display: "flex", justifyContent: "center",
                      gap: "20px", flexWrap: "wrap" }}>
          <a href="mailto:sivasankarimuthu2627@gmail.com"
            style={{
              background: "white",
              color: "#667eea",
              padding: "12px 25px",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "bold"
            }}>
            Email Me
          </a>
          <a href="https://github.com/sivasankarimuthu26-create"
            target="_blank" rel="noreferrer"
            style={{
              background: "transparent",
              color: "white",
              padding: "12px 25px",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "bold",
              border: "2px solid white"
            }}>
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}>
        <p>Made with ❤️ by Sivasankari Muthukrishnan</p>
      </footer>
    </div>
  );
}

export default App;