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
    ]
};

export { EXPERIENCE };