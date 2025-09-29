import type { Experience } from '../../types/layout';

const EXPERIENCE: Experience = {
    time: '3 años',
    languages: [
        {
            id: 'c', name: "C", label: "C",
            src: "https://skillicons.dev/icons?i=c"
        },
        {
            id: 'ts', name: "TS", label: "TS",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
            id: 'cs', name: "C#", label: "C#",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        },
        {
            id: 'java', name: "JAVA", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        {
            id: 'py', name: "Python", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
            id: 'js', name: "JavaScrit", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            id: 'kt', name: "Kotlin", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
        },
        {
            id: 'rb', name: "Ruby", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
        }
    ],//https://profile-readme-generator.com/es
    technologies: [
        {
            id: 'tsx', name: "React js", label: "React",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            id: 'vue', name: "Vue Js", label: "Vue",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        },
        {
            id: 'boots', name: "Bootstrap", label: "bootstrap",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
        {
            id: 'css', name: "Css", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
            id: 'net', name: ".Net", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
        },
        {
            id: 'git', name: "Git", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
            id: 'spring', name: "Spring", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
        },
        {
            id: 'nodejs', name: "NodeJS", label: "",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
            id: 'boots', name: "Bootstrap", label: "",
            src: ""
        },
        {
            id: 'boots', name: "Bootstrap", label: "",
            src: ""
        },
    ],
    companies: [
        {
            name: "WORD POS SOLUTIONS",
            time: 1,
            start: 'Ago 2022',
            end: 'Sep 2023',
            job_title: "Desarrollador Junior/Lider de proyecto",
            description: [
                "Diseño, desarrollo y soporte de soluciones de software bancario orientadas a transacciones seguras.",
                "Implementación y mantenimiento de aplicaciones para dispositivos POS utilizando C.",
                "Desarrollo de aplicaciones en Java (Android) enfocadas en operaciones financieras y procesos de pago.",
                "Aseguramiento de la calidad, estabilidad y cumplimiento de estándares en las soluciones entregadas."
            ],
        },
        {
            name: "Constructora MARVAL S.A.S",
            time: 2,
            start: 'Sep 2023',
            end: 'today',
            job_title: "Tecnico de Desarrollo",
            description: [
                "Brindar soporte técnico y funcional al CRM corporativo, garantizando su correcto funcionamiento y adaptación a las necesidades de la empresa.",
                "Desarrollar y mantener requerimientos del CRM, implementando mejoras en la lógica de negocio para optimizar procesos internos.",
                "Colaborar activamente con el equipo de desarrollo en el diseño y construcción de un software a la medida, contribuyendo a la definición y gestión de la lógica empresarial.",
                "Asegurar la integración y consistencia de las soluciones tecnológicas con los objetivos estratégicos de la compañía."
            ],
        }
    ]
};

const DEVELOPER = {
    first_name: "Yhon Jairo",
    last_name: "Ochoa Mayorga",
    email: "jhjairo816@gmail.com",
    telephone: 3203823364,
    age: 25,
    git: "@YhonJ8a",
    active: true
};

const REGEXP_JSON:RegExp = /"([^"]+)":\s*(.*?)/g;

export { EXPERIENCE, DEVELOPER, REGEXP_JSON };
