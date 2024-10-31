import { Atom, BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Crop, Lightbulb, Pencil, Computer, Book, Rocket, Home, Inbox, Mail, PanelsTopLeft, Phone, Settings, Search, UserRound, UsersRound, Wrench, Workflow, Presentation } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "+200 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+50 completados",
    },
];

export const itemsNavbar = [
    {
        id: "home",
        title: "home",
        icon: <Home size={25} />,
        link: "#home",
    },
    {
        id: "about-me",
        title: "about me",
        icon: <UserRound size={25} />,
        link: "#about-me",
    },
    {
        id: "services",
        title: "services",
        icon: <BookText size={25} />,
        link: "#services",
    },
    {
        id: "portfolio",
        title: "portfolio",
        icon: <Briefcase size={25} />,
        link: "#portfolio",
    },
    {
        id: "contact",
        title: "contact",
        icon: <Mail size={25} />,
        link: "#contact",
    },
];


export const dataSlider = [
    {
        id: 1,
        url: "/1_carrusel.JPG",
    },
    {
        id: 2,
        url: "/slider-4.jpg",
    },
    
    {
        id: 4,
        url: "/4_carrusel.jpg",
    },
    
]

export const dataPortfolio = [
    {
        id: 1,
        title: "MVP Trasplantes UC Christus",
        image: "/logo-ucchristus.png",
        category: "web",
        urlGithub: "",
        urlDemo: "/Uc_Christus.mp4",
        description: "Frontend Developer en el desarrollo de un MVP de plataforma de gestión de trasplantes para UC Christus, donde las enfermeras pueden administrar y acceder rápidamente a los datos de los pacientes según el tipo de trasplante. Este proyecto, utilizó TypeScript, Next.js y Tailwind CSS para construir una interfaz intuitiva y eficiente. Además, empleó Yarn para la gestión de dependencias, Cypress para pruebas end-to-end y mantuvo el código limpio con Prettier y ESLint, asegurando calidad y facilidad de mantenimiento.",
        presentation: "",
    },
    {
        id: 2,
        title: "Asignación de Cursos por Gerencia",
        image: "/cursos.jpg",
        category: "automations",
        urlGithub: "",
        urlDemo: "/Auditoria.mp4",
        description: "Automatización en Excel con ExcelScript (TypeScript), que asigna cursos a empleados según su gerencia y cargo. Anteriormente, cada vez que se actualizaba la hoja base con todas las gerencias y cursos, era necesario crear manualmente hojas específicas y copiar las columnas de cursos correspondientes. Con esta automatización, al presionar un botón, se generan todas las hojas y cursos asignados automáticamente, optimizando el tiempo y eliminando tareas repetitivas.",
        presentation: "",    
    },
    {
        id: 3,
        title: "Citación de Empresas",
        image: "/citas.jpg",
        category: "automations",
        urlGithub: "",
        urlDemo: "/Citas_Empresas.mp4",
        description: "Automatización utilizando Excel, ExcelScript (TypeScript) y Power Automate para optimizar la citación de empresas contratistas, un proceso previamente manual y propenso a errores. Excel gestiona la base de datos de empresas, ExcelScript automatiza la generación de hojas de planificación según criterios de prioridad y incidentes, y Power Automate ejecuta el flujo de citación y el envío automático de citaciones. Esta solución asegura que todas las empresas sean citadas al menos una vez al año, prioriza aquellas con accidentes recientes y reduce significativamente el tiempo y los errores en la planificación de citaciones.",
        presentation: "",
    },
    {
        id: 4,
        title: "Envío de correos masivos",
        image: "/automatizacion_correos.jpg",
        category: "automations",
        urlGithub: "",
        urlDemo: "Seguimiento.mp4",
        description: "Automatización que utiliza Excel, ExcelScript (TypeScript) y Power Automate para optimizar el envío de correos electrónicos relacionados con acciones correctivas. Los scripts en Excel filtran y organizan automáticamente los datos de las acciones correctivas relevantes, mientras que Power Automate se encarga del envío masivo de correos, reduciendo el tiempo de procesamiento de 8 horas a unos minutos. Esta solución incluye un paso de previsualización para verificar destinatarios y contenido, asegurando precisión y reduciendo errores humanos en la implementación de las acciones correctivas.",
        presentation: "",
    },
    {
        id: 5,
        title: "Dashboard Flujo de Inventario",
        image: "/inventario.jpg",
        category: "data_analyst",
        urlGithub: "",
        urlDemo: "globe_italia.mp4",
        description: "Dashboard en Power BI que permite visualizar y rastrear el flujo de inventario por día a lo largo del tiempo. Esta herramienta facilita el monitoreo detallado de inventario y permite identificar tendencias, optimizando la gestión de stock y mejorando la toma de decisiones.",
        presentation: "/Presentación_Query_stock.pptx",
    },
    {   
        id: 6,
        title: "Dashboard de Gestión del Plan de Acción Mensual",
        image: "/Pam.jpg",
        category: "data_analyst",
        urlGithub: "",
        urlDemo: "Codelco.mp4",
        description: "Dashboard interactivo en Power BI para optimizar la gestión del Plan de Acción Mensual (PAM), integrando datos críticos como riesgos, acciones correctivas, tarjetas verdes y reportes de peligro. Esta solución permite consolidar y visualizar información en tiempo real, eliminando la carga manual de datos (aproximadamente 4 horas semanales) y ofreciendo una visión clara y precisa del estado de cada componente del PAM, mejorando la toma de decisiones y reduciendo errores.",
        presentation: "",
    },
    {
        id: 7,
        title: "Modelo Predictivo de Accidentes",
        image: "/ML_mina.jpg",
        category: "data_science",
        urlGithub: "",
        urlDemo: "Modelo_accidentes.mp4",
        description: "Modelo predictivo de accidentes con XGBoost para controlar riesgos críticos, categorías de accidentes y gerencias involucradas. La implementación en Streamlit permite una visualización interactiva de los resultados, facilitando simulaciones de escenarios 'what-if' en tiempo real. Las tablas resumen presentan probabilidades de accidentes y riesgos críticos, ayudando a una gestión proactiva de la seguridad mediante una interpretación clara y accesible de los datos.",
        presentation: "",
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Experimentado",
                value: 30,
            },
            {
                name: "React",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Mongo DB",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "Python",
                subtitle: "Basic",
                value: 60,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "PHP",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Django",
                subtitle: "Basic",
                value: 60,
            },
        ],
    },
];


