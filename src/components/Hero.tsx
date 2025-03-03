import React from "react";
import styles from "../styles/hero.module.css";
import { portfolioData } from "../data.tsx";
import stylesContact from "../styles/contact.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img
        src={portfolioData.hero.image}
        alt="Perfil"
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h1>{portfolioData.hero.name}</h1>
        <h2>{portfolioData.hero.role}</h2>
      </div>

      {/* Botón no pulsable tipo "tag" */}
      <div className={styles.workAvailableTag}>Disponible para trabajar</div>

      <div className={styles.aboutMeContainer}>
        <h3>{portfolioData.hero.aboutme}</h3>
      </div>

      <section className={stylesContact.contact}>
        {/* Botón con ícono para Email */}
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className={stylesContact.contactLink}
        >
          <FaEnvelope className={stylesContact.icon} /> Email
        </a>

        {/* Botón con ícono para GitHub */}
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className={stylesContact.contactLink}
        >
          <FaGithub className={stylesContact.icon} /> GitHub
        </a>

        {/* Botón con ícono para LinkedIn */}
        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={stylesContact.contactLink}
        >
          <FaLinkedin className={stylesContact.icon} /> LinkedIn
        </a>

        {/* Botón con ícono para CV */}
        <a
          href={portfolioData.contact.cv}
          target="_blank"
          rel="noopener noreferrer"
          className={stylesContact.contactLink}
        >
          <FaFileAlt className={stylesContact.icon} /> CV
        </a>
      </section>
    </section>
  );
};

export default Hero;
