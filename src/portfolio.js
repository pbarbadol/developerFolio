/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Pablo Barbado Lozano",
  title: "Hola, soy Pablo",
  subTitle: emoji(
    "Ingeniero de Software y estudiante de Máster en Inteligencia Artificial 🚀. Apasionado por la tecnología, el desarrollo de software, machine learning y data science para crear soluciones innovadoras."
  ),
  // CAMBIO: Eliminado el enlace para descargar/ver el CV para evitar copias.
  resumeLink: "", // Dejar vacío para ocultar el botón de CV en esta sección
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pbarbadol",
  linkedin: "https://www.linkedin.com/in/pablobarbadolozano",
  gmail: "pablobarbado@outlook.es",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Lo que hago",
  subTitle: "INGENIERO DE SOFTWARE & IA, ME ENCANTA APRENDER, Y AUNQUE NO TENGA EXPERIENCIA, DAME UN PAR DE DÍAS QUE APRENDO LO QUE SEA.",
  skills: [
    emoji(
      "⚡ Desarrollo aplicaciones full-stack robustas y escalables, desde el frontend hasta el backend."
    ),
    emoji("⚡ Diseño, implementación y despliegue de modelos de Machine Learning, Deep Learning e Inteligencia Artificial."),
    emoji(
      "⚡ Administración eficiente de sistemas Linux/Unix, bases de datos SQL y NoSQL, y contenedores Docker."
    ),
    emoji("⚡ Creación de scripts para automatización (Bash/Shell) y sólida comprensión de redes e infraestructura (Cisco, Mininet).")
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Linux/Unix",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Pandas & NumPy",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidad de Sevilla",
      logo: require("./assets/images/sevilla_uni_logo.png"),
      subHeader: "Máster en Lógica, Computación e Inteligencia Artificial",
      duration: "2024 - Actualidad",
      desc: "Profundizando en técnicas avanzadas de inteligencia artificial, machine learning, deep learning y ciencia de datos para el desarrollo de soluciones innovadoras.",
      descBullets: [
        "Especialización en aprendizaje automático y procesamiento de datos masivos.",
        "Desarrollo de proyectos aplicados de IA."
      ]
    },
    {
      schoolName: "Universidad de Extremadura",
      logo: require("./assets/images/extremadura_uni_logo.png"),
      subHeader: "Grado en Ingeniería Informática (Especialidad: Ingeniería de Software)",
      duration: "2020 - 2024",
      desc: "Sólida formación en desarrollo de software, algoritmos, estructuras de datos, redes de ordenadores y sistemas informáticos.",
      descBullets: [
        "Proyectos de desarrollo de software utilizando Java, Python y C++.",
        "Fundamentos en inteligencia artificial y lenguajes de programación."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Inteligencia Artificial (ML/DL)",
      progressPercentage: "93%"
    },
    {
      Stack: "Desarrollo Backend y APIs",
      progressPercentage: "85%"
    },
    {
      Stack: "Bases de Datos (SQL & NoSQL)",
      progressPercentage: "80%"
    },
    {
      Stack: "Administración de Sistemas y Redes",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: false,
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Proyectos Destacados",
  subtitle: "ALGUNOS DE LOS PROYECTOS MÁS RELEVANTES QUE HE DESARROLLADO",
  projects: [
    {
      image: require("./assets/images/real_time_face_recognition_project.gif"),
      projectName: "Reconocimiento facial en tiempo real con liveness y XAI",
      projectDesc: "Sistema avanzado de reconocimiento facial que integra detección de vida (liveness) para prevenir suplantaciones y utiliza técnicas de Explicabilidad (XAI) para entender las decisiones del modelo. Desarrollado con Python, TensorFlow y OpenCV.",
      footerLink: [
        {
          name: "Ver en GitHub",
          url: "https://github.com/pbarbadol/real-time-face-recognition"
        }
        // CAMBIO: Eliminado el enlace a la demo de YouTube si lo tenías aquí,
        // ya que el GIF ahora es la "demo visual" principal en la tarjeta.
        // Si quieres mantener un enlace a un vídeo más largo, puedes volver a añadirlo.
      ]
    },
    {
      image: require("./assets/images/vianorba_project.png"),
      projectName: "ViaNorba: explorador de monumentos de Cáceres con Neo4J",
      projectDesc: "Aplicación interactiva para explorar y descubrir información sobre los monumentos de Cáceres, utilizando una base de datos gráfica Neo4J para modelar las relaciones entre ellos. Interfaz desarrollada con tecnologías web.",
      footerLink: [
        {
          name: "Ver en GitHub",
          url: "https://github.com/pbarbadol/via_norba"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Logros y Certificaciones 🏆 "),
  subtitle:
    "Certificaciones de idiomas, cursos especializados y otros reconocimientos relevantes.", // Actualiza el subtítulo
  achievementsCards: [
    {
      title: "Seminario: Configuración de Protocolos y Servicios en Cisco Packet Tracer",
      subtitle:
        "Participación en seminario impartido por la Escuela Politécnica de la Universidad de Extremadura (Octubre 2023)",
      image: require("./assets/images/extremadura_uni_logo.png"), // O usa un logo específico de la Politécnica si lo tienes
      imageAlt: "Certificado Seminario Cisco Packet Tracer - UEx",
      footerLink: [
         {
           name: "Ver Certificado", // O "Verificación" si prefieres
           // Usamos la URL de verificación que aparece en el documento
           url: "https://uex09.unex.es/vfirma/code/uy+6r2ofmIGDfTvrqP/ZZw=="
         }
       ]
    },
    {
      title: "Machine Learning y Data Science con Python (Udemy)",
      subtitle:
        "Curso completo impartido por Santiago Hernández. Cubre fundamentos y técnicas avanzadas de ML y Data Science utilizando Python. Duración: 31 horas.",
      image: require("./assets/images/udemy_ml_datascience.png"), // CAMBIA por tu imagen real
      imageAlt: "Certificado Udemy: Machine Learning y Data Science",
      footerLink: [
         {
           name: "Ver Certificado",
           url: "https://ude.my/UC-ae4e4a3a-a25d-4521-92cc-7096e09c92cd" // URL del certificado
         }
       ]
    },
    {
      title: "Inteligencia Artificial y Deep Learning en Python (Udemy)",
      subtitle:
        "Curso desde cero impartido por Santiago Hernández. Enfoque en IA y Deep Learning con Python. Duración: 27 horas.",
      image: require("./assets/images/udemy_ai_deeplearning.jpg"), // CAMBIA por tu imagen real
      imageAlt: "Certificado Udemy: IA y Deep Learning",
      footerLink: [
         {
           name: "Ver Certificado",
           url: "https://ude.my/UC-b918e19b-39f4-41ba-a873-2a2823a90a38" // URL del certificado
         }
       ]
    },
    {
      title: "Certificación de Inglés - Nivel B1 (Cambridge)",
      subtitle:
        "Cambridge Assessment English. Otorgado en Octubre 2019. Demuestra competencia intermedia en inglés.",
      image: require("./assets/images/cambridge_logo.png"),
      imageAlt: "Logo Cambridge Assessment English",
      footerLink: [
         {
           name: "Ver Certificado",
           url: "ENLACE_A_TU_CERTIFICADO_B1_SI_LO_TIENES_ONLINE" // Recuerda poner el enlace si lo tienes
         }
       ]
    },
    {
      title: "Preparación Certificación Inglés - Nivel B2 (Cambridge)",
      subtitle: "Cambridge Assessment English. Actualmente en curso, enfocado en alcanzar un nivel intermedio-alto.",
      image: require("./assets/images/cambridge_logo.png"), // CAMBIA por tu imagen real (o usa el mismo logo de Cambridge)
      imageAlt: "Preparación Cambridge B2",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blog",
  subtitle:
    "Espacio para compartir conocimientos, tutoriales y reflexiones sobre tecnología, IA y desarrollo de software.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections
const talkSection = {
  title: "Charlas y Presentaciones",
  subtitle: emoji(
    "Compartiendo experiencias y conocimientos con la comunidad tecnológica."
  ),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversaciones sobre el futuro de la tecnología y la IA.",
  podcast: [],
  display: false
};

// Resume Section
// CAMBIO: Ocultada la sección de descarga del CV
const resumeSection = {
  title: "Currículum Vitae",
  subtitle: "Para más detalles sobre mi perfil profesional, por favor contáctame.", // CAMBIO: Subtítulo modificado
  display: false // CAMBIO: Puesto a false para ocultar esta sección
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle:
    "¿Interesado en contratarme o colaborar en un proyecto? ¡No dudes en escribirme!",
  // CAMBIO: Eliminada la propiedad 'number'
  email_address: "pablobarbado@outlook.es"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};