export const serviceData = [
    {
        icon: <Pencil className="text-black dark:text-white"/>,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
        detalles: "este es el detalleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    },
    {
        icon: <Computer className="text-black dark:text-white"/>,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a las necesidades del cliente",
        detalles: "este es el detalleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    },
    {
        icon: < Workflow className="text-black dark:text-white"/>,
        title: "Automatizaciones",
        description: "Desarrollo de soluciones automatizadas para optimizar procesos repetitivos, reducir tiempos operativos y mejorar la eficiencia, adaptadas a las necesidades específicas del cliente.",
        detalles: "este es el detalleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    },
    {
        icon: <Search className="text-black dark:text-white"/>,
        title: "Análisis de Datos",
        description: "Obtención de insights, Dashboards interactivos y visualizaciones para explorar métricas e indicadores, para poder tomar decisiones estratégicas informadas.", 
        detalles: "este es el detalleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    },
    {
        icon: <Settings className="text-black dark:text-white"/>,
        title: "Ingeniería de Datos",
        description: "Diseño, construyo y mantengo infraestructuras de datos escalables. Recolecto, extraigo, proceso y transformo data desde diferentes servicios, integrándola para reportería, analítica avanzada y modelos predictivos.",
        detalles: "este es el detalleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    },
    {
        icon: <Atom className="text-black dark:text-white"/>,
        title: "Ciencia de Datos",
        description: "Aplico modelos de Machine Learning como regresión, clasificación, clustering, XGBoost y redes neuronales, analizando la data para obtener resultados coherentes, logrando que las decisiones estratégicas esten basadas en datos.",
        detalles: "este es el detalleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+569 65305755",
        link: "tel:+569 65305755",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/BenjaLeyton",
        link: "github.com/BenjaLeyton",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "benjamin.leyton@uc.cl",
        link: "mailto:benjamin.leyton@uc.cl",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];