import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;