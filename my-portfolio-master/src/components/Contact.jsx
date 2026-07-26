import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>

      <p className="contact-subtitle">
        I'm actively looking for Full Stack Developer opportunities. Feel free
        to contact me.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>sivasankarimuthu26@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>+918754293069</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Trichy, Tamil Nadu</p>
        </div>

      </div>

      <div className="social-links">

        <a
          href="https://github.com/sivasankarimuthu26-create"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="linkedin.com/in/sivasankarim-webdev
"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:sivasankarimuthu26@gmail.com">
          <FaEnvelope />
        </a>

      </div>
    </section>
  );
}

export default Contact;