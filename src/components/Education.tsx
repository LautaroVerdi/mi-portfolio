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
            {/* Contenedor que alinea el título y la fecha */}
            <div className={styles.cardHeader}>
              <h3>{edu.degree}</h3>
              <span className={styles.date}>{edu.year}</span>
            </div>
            {/* Institución debajo del título */}
            <p>{edu.institution}</p>
            <br></br>
          </div>

          {/* Proyectos enumerados */}
          <div className={styles.roleAndResponsibilities}>
            <div className={styles.responsibilities}>
              <ul>
                {edu.projects.map((project, i) => (
                  <li key={i}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Imagen debajo */}
          {edu.image && (
            <div className={styles.imageContainer}>
              <img
                src={edu.image}
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
