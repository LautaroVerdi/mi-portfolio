import React from "react";
import styles from "../styles/contact.module.css";
import { portfolioData } from "../data.tsx";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      {/* Botón con ícono para Email */}
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className={styles.contactLink}
      >
        <FaEnvelope className={styles.icon} /> Email
      </a>

      {/* Botón con ícono para GitHub */}
      <a
        href={portfolioData.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactLink}
      >
        <FaGithub className={styles.icon} /> GitHub
      </a>

      {/* Botón con ícono para LinkedIn */}
      <a
        href={portfolioData.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactLink}
      >
        <FaLinkedin className={styles.icon} /> LinkedIn
      </a>

      {/* Botón con ícono para CV */}
      <a
        href={portfolioData.contact.cv}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactLink}
      >
        <FaFileAlt className={styles.icon} /> CV
      </a>
    </section>
  );
};

export default Contact;
