import React from "react";
import styles from "../styles/hero.module.css";
import { portfolioData } from "../data.tsx";

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

      <div className={styles.aboutMeContainer}>
        <h3>{portfolioData.hero.aboutme}</h3>
      </div>
    </section>
  );
};

export default Hero;
