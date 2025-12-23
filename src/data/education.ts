import type { EducationItem } from "../types/Education";

export const educationData: EducationItem[] = [
    {
        date: "2019 - 2021",
        title: "Tecnicatura en Diseño Multimedia",
        institution: "UNA - Universidad Nacional de las Artes",
        description:
            "Formación integral en diseño gráfico, edicion editorial, desarrollo web, producción audiovisual y gestión de proyectos multimedia.",
        type: "Terciario",
        gradient: "from-purple-600 via-pink-600 to-rose-600",
        icon: "graduation",
        skills: [
            "Diseño Gráfico",
            "Desarrollo Web",
            "Audiovisual",
            "UX/UI",
            "Editorial",
        ],
    },
    {
        date: "2023",
        title: "Diplomatura en Educacion",
        institution: "UAI - Universidad Abierta Interamericana",
        description:
            'Títulos: "Diplomatura en Educación Popular" "Diplomatura en Estrategias, Recursos y Herramientas para Formadores',
        type: "Diplomatura",
        gradient: "from-blue-500 via-indigo-500 to-violet-500",
        icon: "certificate",
        skills: [
            "Liderazgo",
            "Gestión educativa",
            "Formación",
            "Investigación",
            "Habilidades socioemocionales",
        ],
    },
    {
        date: "2014 - 2019",
        title: "Perito Mercantil con especialización Contable e Impositiva",
        institution: 'Escuela de Comercio Nº 35 D.E. 21 "Leopoldo Marechal"',
        description:
            "Educación secundaria completa con orientación en ciencias económicas y matemáticas.",
        type: "Secundario",
        gradient: "from-cyan-500 via-blue-600 to-indigo-700",
        icon: "book",
        skills: [
            "Contabilidad",
            "Impositiva",
            "Mercantil",
            "Finanzas",
            "Auditoría",
        ],
    },
];
