import type { Project } from "../types/Project";
import { projectTags } from "./projectTags";

export const projectsData: Project[] = [
    {
        title: "Afk Bardo",
        description:
            "Este es un experimento de narrativa procesal y pérdida de tiempo consciente. Realizado con Next.js y Tailwind CSS.",
        image:
            "/preview/afk-bardo.webp",
        tags: [projectTags.NEXT, projectTags.TAILWIND, projectTags.TYPESCRIPT, projectTags.REACT],
        category: "Web",
        comingSoon: true,
        title_en: "Afk Bardo",
        description_en: "This is an experiment of procedural narrative and conscious time loss. Built with Next.js and Tailwind CSS.",
    },
    {
        title: "SVG Gallery",
        description:
            "Pagina web para crear Svgs y compartirlo con la comunidad. Realizada con Next.js y Tailwind CSS.",
        image:
            "/preview/svg-gallery.webp",
        tags: [projectTags.NEXT, projectTags.TAILWIND, projectTags.TYPESCRIPT, projectTags.REACT, projectTags.PRISMA, projectTags.MYSQL],
        category: "Web",
        comingSoon: true,
        title_en: "SVG Gallery",
        description_en: "Website for creating Svgs and sharing them with the community. Built with Next.js and Tailwind CSS.",
    },
    {
        title: "Trello Clone",
        description:
            "Pagina clon de trello con nuevas funcionalidades. Realizada con Next.js, React, TypeScript y Tailwind CSS.",
        image:
            "/preview/trello-clone.webp",
        tags: [projectTags.NEXT, projectTags.TAILWIND, projectTags.TYPESCRIPT, projectTags.REACT],
        category: "Web",
        comingSoon: true,
        title_en: "Trello Clone",
        description_en: "Trello clone with new features. Built with Next.js, React, TypeScript and Tailwind CSS.",
    },
    {
        title: "Pomodoro Timer",
        description:
            "Pomodoro colaborativo que funciona en conjunto con Discord y Twitch. Realizado con Next.js, Tailwind CSS, TypeScript, MongoDB y Discord.js.",
        image:
            "/preview/pomodoro.webp",
        tags: [projectTags.NEXT, projectTags.TAILWIND, projectTags.TYPESCRIPT, projectTags.MONGODB, projectTags.DISCORDJS],
        category: "Web",
        comingSoon: true,
        title_en: "Pomodoro Timer",
        description_en: "Collaborative Pomodoro timer that works in conjunction with Discord and Twitch. Built with Next.js, Tailwind CSS, TypeScript, MongoDB and Discord.js.",
    },
    {
        title: "CineEstrenos",
        description:
            "Pagina web de Películas y Series en nuevas Cines y Plataformas realizada con Angular y Sass.",
        image:
            "/preview/cineestreno.webp",
        tags: [projectTags.ANGULAR, projectTags.SASS, projectTags.JSON],
        category: "Web",
        link: "https://angular-movies-g9qq.vercel.app/",
        title_en: "CineEstrenos",
        description_en: "Website for Movies and Series in new Cinemas and Platforms made with Angular and Sass.",
    },
    {
        title: "Qr Generator",
        description:
            "Generador de Qr realizado con HTML, CSS y JavaScript.",
        image:
            "/preview/qr-generator.webp",
        tags: [projectTags.HTML, projectTags.CSS, projectTags.JAVASCRIPT],
        category: "Web",
        link: "https://qr-generator-rust-seven.vercel.app/", 
        title_en: "Qr Generator",
        description_en: "Qr generator made with HTML, CSS and JavaScript.",
    },
    {
        title: "El Amanecer de la tormenta - Novela",
        description:
            "Edición y diseño editorial. Maquetación, ilustraciones y diseño de portadas.",
        image:
            "/preview/el-amanecer-de-la-tormenta-mock.webp",
        tags: [projectTags.INDESIGN, projectTags.PHOTOSHOP, projectTags.ILLUSTRATOR],
        category: "Editorial",
        link: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
        behance: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
        title_en: "The Dawn of the Storm - Novel",
        description_en: "Editorial edition and design. Layout, illustrations, and cover design.",
    },
    {
        title: "Inmortal - Libro de Poemas",
        description:
            "Edición y diseño editorial completo de libro de poemas. Maquetación, ilustraciones y diseño de portada.",
        image:
            "/preview/inmortal-mock.webp",
        tags: [projectTags.INDESIGN, projectTags.PHOTOSHOP, projectTags.ILLUSTRATOR],
        category: "Editorial",
        behance: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
        link: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
        title_en: "Immortal - Book of Poems",
        description_en: "Complete editorial edition and design of a book of poems. Layout, illustrations, and cover design.",
    },
    {
        title: "Break Friends - Juego de Mesa",
        description:
            "Creación integral de juego de mesa: diseño de cartas, tablero, manual de reglas y empaquetado.",
        image:
            "/preview/juego-de-mesa.webp",
        tags: [projectTags.ILLUSTRATOR, projectTags.PHOTOSHOP],
        category: "Producto",
        behance: "https://www.behance.net/gallery/152318265/Break-Friends",
        title_en: "Break Friends - Board Game",
        description_en: "Integral creation of a board game: card design, board, rule manual, and packaging.",
    },
    {
        title: "Diseño de Logos",
        description:
            "Creacion de logos como freelance para varias empresas.",
        image:
            "/preview/logos-mock.webp",
        tags: [projectTags.ILLUSTRATOR, projectTags.PHOTOSHOP],
        category: "Editorial",
        behance: "https://www.behance.net/gallery/180431813/Logos",
        title_en: "Logo Design",
        description_en: "Logo design for various companies as a freelancer.",
    },
    {
        title: "La cueva de las manos",
        description:
            "Edición de Articulo de revista científica sobre la cueva de las manos realizada para Arqueologos Argentinos.",
        image:
            "/preview/la-cueva-de-las-manos.webp",
        tags: [projectTags.ILLUSTRATOR, projectTags.PHOTOSHOP],
        category: "Editorial",
        behance: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
        link: "https://www.behance.net/gallery/106950343/Inmortal-Libro-de-Poemas",
        title_en: "The Cave of the Hands",
        description_en: "Article edition for Arqueologos Argentinos.",
    },
    {
        title: "End Of Bioworld - Juego 2D",
        description:
            "Desarrollo completo de videojuego de plataformas 2D. Diseño de personajes, niveles y mecánicas de juego. Migrado de Unity a Godot.",
        image:
            "/preview/end-of-bioworld.webp",
        tags: [projectTags.UNITY, projectTags.GODOT, projectTags.CSHARP, projectTags.ASPRITES],
        category: "Videojuegos",
        behance: "https://www.behance.net/gallery/241093809/End-Of-Bioworld",
        link: "https://shinigamy19.itch.io/end-of-bioworld",
        title_en: "End Of Bioworld - 2D Game",
        description_en: "Complete development of a 2D platformer. Character design, levels, and mechanics. Started in Unity and migrated to Godot.",
    },
    {
        title: "Tutoriales de Processing",
        description:
            "Tutoriales de Processing para principiantes en YouTube.",
        image:
            "/preview/curso-processing.webp",
        tags: [projectTags.JAVA, projectTags.PROCESSING, projectTags.OBSSTUDIO, projectTags.PREMIERE],
        category: ["Audiovisual", "Programación"],
        github: "https://github.com/Shinigamy19/Menu-de-atajos-tutorial",
        youtube: "https://studio.youtube.com/playlist/PLALOGywm7ZvLAI-JL7pjyrQlSPdTWvYNv/edit",
        title_en: "Processing Tutorials",
        description_en: "Processing tutorials for beginners on YouTube.",
    },
    {
        title: "Tutoriales de Batch",
        description:
            "Tutoriales de Batch para principiantes en YouTube.",
        image:
            "/preview/tutoriales-batch.webp",
        tags: [projectTags.BASH, projectTags.OBSSTUDIO, projectTags.PREMIERE],
        category: ["Audiovisual", "Programación"],
        github: "https://github.com/Shinigamy19/Menu-de-atajos-tutorial",
        youtube: "https://studio.youtube.com/playlist/PLALOGywm7ZvLAI-JL7pjyrQlSPdTWvYNv/edit",
        title_en: "Batch Tutorials",
        description_en: "Batch tutorials for beginners on YouTube.",
    },
    {
        title: "Una conversacion con El Roles",
        description:
            "Novela visual y Aventura conversacional realizada en processing.",
        image: "/preview/uccer.webp",
        tags: [projectTags.JAVA, projectTags.PROCESSING],
        category: ["Videojuegos", "Programación"],
        github: "https://github.com/Shinigamy19/Una-Conversacion-Con-El-Roles",
        link: "https://shinigamy19.itch.io/una-conversacion-con-el-roles",
        title_en: "A Conversation with El Roles",
        description_en: "Visual novel and conversational adventure made in Processing.",
    },
    {
        title: "Centro de procesamiento de audio",
        description:
            "Programa para procesar audio, con vsts, efectos, filtros y pedales.",
        image: "/preview/pedales.webp",
        tags: [projectTags.PUREDATA, projectTags.ARDUINO],
        category: ["Audiovisual", "Programación"],
        github: "https://github.com/Shinigamy19",
        title_en: "Audio Processing Center",
        description_en: "Program to process audio, with VSTs, effects, filters, and pedals.",
    },
    {
        title: "Codigo DEIN",
        description:
            "Pagina web de la empresa Codigo DEIN.",
        image:
            "/preview/codigo-dein.webp",
        tags: [projectTags.HTML, projectTags.CSS, projectTags.JAVASCRIPT, projectTags.TAILWIND],
        category: "Web",
        github: "https://github.com/Shinigamy19/Proyecto-final-html-css",
        link: "https://shinigamy19.github.io/Proyecto-final-html-css/",
        title_en: "Codigo DEIN",
        description_en: "Website for the company Codigo DEIN built with HTML, CSS, JavaScript and Tailwind CSS.",
    },
    {
        title: "Blog Shinigamy19",
        description:
            "Blog personal realizado con HTML, CSS, JavaScript, JQuery y Bootstrap",
        image:
            "/preview/blog-shinigamy19.webp",
        tags: [projectTags.HTML, projectTags.CSS, projectTags.JAVASCRIPT, projectTags.JQUERY, projectTags.BOOTSTRAP],
        category: "Web",
        github: "https://github.com/Shinigamy19/Blog-Shinigamy19",
        link: "https://shinigamy19.github.io/Blog-Shinigamy19/",
        title_en: "Shinigamy19 Blog",
        description_en: "Personal blog built with HTML, CSS, JavaScript, JQuery, and Bootstrap.",
    },
    {
        title: "Sistema Policial",
        description:
            "Sistema Policial en Java para control de escuadrones.",
        image:
            "/preview/sistema-policial.webp",
        tags: [projectTags.JAVA],
        category: "Programación",
        github: "https://github.com/Shinigamy19/Policia-Java-Tecno-3F",
        title_en: "Police System",
        description_en: "Police System in Java for control of squads.",
    },
    {
        title: "Calculadora",
        description:
            "Calculadora en Python con tkinter",
        image:
            "/preview/calculadora.webp",
        tags: [projectTags.PYTHON],
        category: "Programación",
        github: "https://github.com/Shinigamy19/calculadora-phyton",
        title_en: "Calculator",
        description_en: "Calculator in Python with tkinter.",
    },
    {
        title: "Sistema de Tickets - Tateti - Conversor de temperatura",
        description:
            "Sistema de Tickets - Tateti - Conversor de temperatura en Python realizado con tkinter para trabajo final de un curso de programación.",
        image:
            "/preview/tateti.webp",
        tags: [projectTags.PYTHON],
        category: "Programación",
        github: "https://github.com/Shinigamy19/Trabajo-Final-Phyton",
        title_en: "Ticket System - Tic Tac Toe - Temperature Converter",
        description_en: "Ticket System - Tic Tac Toe - Temperature Converter in Python with tkinter.",
    },
    {
        title: "Numero entero factorial",
        description:
            "Programa en Python que calcula el factorial de un numero entero.",
        image:
            "/preview/numero-entero.webp",
        tags: [projectTags.PYTHON],
        category: "Programación",
        github: "https://github.com/Shinigamy19/Numero-Entero-Factorial",
        title_en: "Number Integer Factorial",
        description_en: "Number Integer Factorial in Python.",
    },
    {
        title: "Adivina el numero",
        description:
            "Juego de adivinar el numero en Python y Java.",
        image:
            "/preview/adivina-el-numero.webp",
        tags: [projectTags.PYTHON, projectTags.JAVA],
        category: "Programación",
        github: ["https://github.com/Shinigamy19/Adivina-el-numero-java", "https://github.com/Shinigamy19/Adivina-el-numero-phyton"],
        title_en: "Guess the number",
        description_en: "Guess the number in Python with tkinter.",
    },
    {
        title: "Batalla Vikinga",
        description:
            "Batalla Vikinga es una aventura conversacional programada en C++",
        image:
            "/preview/batalla-vikinga.webp",
        tags: [projectTags.CPP],
        category: ["Videojuegos", "Programación"],
        github: "https://github.com/Shinigamy19/Batalla-vikinga",
        title_en: "Viking Battle",
        description_en: "Viking Battle is a conversational adventure programmed in C++.",
    },
    {
        title: "Paint Brush",
        description:
            "Paint brush. Realizado en Processing.",
        image:
            "/preview/paint-brush.webp",
        tags: [projectTags.JAVA, projectTags.PROCESSING],
        category: "Programación",
        github: "https://github.com/Shinigamy19/Paint-Brush",
        title_en: "Paint Brush",
        description_en: "Paint brush tool. Made in Processing.",
    },
    {
        title: "Pikachu",
        description:
            "Pikachu con PImage. Realizada en Processing.",
        image:
            "/preview/pikachu.webp",
        tags: [projectTags.JAVA, projectTags.PROCESSING],
        category: "Programación",
        github: "https://github.com/Shinigamy19/Pikachu-Processing",
        title_en: "Pikachu",
        description_en: "Pikachu with PImage. Made in Processing.",
    },
    {
        title: "Pieza visual",
        description:
            "Pieza visual en formato de papel tapiz. Realizada en Processing.",
        image:
            "/preview/papeltapiz.webp",
        tags: [projectTags.JAVA, projectTags.PROCESSING],
        category: "Programación",
        github: "https://github.com/Shinigamy19/Papel-Tapiz",
        title_en: "Visual Piece",
        description_en: "Visual piece in wallpaper format. Made in Processing.",
    },
    {
        title: "Ociladores",
        description:
            "Ociladores de audio para Pure Data.",
        image:
            "/preview/osciladores.webp",
        tags: [projectTags.PUREDATA],
        category: ["Audiovisual", "Programación"],
        github: "https://github.com/Shinigamy19/Osciladores",
        title_en: "Oscillators",
        description_en: "Audio oscillators for Pure Data.",
    },
    {
        title: "Rompecabezas",
        description:
            "Rompecabezas con tematica anime realizado con html, css y js.",
        image:
            "/preview/rompecabezas.webp",
        tags: [projectTags.HTML, projectTags.CSS, projectTags.JAVASCRIPT, projectTags.JQUERY],
        category: ["Videojuegos", "Web"],
        github: "https://github.com/Shinigamy19/Rompecabezas-html",
        link: "https://shinigamy19.github.io/Rompecabezas-html/",
        title_en: "Puzzle",
        description_en: "Anime-themed puzzle game made with HTML, CSS, and JS.",
    },
];
