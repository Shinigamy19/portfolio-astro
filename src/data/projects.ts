import type { Project } from "../types/Project";
import { projectTags } from "./projectTags";

export const projectsData: Project[] = [
    {
        title: "Una conversacion con El Roles",
        description:
            "Novela visual y Aventura conversacional realizada en processing.",
        image: "/Uccer.webp",
        tags: [projectTags.JAVA, projectTags.PROCESSING],
        category: "Videojuegos",
        github: "https://github.com/Shinigamy19",
        link: "https://shinigamy19.itch.io/",
        link2: "https://shinigamy19.itch.io/",
    },
    {
        title: "Centro de procesamiento de audio",
        description:
            "Programa para procesar audio, con vsts, efectos, filtros y pedales.",
        image: "/Pedales.webp",
        tags: [projectTags.PUREDATA],
        category: "Audiovisual",
        github: "https://github.com/Shinigamy19",
        link: "https://github.com/Shinigamy19",
    },
    {
        title: "Inmortal - Libro de Poemas",
        description:
            "Edición y diseño editorial completo de libro de poemas. Maquetación, ilustraciones y diseño de portada.",
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/220268106950343.5f9bc1d528994.jpg",
        tags: [projectTags.INDESIGN, projectTags.PHOTOSHOP],
        category: "Editorial",
        github: "#",
        link: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
    },
    {
        title: "Break Friends - Juego de Mesa",
        description:
            "Creación integral de juego de mesa: diseño de cartas, tablero, manual de reglas y empaquetado.",
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f35602106950343.5f9bc1d529241.jpg",
        tags: [projectTags.ILLUSTRATOR, projectTags.PHOTOSHOP],
        category: "Producto",
        github: "#",
        link: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
    },
    {
        title: "End Of Bioworld - Juego 2D",
        description:
            "Desarrollo completo de videojuego de plataformas 2D. Diseño de personajes, niveles y mecánicas de juego. Iniciado en Unity y migrado a Godot",
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8c7295106950343.5f9bc1d5299da.png",
        tags: [projectTags.UNITY, projectTags.GODOT, projectTags.CSHARP, projectTags.ASPRITES],
        category: "Videojuegos",
        github: "https://github.com/Shinigamy19",
        link: "https://shinigamy19.itch.io/end-of-bioworld",
    },
    {
        title: "Content Creation - TeamTube",
        description:
            "Edición de video y audio profesional, generación de thumbnails y contenido optimizado para redes sociales.",
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/313333106950343.5f9bc1d52a23e.png",
        tags: [projectTags.PREMIERE, projectTags.AFTER],
        category: "Audiovisual",
        github: "#",
        link: "https://www.youtube.com/@TeamTube_Official",
    },
    {
        title: "Desarrollo Web - Compuservice",
        description:
            "Diseño y desarrollo de sitios web responsivos para clientes, optimización SEO y mantenimiento.",
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d4d0ec106950343.5f9bc1d52a818.png",
        tags: [projectTags.NEXT, projectTags.TAILWIND, projectTags.WORDPRESS],
        category: "Web",
        github: "https://github.com/Shinigamy19",
        link: "https://compuservice.com.ar",
    },
    {
        title: "Remediación Nativa",
        description:
            "Proyecto ganador del premio innovación en OlimpiADA del Agua. Diseño de campaña y materiales comunicacionales.",
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5b6342106950343.5f9bc1d52ac4d.png",
        tags: [projectTags.PHOTOSHOP, projectTags.ILLUSTRATOR],
        category: "Gráfico",
        github: "#",
        link: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
    },
];
