import React from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import Education from "./components/Education.tsx";
import Contact from "./components/Contact.tsx";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
    </>
  );
};

export default App;
