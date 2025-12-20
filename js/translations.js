const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            eyebrow: "Hi, I'm Ruben Pombo",
            title: "Data Engineer & R&D Specialist",
            subtitle: "Where a strong background, agency, and curiosity <br> met.",
            cta: "Check my Work"
        },
        about: {
            title: "About Me",
            text: "I'm Ruben Parte Pombo, a Data Engineer who combines the rigour of R&D with a builder's mindset. <br><br>My technical foundation spans Machine Learning, Cryptography, and Statistics, and I am actively expanding into DevOps to bridge the gap between code design and deployment. <br><br>I believe that agency and rapid exploration are key to growth. That's why I'm frequently diving into new topics, aiming to find my true passion."
        },
        experience: {
            title: "Professional Experience",
            arcelor: {
                role: "Junior R&D Engineer",
                desc: "Applying data science and analytical techniques to optimize continuous casting processes within the Mechatronics R&D team."
            },
            ntt: {
                role: "Artificial Intelligence Intern",
                desc1: "Co-authored a <a href='https://www.sciencedirect.com/science/article/pii/S2352340925003427?via%3Dihub' target='_blank' class='text-blue-400 hover:underline'>paper on the first Iberian Bird dataset</a> for object detection.",
                desc2: "Participated in LLM fine-tuning, backend integration, and prompt engineering with LangChain and Azure for Nestlé.",
                desc3: "Benchmarked multimodal LLMs (GPT-4o, Gemini 2.5) for worker safety monitoring."
            },
            gonvarri: {
                role: "Data Engineering Intern",
                desc1: "Collaborated with R&D teams to understand industrial processes and initiatives.",
                desc2: "Performed time series analysis and data visualization in R to identify operational anomalies."
            }
        },
        education: {
            mainTitle: "Education & Achievements",
            eduTitle: "Education",
            uni: {
                degree: "Bachelor of Science in Data Science and Engineering",
                grade: "<strong>Grade:</strong> <span class='font-bold text-blue-400'>7.2/10.0</span> (2:1 equivalent)",
                competencies: "<strong>General competencies:</strong> <span class='text-slate-400'>Artificial Intelligence · Object-Oriented Programming · Algorithmics · Statistics · Data Analysis · Databases · Machine Learning · Deep Learning · Data Engineering · Distributed Systems · Cryptography · IoT · Project Management · NLP · Cybersecurity</span>",
                abroad: "Completed semester abroad at Faculty of Sciences, University of Porto (Portugal), taking Master’s level courses delivered in English",
                thesis: "<strong>Final Thesis (10.0, honors.):</strong> Classification of endangered flying birds through fine-tuned YOLO object detection model, achieving F1 score of 0.80."
            },
            school: {
                name: "Technological High School"
            },
            achievements: {
                title: "Achievements & More",
                winner: {
                    title: "Project Winner",
                    desc: "\"Application of Generative AI in Industrial Environments\" for Delta (<a href='https://iturcemigrupo.com/' target='_blank' class='text-blue-400 hover:underline'>Iturcermi Group</a>).",
                    link: "View LinkedIn Post"
                },
                certs: {
                    title: "Certifications"
                },
                hackathons: {
                    title: "Hackathons Attendance"
                }
            }
        },
        skills: {
            title: "Technical Skills",
            languages: "Programming Languages",
            tech: "Technologies",
            libs: "Libraries & Frameworks"
        },
        projects: {
            title: "Side Projects",
            pipeline: {
                title: "Real Time User Data Pipeline",
                desc: "Built a real-time data pipeline for user sign-up data from an external API, covering ingestion, processing, storage, and automated visualization. Designed an interactive dashboard to present key insights from processed user data."
            },
            quantum: {
                title: "Quantum Algorithms Predict Bankruptcy",
                desc: "Solved a binary classification problem using quantum algorithms (QSVC, QNNs), earning a 10/10 grade. Explored embedding and dimensionality reduction methods, evaluating with Pennylane and IBM's quantum computers."
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Feel free to reach out to propose and discuss any opportunity or topic :)",
            form: {
                email: "Your Email",
                emailPlaceholder: "you@example.com",
                subject: "Subject",
                subjectPlaceholder: "Project Inquiry",
                message: "Message",
                messagePlaceholder: "How can I help you?",
                btn: "Send Message"
            }
        },
        footer: {
            rights: "&copy; 2025 Ruben Parte Pombo. All rights reserved."
        }
    },
    es: {
        nav: {
            about: "Sobre Mí",
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            eyebrow: "Hola, soy Ruben Pombo",
            title: "Ingeniero de Datos y Especialista en I+D",
            subtitle: "Donde una base sólida, la iniciativa y la curiosidad <br> se encuentran.",
            cta: "Ver mis Trabajos"
        },
        about: {
            title: "Sobre Mí",
            text: "Soy Ruben Parte Pombo, un Ingeniero de Datos que combina el rigor de la I+D con la mentalidad de constructor. <br><br>Mi base técnica abarca Machine Learning, Criptografía y Estadística, y actualmente me estoy expandiendo hacia DevOps para cerrar la brecha entre el diseño de código y el despliegue. <br><br>Creo que tener iniciativa y capacidad de aprendizaje rápido son claves para el crecimiento, por eso intento adentrarme en nuevos temas cada cierto tiempo con el objetivo de encontrar mi verdadera pasión."
        },
        experience: {
            title: "Experiencia Profesional",
            arcelor: {
                role: "Ingeniero de I+D Junior",
                desc: "Aplicación de ciencia de datos y técnicas analíticas para optimizar procesos de colada continua dentro del equipo de I+D de Mecatrónica."
            },
            ntt: {
                role: "Becario de Inteligencia Artificial",
                desc1: "Coautor de un <a href='https://www.sciencedirect.com/science/article/pii/S2352340925003427?via%3Dihub' target='_blank' class='text-blue-400 hover:underline'>artículo sobre el primer dataset de aves ibéricas</a> para detección de objetos.",
                desc2: "Participación en el ajuste fino de LLMs, integración backend e ingeniería de prompts con LangChain y Azure para Nestlé.",
                desc3: "Benchmarking de LLMs multimodales (GPT-4o, Gemini 2.5) para la monitorización de seguridad de los trabajadores."
            },
            gonvarri: {
                role: "Becario de Ingeniería de Datos",
                desc1: "Colaboración con equipos de I+D para entender procesos e iniciativas industriales.",
                desc2: "Análisis de series temporales y visualización de datos en R para identificar anomalías operativas."
            }
        },
        education: {
            mainTitle: "Formación y Logros",
            eduTitle: "Educación",
            uni: {
                degree: "Grado en Ciencia e Ingeniería de Datos",
                grade: "<strong>Nota:</strong> <span class='font-bold text-blue-400'>7.2/10.0</span>",
                competencies: "<strong>Competencias generales:</strong> <span class='text-slate-400'>Inteligencia Artificial · POO · Algoritmia · Estadística · Análisis de Datos · Bases de Datos · Machine Learning · Deep Learning · Ingeniería de Datos · Sistemas Distribuidos · Criptografía · IoT · Gestión de Proyectos · NLP · Ciberseguridad</span>",
                abroad: "Semestre en el extranjero en la Facultad de Ciencias, Universidad de Oporto (Portugal), cursando asignaturas de nivel de Máster en inglés",
                thesis: "<strong>TFG (10.0, Matrícula de Honor):</strong> Clasificación de aves en peligro mediante modelo YOLO fine-tuned, logrando un F1-score de 0.80."
            },
            school: {
                name: "Bachillerato Tecnológico"
            },
            achievements: {
                title: "Logros y Más",
                winner: {
                    title: "Ganador de Proyecto",
                    desc: "\"Aplicación de IA Generativa en Entornos Industriales\" para Delta (<a href='https://iturcemigrupo.com/' target='_blank' class='text-blue-400 hover:underline'>Grupo Iturcermi</a>).",
                    link: "Ver publicación en LinkedIn"
                },
                certs: {
                    title: "Certificaciones"
                },
                hackathons: {
                    title: "Asistencia a Hackathons"
                }
            }
        },
        skills: {
            title: "Habilidades Técnicas",
            languages: "Lenguajes de Programación",
            tech: "Tecnologías",
            libs: "Librerías y Frameworks"
        },
        projects: {
            title: "Proyectos Personales",
            pipeline: {
                title: "Pipeline de Datos de Usuarios en Tiempo Real",
                desc: "Construcción de un pipeline de datos en tiempo real para registros de usuarios desde API externa, cubriendo ingesta, procesamiento, almacenamiento y visualización. Diseño de dashboard interactivo para insights clave."
            },
            quantum: {
                title: "Algoritmos Cuánticos para Predicción de Quiebra",
                desc: "Resolución de problema de clasificación binaria usando algoritmos cuánticos (QSVC, QNNs), obteniendo calificación 10/10. Exploración de métodos de embedding y reducción de dimensionalidad con Pennylane e IBM Quantum."
            }
        },
        contact: {
            title: "Contacto",
            subtitle: "No dudes en contactarme para proponer y discutir cualquier oportunidad o tema :)",
            form: {
                email: "Tu Email",
                emailPlaceholder: "tu@ejemplo.com",
                subject: "Asunto",
                subjectPlaceholder: "Consulta de Proyecto",
                message: "Mensaje",
                messagePlaceholder: "¿En qué puedo ayudarte?",
                btn: "Enviar Mensaje"
            }
        },
        footer: {
            rights: "&copy; 2025 Ruben Parte Pombo. Todos los derechos reservados."
        }
    }
};
