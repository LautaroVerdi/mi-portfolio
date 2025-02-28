import PythonIcon from "./components/icons/Python.tsx";
import FastaiIcon from "./components/icons/Fastai.tsx";
import FirebaseIcon from "./components/icons/Firebase.tsx";
import MinioIcon from "./components/icons/Minio.tsx";
import MongoDBIcon from "./components/icons/MongoDB.tsx";
import NestjsIcon from "./components/icons/Nestjs.tsx";
import NextjsIcon from "./components/icons/Nextjs.tsx";
import NodejsIcon from "./components/icons/Nodejs.tsx";
import PostgreSQLIcon from "./components/icons/PostgreSQL.tsx";
import PyTorchIcon from "./components/icons/PyTorch.tsx";
import ReactIcon from "./components/icons/React.tsx";

export const portfolioData = {
  hero: {
    name: "Lautaro Agustín Verdi",
    role: "Licenciado en Informática y Desarrollador Full Stack.",
    aboutme:
      "Soy Licenciado en Informática y Desarrollador Full Stack con experiencia en tecnologías como React, React Native, Next.js, Nest.js, Node.js y Python. Aunque tengo un enfoque Full Stack, mi verdadera pasión está en el desarrollo de interfaces de usuario intuitivas y atractivas. Me especializo en la creación de aplicaciones escalables y eficientes, optimizando procesos y resolviendo problemas tecnológicos. Busco contribuir a proyectos que combinen diseño y funcionalidad para generar impacto positivo.",
    image: "/profile.jpg",
  },
  contact: {
    email: "lautaroverdii@gmail.com",
    github: "https://github.com/LautaroVerdi",
    linkedin: "https://www.linkedin.com/in/lautaro-verdi/",
    cv: "/cv-verdi-lautaro.pdf",
  },
  projects: [
    {
      title: "Dental AI",
      date: "10/2023 - Actualmente",
      role: "Full stack y IA",
      responsibilities: [
        "Gestión de proyecto y datos de aprendizaje en Firebase Firestore y Firebase Storage, con una app web en React para anotaciones.",
        "Desarrollo de modelo para detectar y segmentar piezas dentales usando Pytorch y OpenMMLab.",
        "Desarrollo de modelo para detectar patologías dentales con FastAI.",
      ],
      technologies: [
        {
          logo: PythonIcon,
          name: "Python",
        },
        { logo: PyTorchIcon, name: "PyTorch" },
        { logo: FastaiIcon, name: "FastAI" },
        { logo: FirebaseIcon, name: "Firebase" },
        { logo: ReactIcon, name: "React" },
      ],
      image: "/dentalai.jpg",
      link: "",
      androidLink: "",
      iosLink: "",
    },
    {
      title: "MIC - Mapa Interactivo Cultural",
      date: "04/2023 - Actualmente",
      role: "Full stack",
      responsibilities: [
        "Desarrollo de la aplicación MIC (PWA) utilizando NestJS para el backend, NextJS para el frontend, Postgres como base de datos y MinIO para almacenamiento.",
        "Mantenimiento de la aplicación MIC (PWA), asegurando su correcto funcionamiento y actualización continua.",
        "Gestión y despliegue de la aplicación MIC en Play Store.",
      ],
      technologies: [
        { logo: NestjsIcon, name: "NestJS" },
        { logo: NextjsIcon, name: "Next.js" },
        { logo: PostgreSQLIcon, name: "PostgreSQL" },
        { logo: MinioIcon, name: "MinIO" },
      ],
      image: "/mic.png",
      link: "https://mapainteractivocultural.ar/",
      androidLink:
        "https://play.google.com/store/apps/details?id=ar.mapainteractivocultural.twa&hl=es_AR",
      iosLink: "",
    },
    {
      title: "AgroTour",
      date: "07/2022 - 11/2024",
      role: "Full Stack Mobile",
      responsibilities: [
        "Desarrollo y mantenimiento de la aplicación móvil AgroTour, realizado con React Native y Firebase para Android e iOS.",
        "Gestión y despliegue de la aplicación en las stores Play Console y App Connect.",
      ],
      technologies: [
        { logo: ReactIcon, name: "React Native" },
        { logo: FirebaseIcon, name: "Firebase" },
      ],
      image: "agrotour.jpg",
      link: "https://agrotour.com.ar/",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.AgroTour&hl=es_SV",
      iosLink: "https://apps.apple.com/ar/app/agrotour/id6443960404",
    },
    {
      title: "AgroInfinito",
      date: "06/2021 - 12/2022",
      role: "Full Stack Mobile",
      responsibilities: [
        "Desarrollo y mantenimiento de la aplicación móvil AgroInfinito, realizado con React Native para Android. Utilizando endpoints existentes.",
        "Gestión y despliegue de la aplicación en las stores Play Console y App Connect.",
      ],
      technologies: [{ logo: ReactIcon, name: "React Native" }],
      image: "/agroinfinito.png",
      link: "https://agroinfinito.com.ar/",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.Agroinfinito",
      iosLink: "https://apps.apple.com/ar/app/agroinfinito/id1670767111",
    },
    {
      title: "ANPANP - Áreas Naturales Protegidas",
      date: "01/2023 - 12/2023",
      role: "Full stack",
      responsibilities: [
        "Desarrollo de aplicación web, realizado con React, NodeJS y Postgres/MongoDB.",
      ],
      technologies: [
        { logo: ReactIcon, name: "React" },
        { logo: NodejsIcon, name: "Node.js" },
        { logo: PostgreSQLIcon, name: "PostgreSQL" },
        { logo: MongoDBIcon, name: "MongoDB" },
      ],
      image: "anp.jpg",
      link: "",
      androidLink: "",
      iosLink: "",
    },
  ],
  education: [
    {
      degree: "Licenciatura en Informática",
      institution: "UNPSJB - Puerto Madryn, Chubut",
      year: "03/2017 - 12/2024",
      image: "/recibida.jpg",
    },
  ],
};
