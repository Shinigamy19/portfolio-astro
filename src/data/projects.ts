import type { Project } from "../types/Project";
import { projectTags } from "./projectTags";

export const projectsData: Project[] = [
    {
        title: "Nexo Digital",
        description:
            "Nexo Digital es una comunidad abierta para personas del mundo digital: desarrollo, diseño, edición, audio, domótica, tecnología, IA y más.",
        image:
            "/preview/nexo-digital.webp",
        tags: [projectTags.ASTRO, projectTags.CSS3, projectTags.TYPESCRIPT],
        category: "Web",
        link: "https://nexo-digital-pi.vercel.app/",
        title_en: "Nexo Digital",
        description_en: "Nexo Digital is an open community for people from the digital world: development, design, editing, audio, home automation, technology, AI and more.",
        title_pt: "Nexo Digital",
        description_pt: "Nexo Digital é uma comunidade aberta para pessoas do mundo digital: desenvolvimento, design, edição, áudio, domótica, tecnologia, IA e mais.",
    },
    {
        title: "Link Collection",
        description:
            "Aplicación móvil para la gestión organizada de enlaces. Desarrollada de manera dual con React Native y Android Nativo.",
        image:
            "/preview/link-collection.webp",
        tags: [projectTags.REACTNATIVE, projectTags.ANDROIDNATIVE],
        category: "Programación",
        link: "https://linkcollection.work/",
        title_en: "Link Collection",
        comingSoon: true,
        description_en: "Mobile application for organized link management. Dually developed with React Native and Native Android.",
        title_pt: "Link Collection",
        description_pt: "Aplicativo móvel para gestão organizada de links. Desenvolvido de forma dual com React Native e Android Nativo.",
    },
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
        title_pt: "Afk Bardo",
        description_pt: "Este é um experimento de narrativa processual e perda de tempo consciente. Realizado com Next.js e Tailwind CSS.",
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
        title_pt: "SVG Gallery",
        description_pt: "Página web para criar Svgs e compartilhá-los com a comunidade. Realizada com Next.js e Tailwind CSS.",
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
        title_pt: "Clone do Trello",
        description_pt: "Página clone do Trello com novas funcionalidades. Realizada com Next.js, React, TypeScript e Tailwind CSS.",
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
        title_pt: "Pomodoro Timer",
        description_pt: "Pomodoro colaborativo que funciona em conjunto com Discord e Twitch. Realizado com Next.js, Tailwind CSS, TypeScript, MongoDB e Discord.js.",
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
        title_pt: "CineEstrenos",
        description_pt: "Página web de Filmes e Séries em novos Cinemas e Plataformas realizada com Angular e Sass.",
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
        title_pt: "Gerador de QR",
        description_pt: "Gerador de QR realizado com HTML, CSS e JavaScript.",
    },
    {
        title: "El Amanecer de la tormenta - Novela",
        description:
            "Edición y diseño editorial. Maquetación, ilustraciones y diseño de portadas.",
        image:
            "/preview/el-amanecer-de-la-tormenta-mock.webp",
        tags: [projectTags.INDESIGN, projectTags.PHOTOSHOP, projectTags.ILLUSTRATOR],
        category: "Editorial",
        link: "https://bwlnk.com/9786316664136",
        behance: "https://www.behance.net/gallery/243892443/El-amanercer-de-la-tormenta",
        title_en: "The Dawn of the Storm - Novel",
        description_en: "Editorial edition and design. Layout, illustrations, and cover design.",
        title_pt: "O Amanhecer da Tempestade - Romance",
        description_pt: "Edição e design editorial. Diagramação, ilustrações e design de capas.",
    },
    {
        title: "Inmortal - Libro de Poemas",
        description:
            "Edición y diseño editorial completo de libro de poemas. Maquetación, ilustraciones y diseño de portada.",
        image:
            "/preview/inmortal-mock.webp",
        tags: [projectTags.INDESIGN, projectTags.PHOTOSHOP, projectTags.ILLUSTRATOR],
        category: "Editorial",
        behance: "https://www.behance.net/gallery/243893927/Inmortal-Libro-de-poemas",
        link: "https://www.amazon.es/Inmortal-Libro-poemas-Jesica-Ledesma-ebook/dp/B07M7LT5WL/ref=sr_1_4?s=books&sr=1-4",
        title_en: "Immortal - Book of Poems",
        description_en: "Complete editorial edition and design of a book of poems. Layout, illustrations, and cover design.",
        title_pt: "Imortal - Livro de Poemas",
        description_pt: "Edição e design editorial completo de livro de poemas. Diagramação, ilustrações e design de capa.",
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
        title_pt: "Break Friends - Jogo de Tabuleiro",
        description_pt: "Criação integral de jogo de tabuleiro: design de cartas, tabuleiro, manual de regras e embalagem.",
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
        title_pt: "Design de Logos",
        description_pt: "Criação de logos como freelancer para várias empresas.",
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
        title_pt: "A caverna das mãos",
        description_pt: "Edição de artigo de revista científica sobre a caverna das mãos realizada para Arqueólogos Argentinos.",
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
        title_pt: "End Of Bioworld - Jogo 2D",
        description_pt: "Desenvolvimento completo de videogame de plataforma 2D. Design de personagens, níveis e mecânicas de jogo. Migrado do Unity para o Godot.",
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
        title_pt: "Tutoriais de Processing",
        description_pt: "Tutoriais de Processing para iniciantes no YouTube.",
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
        title_pt: "Tutoriais de Batch",
        description_pt: "Tutoriais de Batch para iniciantes no YouTube.",
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
        title_pt: "Uma conversa com El Roles",
        description_pt: "Visual novel e aventura conversacional realizada em Processing.",
    },
    {
        title: "Pedalera con instrumentos midi",
        description:
            "Programa para procesar audio con instrumentos midi y pedales.",
        image: "/preview/purr-arduino.webp",
        tags: [projectTags.PUREDATA, projectTags.ARDUINO],
        category: ["Audiovisual", "Programación"],
        github: "https://github.com/Shinigamy19/proyecto-final-purr-arduino",
        title_en: "Pedalera with midi instruments",
        description_en: "Program to process audio with midi instruments and pedals.",
        title_pt: "Pedaleira com instrumentos midi",
        description_pt: "Programa para processar áudio com instrumentos midi e pedais.",
    },
    {
        title: "Centro de procesamiento de audio",
        description:
            "Programa para procesar audio, con vsts, efectos, filtros y pedales.",
        image: "/preview/pedales.webp",
        tags: [projectTags.PUREDATA, projectTags.ARDUINO],
        category: ["Audiovisual", "Programación"],
        github: "https://github.com/Shinigamy19/Procesamiento-de-sonido-pedales-e-instrumentos",
        title_en: "Audio Processing Center",
        description_en: "Program to process audio, with VSTs, effects, filters, and pedals.",
        title_pt: "Centro de processamento de áudio",
        description_pt: "Programa para processar áudio, com VSTs, efeitos, filtros e pedais.",
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
        title_pt: "Código DEIN",
        description_pt: "Página web da empresa Código DEIN feita com HTML, CSS, JavaScript e Tailwind CSS.",
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
        title_pt: "Blog Shinigamy19",
        description_pt: "Blog pessoal realizado com HTML, CSS, JavaScript, JQuery e Bootstrap.",
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
        title_pt: "Sistema Policial",
        description_pt: "Sistema Policial em Java para controle de esquadrões.",
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
        title_pt: "Calculadora",
        description_pt: "Calculadora em Python com tkinter.",
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
        title_pt: "Sistema de Tickets - Jogo da Velha - Conversor de Temperatura",
        description_pt: "Sistema de Tickets - Jogo da Velha - Conversor de Temperatura em Python com tkinter.",
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
        title_pt: "Número inteiro fatorial",
        description_pt: "Programa em Python que calcula o fatorial de um número inteiro.",
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
        title_pt: "Adivinhe o número",
        description_pt: "Jogo de adivinhar o número em Python e Java.",
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
        title_pt: "Batalha Viking",
        description_pt: "Batalha Viking é uma aventura conversacional programada em C++.",
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
        title_pt: "Paint Brush",
        description_pt: "Ferramenta de pintura realizada em Processing.",
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
        title_pt: "Pikachu",
        description_pt: "Pikachu com PImage. Realizada em Processing.",
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
        title_pt: "Peça Visual",
        description_pt: "Peça visual em formato de papel de parede. Realizada em Processing.",
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
        title_pt: "Osciladores",
        description_pt: "Osciladores de áudio para Pure Data.",
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
        title_pt: "Quebra-cabeça",
        description_pt: "Quebra-cabeça com temática de anime realizado com HTML, CSS e JS.",
    },
];
