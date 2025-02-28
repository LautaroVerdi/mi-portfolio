import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

    const sections = ["hero", "projects", "education", "contact"];
    let currentSection = "";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();

        // Asegurar que secciones pequeñas sean detectadas
        if (
          rect.top <= window.innerHeight * 0.3 && // Detecta más arriba (30% de la pantalla)
          rect.bottom >= window.innerHeight * 0.2 // Evita cambios bruscos
        ) {
          currentSection = `#${section}`;
          break;
        }
      }
    }

    if (currentSection) {
      setActiveLink(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navList}>
          <li>
            <a
              href="#hero"
              className={activeLink === "#hero" ? styles.active : ""}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "#contact" ? styles.active : ""}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === "#projects" ? styles.active : ""}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeLink === "#education" ? styles.active : ""}
            >
              Formación
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
