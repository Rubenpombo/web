const translations = {
    en: {
        title: "Ruben Parte Pombo - Data Engineer",
        nav: {
            background: "Background",
            projects: "Projects",
            events: "Events",
            contact: "Contact"
        },
        hero: {
            eyebrow: "Data Engineer · Asturias",
            title: "Data Engineer & R&D Specialist",
            cta: "View projects"
        },
        home: {
            now: "Currently",
            roleCta: "Full background →",
            selectedWork: "Selected work",
            viewAllProjects: "All projects →"
        },
        about: {
            title: "About Me",
            intro: "Hi! I'm Ruben, a data engineer who graduated in Data Science and Engineering and is now doing an MSc in Cybersecurity.",
            text: "I've worked on Gen-AI integrations, industrial ML and MLOps, and I tend to gravitate toward problems at the boundary of different disciplines—that's where things get interesting for me.<br><br>I learn best from people with more experience than me, so I look for environments where that's possible."
        },
        background: {
            title: "Background",
            pageTitle: "Background — Ruben Parte Pombo",
            backHome: "← Back to home"
        },
        events: {
            title: "Events & Hackathons",
            pageTitle: "Events — Ruben Parte Pombo",
            backHome: "← Back to home",
            karumi: {
                title: "Karumi FDE AI Hackathon",
                date: "26/06/2026",
                desc: "Forward-deployed engineering hackathon hosted by Karumi (YC F25). We shipped a custom agent on their stack that could drop into live calls and help run product demos without breaking the flow of the conversation."
            },
            refugio: {
                title: "REFUGIO Madrid",
                date: "27/06/2026",
                desc: "A Madrid gathering that pulled in some of the sharpest builders in the Spanish ecosystem. Our team focused on search and optimization, clawed back to second place in the closing minutes, and I left with great talks in my ears and new people to build with."
            },
            porto: {
                title: "HackACity Porto 2023",
                date: "24/11/2023",
                desc: "A weekend hackathon in Porto focused on smart-city challenges. Our team explored data-driven ideas for urban mobility and pitched a prototype before the final jury."
            },
            merkle: {
                title: "Merkle Datathon 2023",
                date: "April 2023",
                desc: "A datathon built around urban planning datasets from Gijón. We explored city open data, tested ideas against the challenge brief, and pitched our analysis to the jury."
            }
        },
        experience: {
            title: "Professional Experience",
            pageTitle: "Experience — Ruben Parte Pombo",
            backHome: "← Back to home",
            arcelor: {
                role: "Junior R&D Engineer",
                company: "ArcelorMittal Global R&D",
                date: "Aug 2025 – Present",
                tooltip: "A world-leading steel and mining company, supplying quality steel products to various sectors including automotive, construction, and packaging.",
                desc: "ML design, deployment, and data analysis for industrial anomaly detection.",
                tags: ["Python"]
            },
            ntt: {
                role: "Artificial Intelligence Intern",
                company: "NTT DATA Europe & Latam",
                date: "Sep 2024 – May 2025",
                tooltip: "A global IT services provider and consulting firm, offering a wide range of solutions from advisory services to cloud and cybersecurity.",
                desc1: "Co-authored a <a href='https://www.sciencedirect.com/science/article/pii/S2352340925003427?via%3Dihub' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>paper on the first Iberian Bird dataset</a> for object detection.",
                desc2: "Participated in LLM fine-tuning, backend integration, and prompt engineering for Nestlé.",
                desc3: "Benchmarked multimodal LLMs (GPT-4o, Gemini 2.5) for worker safety monitoring.",
                tags: ["Python", "LangChain", "Azure", "OpenCV", "YOLO", "MLflow"]
            },
            gonvarri: {
                role: "Data Engineering Intern",
                company: "Gonvarri Industries",
                date: "Jul 2023 – Aug 2023",
                tooltip: "A leader in the transformation of flat steel and aluminum, providing metal solutions for the automotive, road safety, and solar energy sectors.",
                desc1: "Collaborated with R&D teams to understand industrial processes and initiatives.",
                desc2: "Performed time series analysis and data visualization in R to identify operational anomalies.",
                tags: ["Python", "R", "Forecast", "ggplot2"]
            }
        },
        education: {
            eduTitle: "Education",
            uoc: {
                degree: "MSc in Cybersecurity and Privacy (Technology Specialization)",
                university: "UOC (Universitat Oberta de Catalunya), Barcelona, Spain (Online)",
                date: "Expected June 2027",
                grade: "<strong>ECTS:</strong> 60",
                desc: "Integrating a security-first approach into engineering workflows alongside professional activity.",
                competencies: ["Software and Systems Security", "Security Architectures and Protocols", "Offensive Security and Pentesting"]
            },
            uni: {
                degree: "Bachelor of Science in Data Science and Engineering",
                university: "University of Oviedo, Gijón, Spain",
                date: "June 2025",
                grade: "<strong>ECTS:</strong> 240 <br> <strong>Grade:</strong> <strong>7.2/10.0</strong> (2:1 equivalent)",
                competencies: ["Artificial Intelligence", "Object-Oriented Programming", "Algorithmics", "Statistics", "Data Analysis", "Databases", "Machine Learning", "Deep Learning", "Data Engineering", "Distributed Systems", "Cryptography", "IoT", "Project Management", "NLP", "Cybersecurity"],
                abroad: "Erasmus+ Semester: University of Porto. Master-level coursework in English",
                thesis: "<strong>Final Thesis (10.0/10.0, Honors):</strong> Classification of endangered flying birds through fine-tuned YOLO model, achieving 0.80 F1 score."
            },
            school: {
                name: "Technological High School",
                center: "Colegio San Fernando, Avilés, Spain",
                date: "June 2021",
                grade: "<strong>Grade:</strong> <strong>9.0/10.0</strong>",
                ranking: "Among the top 100 Spanish colleges"
            },
            achievements: {
                title: "Achievements & More",
                winner: {
                    title: "Project Winner",
                    desc: "\"Application of Generative AI in Industrial Environments\" for Delta (<a href='https://iturcemigrupo.com/' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>Iturcermi Group</a>).",
                    link: "View LinkedIn Post"
                },
                certs: {
                    title: "Certifications",
                    list: "<li><a href='https://learn.microsoft.com/en-us/users/rubnpartepombo-6581/credentials/76c33d177be7a96f' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>Microsoft Certified: Azure Fundamentals (AZ-900)</a></li><li><strong>University of Oviedo Micro-credential:</strong> 'Secure Development in DevSecOps Environments' (6 ECTS) · Dec 2025.</li><li><a href='https://credentials.databricks.com/17118849-18d4-4d2c-a27f-9470ea8ff98c#acc.q0hlufGI' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>Generative AI Fundamentals (Databricks)</a></li><li><a href='https://www.scrumstudy.com/certification/verify?type=SFC&number=1012974' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>Scrum Fundamentals Certified</a></li>"
                }
            }
        },
        skills: {
            title: "Technical Skills",
            languages: "Languages",
            data: "Data & infra",
            ml: "ML & AI",
            languagesTags: ["Python", "R", "SQL", "Bash"],
            dataTags: ["Spark", "Kafka", "Airflow", "Docker", "Azure", "PostgreSQL", "Git", "Linux"],
            mlTags: ["PyTorch", "scikit-learn", "spaCy", "LangChain", "Transformers", "YOLO", "Pandas", "NumPy"]
        },
        projects: {
            title: "Side Projects",
            backHome: "← Back to home",
            pageTitle: "Side Projects — Ruben Parte Pombo",
            viewCode: "View Code",
            liveDemo: "Live Demo",
            iberbirds: {
                title: "IberBirds: Iberian Birds Classifier",
                desc: "Developed a computer vision application to identify 10 species of Iberian birds of prey and storks using a fine-tuned YOLO model. Deployed as a full-stack Dockerized app with React and FastAPI on Hugging Face Spaces.",
                tags: ["Python", "React", "FastAPI", "Docker", "YOLO", "Hugging Face"]
            },
            pipeline: {
                title: "Real Time User Data Pipeline",
                desc: "Built a real-time data pipeline for user sign-up data from an external API, covering ingestion, processing, storage, and automated visualization. Designed an interactive dashboard to present key insights from processed user data.",
                tags: ["Python", "Docker", "Kafka", "Airflow", "Spark"]
            },
            nlp: {
                title: "NLP Analysis of Spanish Recipes",
                desc: "Analyzed ingredient relationships in Spanish cuisine using NLP and graph theory to uncover culinary patterns. Built a graph network to visualize ingredient communities and identify key components using centrality metrics.",
                tags: ["Python", "SpaCy", "NetworkX", "Graph Theory"]
            },
            quantum: {
                title: "Quantum Algorithms Predict Bankruptcy",
                desc: "Solved a binary classification problem using quantum algorithms (QSVC, QNNs), earning a 10/10 grade. Explored embedding and dimensionality reduction methods, evaluating with Pennylane and IBM's quantum computers.",
                tags: ["Pennylane", "Qiskit", "IBM Quantum"]
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Reach out on LinkedIn or send a message below, I'll reply by email.",
            form: {
                email: "Your Email",
                emailPlaceholder: "you@example.com",
                subject: "Subject",
                subjectPlaceholder: "Project Inquiry",
                message: "Message",
                messagePlaceholder: "How can I help you?",
                btn: "Send Message",
                success: "Message sent successfully!",
                error: "Failed to send message. Please try again later.",
                rateLimit: "Please wait {min} more minute(s) before sending another message."
            }
        }
    },
    es: {
        title: "Ruben Parte Pombo - Ingeniero de Datos",
        nav: {
            background: "Formación",
            projects: "Proyectos",
            events: "Eventos",
            contact: "Contacto"
        },
        hero: {
            eyebrow: "Ingeniero de Datos · Asturias",
            title: "Ingeniero de Datos y Especialista en I+D",
            cta: "Ver proyectos"
        },
        home: {
            now: "Actualmente",
            roleCta: "Ver formación completa →",
            selectedWork: "Trabajo seleccionado",
            viewAllProjects: "Todos los proyectos →"
        },
        about: {
            title: "Sobre Mí",
            intro: "¡Hola! Soy Rubén, ingeniero de datos, graduado en Ciencia e Ingeniería de Datos y cursando un máster en Ciberseguridad.",
            text: "He trabajado en integraciones de IA generativa, ML industrial y MLOps, y suelo ir hacia problemas en el límite entre disciplinas—ahí es donde más me interesa.<br><br>Aprendo mejor de gente con más experiencia que yo, así que busco entornos donde eso sea posible."
        },
        background: {
            title: "Formación",
            pageTitle: "Formación — Ruben Parte Pombo",
            backHome: "← Volver al inicio"
        },
        events: {
            title: "Eventos y Hackathons",
            pageTitle: "Eventos — Ruben Parte Pombo",
            backHome: "← Volver al inicio",
            karumi: {
                title: "Karumi FDE AI Hackathon",
                date: "26/06/2026",
                desc: "Hackathon de forward-deployed engineering organizado por Karumi (YC F25). Construimos un agente a medida sobre su plataforma capaz de entrar en llamadas en directo y apoyar demostraciones de producto sin cortar el ritmo de la conversación."
            },
            refugio: {
                title: "REFUGIO Madrid",
                date: "27/06/2026",
                desc: "Encuentro en Madrid con perfiles muy sólidos del ecosistema tech español. El reto técnico giró en torno a búsqueda y optimización; remontamos hasta el segundo puesto en el tramo final. Fuera del código, disfruté de charlas que llevaba tiempo queriendo escuchar y de conocer a gente con ganas de construir."
            },
            porto: {
                title: "HackACity Porto 2023",
                date: "24/11/2023",
                desc: "Hackathon de un fin de semana en Oporto orientado a retos de ciudad inteligente. El equipo trabajó ideas basadas en datos para movilidad urbana y presentó un prototipo ante el jurado."
            },
            merkle: {
                title: "Merkle Datathon 2023",
                date: "Abril 2023",
                desc: "Datathon basado en datos urbanísticos de Gijón. Trabajamos con información abierta de la ciudad, contrastamos enfoques con el reto planteado y presentamos el análisis ante el jurado."
            }
        },
        experience: {
            title: "Experiencia Profesional",
            pageTitle: "Experiencia — Ruben Parte Pombo",
            backHome: "← Volver al inicio",
            arcelor: {
                role: "Ingeniero de I+D Junior",
                company: "ArcelorMittal Global R&D",
                date: "Ago 2025 – Presente",
                tooltip: "Empresa siderúrgica y minera líder mundial, que suministra productos de acero de calidad a diversos sectores, incluidos el automotriz, la construcción y el embalaje.",
                desc: "Diseño e implantación de ML y análisis de datos para detección de anomalías industriales.",
                tags: ["Python"]
            },
            ntt: {
                role: "Becario de Inteligencia Artificial",
                company: "NTT DATA Europe & Latam",
                date: "Sep 2024 – May 2025",
                tooltip: "Proveedor global de servicios de TI y consultoría, que ofrece una amplia gama de soluciones, desde servicios de asesoramiento hasta nube y ciberseguridad.",
                desc1: "Coautor de un <a href='https://www.sciencedirect.com/science/article/pii/S2352340925003427?via%3Dihub' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>artículo sobre el primer dataset de aves ibéricas</a> para detección de objetos.",
                desc2: "Participación en fine-tuning de LLMs, integración backend e ingeniería de prompts para Nestlé.",
                desc3: "Benchmarking de LLMs multimodales (GPT-4o, Gemini 2.5) para la monitorización de seguridad de los trabajadores.",
                tags: ["Python", "LangChain", "Azure", "OpenCV", "YOLO", "MLflow"]
            },
            gonvarri: {
                role: "Becario de Ingeniería de Datos",
                company: "Gonvarri Industries",
                date: "Jul 2023 – Ago 2023",
                tooltip: "Líder en la transformación de acero plano y aluminio, proporcionando soluciones metálicas para los sectores de automoción, seguridad vial y energía solar.",
                desc1: "Colaboración con equipos de I+D para entender procesos e iniciativas industriales.",
                desc2: "Análisis de series temporales y visualización de datos para identificar anomalías operativas.",
                tags: ["Python", "R", "Forecast", "ggplot2"]
            }
        },
        education: {
            eduTitle: "Educación",
            uoc: {
                degree: "Máster Universitario en Ciberseguridad y Privacidad (Especialización Tecnológica)",
                university: "UOC (Universitat Oberta de Catalunya), Barcelona, España (Online)",
                date: "Junio 2027 (Previsto)",
                grade: "<strong>ECTS:</strong> 60",
                desc: "Integrando un enfoque de seguridad (security-first) en flujos de ingeniería compaginado con actividad profesional.",
                competencies: ["Seguridad de Software y Sistemas", "Arquitecturas y Protocolos de Seguridad", "Seguridad Ofensiva y Pentesting"]
            },
            uni: {
                degree: "Grado en Ciencia e Ingeniería de Datos",
                university: "Universidad de Oviedo, Gijón, España",
                date: "Junio 2025",
                grade: "<strong>ECTS:</strong> 240 <br> <strong>Nota:</strong> <strong>7.2/10.0</strong>",
                competencies: ["Inteligencia Artificial", "POO", "Algoritmia", "Estadística", "Análisis de Datos", "Bases de Datos", "Machine Learning", "Deep Learning", "Ingeniería de Datos", "Sistemas Distribuidos", "Criptografía", "IoT", "Gestión de Proyectos", "NLP", "Ciberseguridad"],
                abroad: "Semestre Erasmus+: Universidade do Porto. Asignaturas de nivel Máster en inglés",
                thesis: "<strong>TFG (10.0/10.0, Matrícula de Honor):</strong> Clasificación de aves en peligro mediante modelo YOLO fine-tuned, logrando un F1-score de 0.80."
            },
            school: {
                name: "Bachillerato Tecnológico",
                center: "Colegio San Fernando, Avilés, España",
                date: "Junio 2021",
                grade: "<strong>Nota:</strong> <strong>9.0/10.0</strong>",
                ranking: "Entre los 100 mejores colegios de España"
            },
            achievements: {
                title: "Logros y Más",
                winner: {
                    title: "Ganador de Proyecto",
                    desc: "\"Aplicación de IA Generativa en Entornos Industriales\" para Delta (<a href='https://iturcemigrupo.com/' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>Grupo Iturcermi</a>).",
                    link: "Ver publicación en LinkedIn"
                },
                certs: {
                    title: "Certificaciones",
                    list: "<li><a href='https://learn.microsoft.com/en-us/users/rubnpartepombo-6581/credentials/76c33d177be7a96f' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>Microsoft Certified: Azure Fundamentals (AZ-900)</a></li><li><strong>Microcredencial Universidad de Oviedo:</strong> 'Desarrollo Seguro en Entornos DevSecOps' (6 ECTS) · Dic 2025.</li><li><a href='https://credentials.databricks.com/17118849-18d4-4d2c-a27f-9470ea8ff98c#acc.q0hlufGI' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>Fundamentos de IA Generativa (Databricks)</a></li><li><a href='https://www.scrumstudy.com/certification/verify?type=SFC&number=1012974' target='_blank' class='text-stone-900 font-semibold underline hover:text-stone-600'>Certificado en Fundamentos de Scrum</a></li>"
                }
            }
        },
        skills: {
            title: "Habilidades Técnicas",
            languages: "Lenguajes",
            data: "Datos e infra",
            ml: "ML e IA",
            languagesTags: ["Python", "R", "SQL", "Bash"],
            dataTags: ["Spark", "Kafka", "Airflow", "Docker", "Azure", "PostgreSQL", "Git", "Linux"],
            mlTags: ["PyTorch", "scikit-learn", "spaCy", "LangChain", "Transformers", "YOLO", "Pandas", "NumPy"]
        },
        projects: {
            title: "Proyectos Personales",
            backHome: "← Volver al inicio",
            pageTitle: "Proyectos Personales — Ruben Parte Pombo",
            viewCode: "Ver Código",
            liveDemo: "Demo en Vivo",
            iberbirds: {
                title: "IberBirds: Clasificador de Aves Ibéricas",
                desc: "Desarrollo de una aplicación de visión por computador para identificar 10 especies de aves rapaces y cigüeñas ibéricas usando un modelo YOLO fine-tuned. Desplegada como app full-stack Dockerizada con React y FastAPI en Hugging Face Spaces.",
                tags: ["Python", "React", "FastAPI", "Docker", "YOLO", "Hugging Face"]
            },
            pipeline: {
                title: "Pipeline de Datos de Usuarios en Tiempo Real",
                desc: "Construcción de un pipeline de datos en tiempo real para registros de usuarios desde API externa, cubriendo ingesta, procesamiento, almacenamiento y visualización. Diseño de dashboard interactivo para insights clave.",
                tags: ["Python", "Docker", "Kafka", "Airflow", "Spark"]
            },
            nlp: {
                title: "Análisis NLP de Recetas Españolas",
                desc: "Análisis de relaciones entre ingredientes en cocina española usando NLP y teoría de grafos para descubrir patrones. Construcción de red de grafos para visualizar comunidades e identificar componentes clave mediante métricas de centralidad.",
                tags: ["Python", "SpaCy", "NetworkX", "Graph Theory"]
            },
            quantum: {
                title: "Algoritmos Cuánticos para Predicción de Quiebra",
                desc: "Resolución de problema de clasificación binaria usando algoritmos cuánticos (QSVC, QNNs), obteniendo calificación 10/10. Exploración de métodos de embedding y reducción de dimensionalidad con Pennylane e IBM Quantum.",
                tags: ["Pennylane", "Qiskit", "IBM Quantum"]
            }
        },
        contact: {
            title: "Contacto",
            subtitle: "Ponte en contacto a través de LinkedIn o envía un mensaje a continuación, te responderé por correo electrónico.",
            form: {
                email: "Tu Email",
                emailPlaceholder: "tu@ejemplo.com",
                subject: "Asunto",
                subjectPlaceholder: "Consulta de Proyecto",
                message: "Message",
                messagePlaceholder: "¿En qué puedo ayudarte?",
                btn: "Enviar Mensaje",
                success: "¡Mensaje enviado con éxito!",
                error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
                rateLimit: "Por favor, espera {min} minuto(s) más antes de enviar otro mensaje."
            }
        }
    }
};