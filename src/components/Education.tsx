import React from "react";
import styles from "../styles/education.module.css";
import { portfolioData } from "../data.tsx";

const Education: React.FC = () => {
  return (
    <section className={styles.education}>
      <h2>Formación</h2>

      {portfolioData.education.map((edu, index) => (
        <div key={index} className={styles.eduItem}>
          <div className={styles.textContainer}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <span>{edu.year}</span>
          </div>

          {/* Imagen para cada item de formación */}
          {edu.image && (
            <div className={styles.imageContainer}>
              <img
                src={edu.image} // Ruta de la imagen desde la carpeta "public/images"
                alt={`Imagen de ${edu.degree}`}
                className={styles.educationImage}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;
