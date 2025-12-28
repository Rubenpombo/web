const translations = {
    en: {
        nav: {
            about: "About",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            eyebrow: "Hi, I'm Ruben Pombo",
            title: "Data Engineer & R&D Specialist",
            subtitle: "Applying technical knowledge <br> with enthusiasm and dedication.",
            cta: "Check my Work"
        },
        about: {
            title: "About Me",
            text: "I’m Ruben Pombo, a Data Science and Engineering graduate currently working as a Junior R&D Engineer in the industrial field. I enjoy tackling abstract and complex problems that require careful analysis and deep thinking before taking action. <br><br>My technical foundation has been shaped by my university studies, professional experience, and personal projects. This journey has allowed me to work across various areas, including statistics, data analysis, machine learning, and big data infrastructure. <br><br>Driven by a commitment to continuous learning, I am currently expanding my expertise into DevOps and Cloud to build more scalable and secure solutions. My goal is to integrate these skills with my machine learning background to specialize in MLOps. Additionally, I am exploring MCP protocols to enhance the integration and capabilities of modern AI Agents."
        },
        experience: {
            title: "Professional Experience",
            arcelor: {
                role: "Junior R&D Engineer",
                desc: "Applying data science and analytical techniques to optimize continuous casting processes within the Mechatronics R&D team.",
                tags: '<span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Python</span>'
            },
            ntt: {
                role: "Artificial Intelligence Intern",
                desc1: "Co-authored a <a href='https://www.sciencedirect.com/science/article/pii/S2352340925003427?via%3Dihub' target='_blank' class='text-blue-400 hover:underline'>paper on the first Iberian Bird dataset</a> for object detection.",
                desc2: "Participated in LLM fine-tuning, backend integration, and prompt engineering for Nestlé.",
                desc3: "Benchmarked multimodal LLMs (GPT-4o, Gemini 2.5) for worker safety monitoring.",
                tags: '<span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Python</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">LangChain</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Azure</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">OpenCV</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">YOLO</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">MLflow</span>'
            },
            gonvarri: {
                role: "Data Science Intern",
                desc1: "Collaborated with R&D teams to understand industrial processes and initiatives.",
                desc2: "Performed time series analysis and data visualization to identify operational anomalies.",
                tags: '<span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Python</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">R</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Forecast</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">ggplot2</span>'
            }
        },
        education: {
            mainTitle: "Education & Achievements",
            eduTitle: "Education",
            uni: {
                degree: "Bachelor of Science in Data Science and Engineering",
                grade: "<strong>ECTS:</strong> 240 <br> <strong>Grade:</strong> <strong>7.2/10.0</strong> (2:1 equivalent)",
                competencies: '<span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Artificial Intelligence</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Object-Oriented Programming</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Algorithmics</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Statistics</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Data Analysis</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Databases</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Machine Learning</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Deep Learning</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Data Engineering</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Distributed Systems</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Cryptography</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">IoT</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Project Management</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">NLP</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Cybersecurity</span>',
                abroad: "Completed semester abroad at Faculty of Sciences, University of Porto (Portugal), taking Master’s level courses delivered in English",
                thesis: "<strong>Final Thesis (10.0, honors.):</strong> Classification of endangered flying birds through fine-tuned YOLO object detection model, achieving F1 score of 0.80."
            },
            school: {
                name: "Technological High School",
                grade: "<strong>Grade:</strong> <strong>9.0/10.0</strong>",
                ranking: "Among the top 100 Spanish colleges"
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
            nlp: {
                title: "NLP Analysis of Spanish Recipes",
                desc: "Analyzed ingredient relationships in Spanish cuisine using NLP and graph theory to uncover culinary patterns. Built a graph network to visualize ingredient communities and identify key components using centrality metrics."
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
            education: "Educación",
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            eyebrow: "Hola, soy Ruben Pombo",
            title: "Ingeniero de Datos y Especialista en I+D",
            subtitle: "Aplicando conocimientos técnicos <br> con entusiasmo y dedicación.",
            cta: "Ver mis Trabajos"
        },
        about: {
            title: "Sobre Mí",
            text: "Soy Rubén Pombo, graduado en Ciencia e Ingeniería de Datos y actualmente trabajo como Ingeniero de I+D Junior en el sector industrial. Me apasiona resolver problemas abstractos y complejos que requieren un análisis meticuloso y una reflexión profunda antes de actuar. <br><br>Mi base técnica se ha forjado a través de mis estudios universitarios, mi experiencia profesional y mis proyectos personales. Este recorrido me ha permitido trabajar en diversas áreas, como la estadística, el análisis de datos, el aprendizaje automático y la infraestructura de Big Data. <br><br>Impulsado por un compromiso con el aprendizaje continuo, actualmente estoy ampliando mis conocimientos en DevOps y Cloud para construir soluciones más escalables y seguras. Mi objetivo es integrar estas habilidades con mi experiencia en Machine Learning para especializarme en MLOps. Además, estoy explorando los protocolos MCP para mejorar la integración y las capacidades de los agentes de IA modernos."
        },
        experience: {
            title: "Experiencia Profesional",
            arcelor: {
                role: "Ingeniero de I+D Junior",
                desc: "Aplicación de ciencia de datos y técnicas analíticas para optimizar procesos de colada continua dentro del equipo de I+D de Mecatrónica.",
                tags: '<span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Python</span>'
            },
            ntt: {
                role: "Becario de Inteligencia Artificial",
                desc1: "Coautor de un <a href='https://www.sciencedirect.com/science/article/pii/S2352340925003427?via%3Dihub' target='_blank' class='text-blue-400 hover:underline'>artículo sobre el primer dataset de aves ibéricas</a> para detección de objetos.",
                desc2: "Participación en fine-tuning de LLMs, integración backend e ingeniería de prompts para Nestlé.",
                desc3: "Benchmarking de LLMs multimodales (GPT-4o, Gemini 2.5) para la monitorización de seguridad de los trabajadores.",
                tags: '<span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Python</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">LangChain</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Azure</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">OpenCV</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">YOLO</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">MLflow</span>'
            },
            gonvarri: {
                role: "Becario de Ciencia de Datos",
                desc1: "Colaboración con equipos de I+D para entender procesos e iniciativas industriales.",
                desc2: "Análisis de series temporales y visualización de datos para identificar anomalías operativas.",
                tags: '<span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Python</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">R</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Forecast</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">ggplot2</span>'
            }
        },
        education: {
            mainTitle: "Formación y Logros",
            eduTitle: "Educación",
            uni: {
                degree: "Grado en Ciencia e Ingeniería de Datos",
                grade: "<strong>ECTS:</strong> 240 <br> <strong>Nota:</strong> <strong>7.2/10.0</strong>",
                competencies: '<span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Inteligencia Artificial</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">POO</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Algoritmia</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Estadística</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Análisis de Datos</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Bases de Datos</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Machine Learning</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Deep Learning</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Ingeniería de Datos</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Sistemas Distribuidos</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Criptografía</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">IoT</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Gestión de Proyectos</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">NLP</span> <span class="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-slate-300 text-sm">Ciberseguridad</span>',
                abroad: "Semestre en el extranjero en la Facultad de Ciencias, Universidad de Oporto (Portugal), cursando asignaturas de nivel de Máster en inglés",
                thesis: "<strong>TFG (10.0, Matrícula de Honor):</strong> Clasificación de aves en peligro mediante modelo YOLO fine-tuned, logrando un F1-score de 0.80."
            },
            school: {
                name: "Bachillerato Tecnológico",
                grade: "<strong>Nota:</strong> <strong>9.0/10.0</strong>",
                ranking: "Entre los 100 mejores colegios de España"
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
            nlp: {
                title: "Análisis NLP de Recetas Españolas",
                desc: "Análisis de relaciones entre ingredientes en cocina española usando NLP y teoría de grafos para descubrir patrones. Construcción de red de grafos para visualizar comunidades e identificar componentes clave mediante métricas de centralidad."
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
