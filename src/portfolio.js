/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation, // You might want to change this or create your own
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pablo Barbado Lozano",
  title: "Hola, soy Pablo",
  subTitle: emoji(
    "Ingeniero de Software y estudiante de Máster en Inteligencia Artificial 🚀. Apasionado por la tecnología, el desarrollo de software, machine learning y data science para crear soluciones innovadoras."
  ),
  // CAMBIO/SUGERENCIA: Añade aquí el enlace público a tu CV (ej. Google Drive, Dropbox, o un PDF en tu repo de GitHub Pages)
  resumeLink: "ENLACE_A_TU_CV_ONLINE_PABLO.pdf", // Ejemplo: "https://github.com/pablobarbadol/pablobarbadol.github.io/raw/main/Pablo_Barbado_Lozano_CV.pdf"
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pbarbadol",
  linkedin: "https://www.linkedin.com/in/pablobarbadolozano",
  gmail: "pablobarbado@outlook.es",
  // gitlab: "", // Añade si tienes
  // facebook: "", // Añade si tienes
  // medium: "", // Añade si tienes
  // stackoverflow: "", // Añade si tienes
  display: true
};

// Skills Section

const skillsSection = {
  title: "Lo que hago",
  // CAMBIO/SUGERENCIA: Un subtítulo un poco más conciso o enfocado.
  subTitle: "DESARROLLADOR DE SOFTWARE CON FOCO EN INTELIGENCIA ARTIFICIAL, EXPLORANDO CONSTANTEMENTE NUEVAS TECNOLOGÍAS.",
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
      fontAwesomeClassname: "fas fa-file-code" // Podrías buscar un icono más específico si existe para C++ o usar este genérico
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android" // O fab fa-kickstarter-k si prefieres algo más genérico para Kotlin
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
      skillName: "SQL", // CAMBIO/SUGERENCIA: Más genérico, cubres MySQL, PostgreSQL
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL", // CAMBIO/SUGERENCIA: Más genérico, cubres MongoDB, Neo4J
      fontAwesomeClassname: "fas fa-database" // Puedes usar el mismo o buscar uno específico para graphDB para Neo4j si hay
    },
    {
      skillName: "Linux/Unix",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain" // O un logo específico de TF si lo encuentras como SVG/FontAwesome
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: "fas fa-robot" // O un logo específico de Scikit-learn
    },
    // CAMBIO/SUGERENCIA: Considera añadir Keras, Pandas, NumPy si encuentras iconos o quieres representarlos
    {
      skillName: "Keras",
      fontAwesomeClassname: "fas fa-layer-group" // Icono genérico para capas de redes neuronales
    },
    {
      skillName: "Pandas & NumPy",
      fontAwesomeClassname: "fas fa-chart-line" // Icono genérico para análisis de datos
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
      // CAMBIO/SUGERENCIA: Asegúrate de tener el archivo 'sevilla_uni_logo.png' en './src/assets/images/'
      logo: require("./assets/images/sevilla_uni_logo.png"),
      subHeader: "Máster en Lógica, Computación e Inteligencia Artificial",
      duration: "2024 - Actualidad",
      desc: "Profundizando en técnicas avanzadas de inteligencia artificial, machine learning, deep learning y ciencia de datos para el desarrollo de soluciones innovadoras.",
      descBullets: [ // CAMBIO/SUGERENCIA: Añade puntos clave
        "Especialización en aprendizaje automático y procesamiento de datos masivos.",
        "Desarrollo de proyectos aplicados de IA."
      ]
    },
    {
      schoolName: "Universidad de Extremadura",
      // CAMBIO/SUGERENCIA: Asegúrate de tener el archivo 'extremadura_uni_logo.png' en './src/assets/images/'
      logo: require("./assets/images/extremadura_uni_logo.png"),
      // CAMBIO/SUGERENCIA: Corregido el título
      subHeader: "Grado en Ingeniería Informática (Especialidad: Ingeniería de Software)",
      duration: "2020 - 2024",
      desc: "Sólida formación en desarrollo de software, algoritmos, estructuras de datos, redes de ordenadores y sistemas informáticos.",
      descBullets: [ // CAMBIO/SUGERENCIA: Añade puntos clave
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
      Stack: "Inteligencia Artificial (ML/DL)", // CAMBIO/SUGERENCIA: Más conciso
      progressPercentage: "93%"
    },
    {
      Stack: "Desarrollo Backend y APIs",
      progressPercentage: "85%" // CAMBIO/SUGERENCIA: Ajustado ligeramente para diferenciar más de IA si IA es tu fuerte principal
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: false, // Mantener en false ya que eres estudiante sin experiencia laboral formal listada
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
// CAMBIO/SUGERENCIA: Asegúrate de tener configurado tu token de GitHub en el archivo .env
// para que esta sección funcione correctamente y muestre tus proyectos pineados.
const openSource = {
  showGithubProfile: "true",
  display: true // Esta sección mostrará tus proyectos pineados de GitHub
};

// Some big projects you have worked on
// CAMBIO/SUGERENCIA: Esta sección puede complementar la de "openSource" si quieres destacar proyectos
// de forma diferente o añadir proyectos que no estén en GitHub / pineados.
// Si tus "bigProjects" son los mismos que los pineados en GitHub, considera si necesitas ambas secciones
// o si la sección "openSource" es suficiente.
const bigProjects = {
  title: "Proyectos Destacados", // CAMBIO/SUGERENCIA: "Destacados" suena bien
  subtitle: "ALGUNOS DE LOS PROYECTOS MÁS RELEVANTES QUE HE DESARROLLADO",
  projects: [
    {
      // CAMBIO/SUGERENCIA: Descomenta y añade una imagen real del proyecto en './src/assets/images/'
      image: require("./assets/images/real_time_face_recognition_project.gif"),
      projectName: "Reconocimiento facial en tiempo real con liveness y XAI",
      projectDesc: "Sistema avanzado de reconocimiento facial que integra detección de vida (liveness) para prevenir suplantaciones y utiliza técnicas de Explicabilidad (XAI) para entender las decisiones del modelo. Desarrollado con Python, TensorFlow y OpenCV.",
      footerLink: [
        {
          name: "Ver en GitHub",
          url: "https://github.com/pbarbadol/real-time-face-recognition"
        }
      ]
    },
    {
      // CAMBIO/SUGERENCIA: Descomenta y añade una imagen real del proyecto en './src/assets/images/'
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
    // CAMBIO/SUGERENCIA: Si tienes más proyectos importantes (incluso universitarios complejos), añádelos.
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Logros y Certificaciones 🏆 "),
  subtitle:
    "Certificaciones de idiomas y otros reconocimientos relevantes.",
  achievementsCards: [
    {
      title: "Certificación de Inglés - Nivel B1 (Cambridge)",
      subtitle:
        "Cambridge Assessment English. Otorgado en Octubre 2019. Demuestra competencia intermedia en inglés.",
      // CAMBIO/SUGERENCIA: Asegúrate de tener 'cambridge_logo.png' en './src/assets/images/'
      image: require("./assets/images/cambridge_logo.png"),
      imageAlt: "Logo Cambridge Assessment English",
      footerLink: [
         {
           name: "Ver Certificado", // CAMBIO/SUGERENCIA: Si tienes un enlace público al certificado, añádelo aquí.
           url: "ENLACE_A_TU_CERTIFICADO_B1_SI_LO_TIENES_ONLINE"
         }
       ]
    },
    {
      title: "Preparación Certificación Inglés - Nivel B2 (Cambridge)",
      subtitle: "Cambridge Assessment English. Actualmente en curso, enfocado en alcanzar un nivel intermedio-alto.",
      // CAMBIO/SUGERENCIA: Puedes usar el mismo logo o uno que indique "en progreso"
      image: require("./assets/images/cambridge_logo.png"), // Ejemplo: 'cambridge_logo_b2_inprogress.png'
      imageAlt: "Preparación Cambridge B2",
      footerLink: []
    }
    // CAMBIO/SUGERENCIA: ¿Algún otro logro? ¿Participación destacada en algún proyecto universitario? ¿Hackathon?
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blog", // CAMBIO/SUGERENCIA: Singular si es tu blog personal
  subtitle:
    "Espacio para compartir conocimientos, tutoriales y reflexiones sobre tecnología, IA y desarrollo de software.",
  displayMediumBlogs: "false", // Cambia a "true" si usas Medium y configuras MEDIUM_USERNAME en .env
  blogs: [
    // Ejemplo si tuvieras un blog:
    // {
    //   url: "https://tu-blog.com/mi-primer-articulo",
    //   title: "Mi Primer Artículo sobre IA",
    //   description: "Una introducción a los conceptos básicos de la Inteligencia Artificial explicados de forma sencilla."
    // }
  ],
  display: false // Cambia a true cuando tengas contenido para mostrar
};

// Talks Sections
const talkSection = {
  title: "Charlas y Presentaciones",
  subtitle: emoji(
    "Compartiendo experiencias y conocimientos con la comunidad tecnológica."
  ),
  talks: [
    // Ejemplo:
    // {
    //   title: "Introducción a XAI en Proyectos Reales",
    //   subtitle: "Presentación en el meetup de IA de Sevilla (Fecha)",
    //   slides_url: "ENLACE_A_LAS_DIAPOSITIVAS",
    //   event_url: "ENLACE_AL_EVENTO"
    // }
  ],
  display: false // Cambia a true si tienes charlas para mostrar
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversaciones sobre el futuro de la tecnología y la IA.",
  podcast: [
    // "ENLACE_EMBED_DE_TU_PODCAST"
  ],
  display: false // Cambia a true si tienes un podcast
};

// Resume Section
// CAMBIO/SUGERENCIA: Asegúrate de que el archivo 'resume.pdf' esté en 'src/containers/greeting/resume/resume.pdf'
// para que el botón de descarga funcione.
const resumeSection = {
  title: "Currículum Vitae",
  subtitle: "Descarga mi CV para conocer más detalles sobre mi perfil profesional.",
  display: true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle:
    "¿Interesado en contratarme o colaborar en un proyecto? ¡No dudes en escribirme!",
  number: "+34 697 22 05 39",
  email_address: "pablobarbado@outlook.es"
};

// Twitter Section
const twitterDetails = {
  userName: "", // CAMBIO/SUGERENCIA: Añade tu usuario de Twitter sin la @ si quieres mostrar tu timeline
  display: false // Cambia a true si añades tu userName y quieres mostrarlo
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