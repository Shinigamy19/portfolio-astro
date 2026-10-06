export const languages = {
  es: "Español",
  en: "English",
  pt: "Português",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "nav.menu": "Menú",
    "projects.title": "Proyectos",
    "projects.all": "Todos",
    "projects.code": "Código",
    "projects.preview": "Vista Previa",
    "projects.design": "Diseño",
    "projects.videos": "Videos",
    "projects.comingSoon": "Próximamente",
    "projects.playstore": "Play Store",
    "projects.playstoreSoon": "Play Store · Próximamente",
    "projects.npm": "Paquete",
    "projects.featured": "Destacado",
    "about.title": "Sobre mí",
    "buttons.showMore": "Ver más",
    "buttons.showLess": "Ver menos",
    "education.courses": "Cursos y Certificaciones",
    "education.showMore": "Ver más cursos",
    "education.showLess": "Ver menos cursos",
    "skills.achievements": "Logros Destacados",
    "categories.editorial": "Editorial",
    "categories.producto": "Producto",
    "categories.videojuegos": "Videojuegos",
    "categories.audiovisual": "Audiovisual",
    "categories.app": "App",
    "categories.web": "Web",
    "categories.programacion": "Programación",
    "categories.diseno": "Diseño",
    "categories.educacion": "Educación",
    "categories.otros": "Otros",
    "contact.name": "Nombre",
    "contact.email": "Correo Electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "¡Gracias por tu mensaje! Te responderé pronto.",
    "contact.error": "No se pudo enviar. Intenta nuevamente más tarde.",
    "contact.emailError": "Por favor, ingresa un correo válido.",
    "contact.confirmEmail": "Confirmar Correo Electrónico",
    "contact.emailsDoNotMatch": "Los correos electrónicos no coinciden.",
    "footer.rights": "Todos los derechos reservados.",
    "webkit.title": "Webkit del Portafolio",
    "webkit.description":
      "Referencia del design system — tokens, iconos y componentes usados por shinigamy19.tech",
    "webkit.back": "Volver al portafolio",
    "webkit.subtitle":
      "Referencia del design system — tokens, iconos y componentes que usa shinigamy19.tech",
    "webkit.meta":
      "{icons} iconos · {tags} etiquetas de proyecto · {groups} grupos de habilidades — todo renderizado desde fuentes de datos en vivo, nunca una lista duplicada.",
    "webkit.section.colors": "Tokens de color",
    "webkit.section.typography": "Tipografía",
    "webkit.section.icons": "Iconos",
    "webkit.section.tagsSkills": "Etiquetas y habilidades",
    "webkit.section.backgrounds": "Fondos y efectos",
    "webkit.section.components": "Componentes",
    "webkit.colors.brandGradient": "Gradiente de marca",
    "webkit.colors.brandGradientDesc":
      "Barra de progreso de scroll y subrayado de TitleSection —",
    "webkit.colors.skillPurple": "Morado de badge de habilidad",
    "webkit.colors.skillPurpleDesc":
      "Pills de habilidad en Habilidades.astro —",
    "webkit.colors.skillPurpleSame": "(mismo color en claro y oscuro)",
    "webkit.colors.sampleSkill": "Habilidad de ejemplo",
    "webkit.colors.heroLight": "Radial de hero (claro)",
    "webkit.colors.heroLightDesc":
      "Fondo de página en Layout.astro, forzado a claro —",
    "webkit.colors.heroLightTail": "sobre blanco",
    "webkit.colors.lightPanel": "Panel de ejemplo claro",
    "webkit.colors.heroDark": "Radial de hero (oscuro)",
    "webkit.colors.heroDarkDesc":
      "Fondo de página en Layout.astro, forzado a oscuro —",
    "webkit.colors.heroDarkTail": "sobre gray-950",
    "webkit.colors.darkPanel": "Panel de ejemplo oscuro",
    "webkit.colors.expCategories": "Colores de categorías de experiencia",
    "webkit.colors.expCategoriesDesc": "Mapa de tokens copiado de",
    "webkit.colors.expCategoriesTail":
      "categoryColors — claro (forzado) y oscuro (forzado) lado a lado",
    "webkit.colors.light": "Claro",
    "webkit.colors.dark": "Oscuro",
    "webkit.colors.eduGradients": "Gradientes de educación",
    "webkit.colors.eduGradientsDesc": "Importado de",
    "webkit.colors.eduGradientsTail":
      "— cada tarjeta usa bg-gradient-to-br + la clase de gradiente de abajo",
    "webkit.typography.desc":
      "Pesos de Roboto usados en todo el sitio — 400 (cuerpo), 500 (medium), 700 (bold) — importados vía",
    "webkit.typography.descTail": "en Layout.astro",
    "webkit.typography.h2Label":
      "h2 — estilo TitleSection · text-3xl font-semibold · peso 500",
    "webkit.typography.h2Sample": "Ejemplo de encabezado de sección",
    "webkit.typography.bodyLabel": "Cuerpo · peso 400",
    "webkit.typography.bodySample":
      "El texto del cuerpo usa Roboto 400 en el tamaño base con interlineado relajado. Es el estilo de párrafo por defecto en las secciones del portafolio — descripciones, texto de sobre mí y contenido de tarjetas.",
    "webkit.typography.mediumLabel": "Medium · peso 500",
    "webkit.typography.mediumSample":
      "Peso medium para etiquetas de navegación, fechas y texto inline enfatizado.",
    "webkit.typography.smallLabel":
      "Texto pequeño / de etiqueta · peso 500–700 · text-xs",
    "webkit.typography.tagPill": "Pill de etiqueta · medium",
    "webkit.typography.category": "Categoría · semibold",
    "webkit.typography.date": "Fecha · bold",
    "webkit.icons.desc": "Auto-descubiertos con",
    "webkit.icons.descMid":
      "— {icons} componentes, ordenados alfabéticamente. Las notas \"iconMap\" muestran qué claves de tech-tag resuelven al componente en",
    "webkit.icons.descEnd": ".",
    "webkit.icons.techTags": "Iconos de tech-tags",
    "webkit.icons.techTagsDesc": "Cada clave de",
    "webkit.icons.techTagsDescTail":
      "con su badge real de projectTags (clase + icono), el mismo patrón que usa Proyectos.astro",
    "webkit.icons.uiIcon": "Icono UI",
    "webkit.tagsSkills.desc":
      "{tags} etiquetas de proyecto · {groups} grupos de habilidades — renderizados desde",
    "webkit.tagsSkills.descAnd": "y",
    "webkit.tagsSkills.projectTags": "Etiquetas de proyecto",
    "webkit.backgrounds.heroRadial": "Gradiente radial de hero",
    "webkit.backgrounds.heroRadialDesc":
      "Reproducido desde Layout.astro — el fondo de página completo detrás de cada sección",
    "webkit.backgrounds.backdropSample":
      "Muestra del fondo del sitio (sigue el tema)",
    "webkit.backgrounds.underline": "Subrayado de TitleSection",
    "webkit.backgrounds.underlineDesc":
      "Barra con gradiente de marca bajo cada título de sección — se anima a 80px al revelarse",
    "webkit.backgrounds.skillPanel":
      "Panel con gradiente de sección de habilidades",
    "webkit.backgrounds.skillPanelDesc":
      "Panel de logros de Habilidades.astro — lavado púrpura/azul en claro, base slate en oscuro",
    "webkit.backgrounds.achievementsSample": "Muestra del panel de logros",
    "webkit.backgrounds.badgeConic": "Gradiente cónico de badge",
    "webkit.backgrounds.badgeConicDesc":
      "Anillo cónico giratorio de Badge.astro —",
    "webkit.backgrounds.badgeAvailable": "Disponible para proyectos",
    "webkit.backgrounds.tabActive": "Estado activo de pestaña de categoría",
    "webkit.backgrounds.tabActiveDesc":
      "Pestañas de filtro de proyectos de Proyectos.astro — el activo usa blue-600",
    "webkit.backgrounds.active": "Activo",
    "webkit.backgrounds.inactive": "Inactivo",
    "webkit.backgrounds.scrollBar": "Barra de progreso de scroll",
    "webkit.backgrounds.scrollBarDesc":
      "Barra fija superior en Layout.astro — azul → púrpura → cyan, 3px de alto",
    "webkit.backgrounds.navPill": "Pill de nav con backdrop-blur",
    "webkit.backgrounds.navPillDesc":
      "Nav de escritorio de Header.astro — white/70 o gray-900/60 con backdrop-blur-md",
    "webkit.backgrounds.nav": "Nav",
    "webkit.backgrounds.links": "Enlaces",
    "webkit.components.desc": "Imports en vivo desde",
    "webkit.components.descTail": "cuando es posible",
    "webkit.components.linkButtonDesc": "Import en vivo — href=\"#\"",
    "webkit.components.projectLink": "Enlace de proyecto",
    "webkit.components.badgeDesc":
      "Import en vivo — anillo conic-gradient + contenido del slot",
    "webkit.components.openToWork": "Abierto a propuestas",
    "webkit.components.titleSectionDesc":
      "Import en vivo — envuelto en .revealed para que el subrayado se renderice",
    "webkit.components.sampleSection": "Sección de ejemplo",
    "webkit.components.tabStaticDesc":
      "Copia de markup estática — las pestañas de Proyectos.astro no tienen componente independiente; clases en línea",
    "webkit.components.all": "Todas",
    "webkit.components.tagPillDesc":
      "Desde los datos de projectTags — primera entrada, mismo patrón que Proyectos.astro",
    "webkit.footer.generated":
      "Generado desde fuentes de datos del portafolio · No es un archivo de diseño separado",
    "webkit.footer.staticRef": "Referencia estática ·",
    "webkit.footer.backHome": "Volver a shinigamy19.tech",
  },
  en: {
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About Me",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "projects.title": "Projects",
    "projects.all": "All",
    "projects.code": "Code",
    "projects.preview": "Preview",
    "projects.design": "Design",
    "projects.videos": "Videos",
    "projects.comingSoon": "Coming Soon",
    "projects.playstore": "Play Store",
    "projects.playstoreSoon": "Play Store · Coming Soon",
    "projects.npm": "Package",
    "projects.featured": "Featured",
    "about.title": "About Me",
    "buttons.showMore": "Show More",
    "buttons.showLess": "Show Less",
    "education.courses": "Courses and Certifications",
    "education.showMore": "Show more courses",
    "education.showLess": "Show less courses",
    "skills.achievements": "Key Achievements",
    "categories.editorial": "Editorial",
    "categories.producto": "Product",
    "categories.videojuegos": "Videogames",
    "categories.audiovisual": "Audiovisual",
    "categories.app": "App",
    "categories.web": "Web",
    "categories.programacion": "Programming",
    "categories.diseno": "Design",
    "categories.educacion": "Education",
    "categories.otros": "Others",
    "contact.name": "Name",
    "contact.email": "Email Address",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Thanks for your message! I'll get back to you soon.",
    "contact.error": "Could not send. Please try again later.",
    "contact.emailError": "Please enter a valid email.",
    "contact.confirmEmail": "Confirm Email",
    "contact.emailsDoNotMatch": "Emails do not match.",
    "footer.rights": "All rights reserved.",
    "webkit.title": "Portfolio Webkit",
    "webkit.description":
      "Design system reference — tokens, icons, and components used by shinigamy19.tech",
    "webkit.back": "Back to portfolio",
    "webkit.subtitle":
      "Design system reference — tokens, icons, and components used by shinigamy19.tech",
    "webkit.meta":
      "{icons} icons · {tags} project tags · {groups} skill groups — all rendered from live data sources, never a duplicated list.",
    "webkit.section.colors": "Color tokens",
    "webkit.section.typography": "Typography",
    "webkit.section.icons": "Icons",
    "webkit.section.tagsSkills": "Tags & skills",
    "webkit.section.backgrounds": "Backgrounds & effects",
    "webkit.section.components": "Components",
    "webkit.colors.brandGradient": "Brand gradient",
    "webkit.colors.brandGradientDesc":
      "Scroll-progress bar and TitleSection underline —",
    "webkit.colors.skillPurple": "Skill badge purple",
    "webkit.colors.skillPurpleDesc":
      "Skill pills in Habilidades.astro —",
    "webkit.colors.skillPurpleSame": "(same in light and dark)",
    "webkit.colors.sampleSkill": "Sample skill",
    "webkit.colors.heroLight": "Hero radial light",
    "webkit.colors.heroLightDesc":
      "Layout.astro page backdrop, forced light —",
    "webkit.colors.heroLightTail": "on white",
    "webkit.colors.lightPanel": "Light sample panel",
    "webkit.colors.heroDark": "Hero radial dark",
    "webkit.colors.heroDarkDesc":
      "Layout.astro page backdrop, forced dark —",
    "webkit.colors.heroDarkTail": "on gray-950",
    "webkit.colors.darkPanel": "Dark sample panel",
    "webkit.colors.expCategories": "Experience category colors",
    "webkit.colors.expCategoriesDesc": "Token map copied from",
    "webkit.colors.expCategoriesTail":
      "categoryColors — light (forced) and dark (forced) side by side",
    "webkit.colors.light": "Light",
    "webkit.colors.dark": "Dark",
    "webkit.colors.eduGradients": "Education gradients",
    "webkit.colors.eduGradientsDesc": "Imported from",
    "webkit.colors.eduGradientsTail":
      "— each card uses bg-gradient-to-br + the gradient class below",
    "webkit.typography.desc":
      "Roboto weights used across the site — 400 (body), 500 (medium), 700 (bold) — imported via",
    "webkit.typography.descTail": "in Layout.astro",
    "webkit.typography.h2Label":
      "h2 — TitleSection style · text-3xl font-semibold · weight 500",
    "webkit.typography.h2Sample": "Section heading sample",
    "webkit.typography.bodyLabel": "Body · weight 400",
    "webkit.typography.bodySample":
      "Body copy uses Roboto 400 at base size with relaxed leading. This is the default paragraph style across portfolio sections — descriptions, about text, and card content.",
    "webkit.typography.mediumLabel": "Medium · weight 500",
    "webkit.typography.mediumSample":
      "Medium weight for nav labels, dates, and emphasized inline text.",
    "webkit.typography.smallLabel":
      "Small / tag text · weight 500–700 · text-xs",
    "webkit.typography.tagPill": "Tag pill · medium",
    "webkit.typography.category": "Category · semibold",
    "webkit.typography.date": "Date · bold",
    "webkit.icons.desc": "Auto-discovered with",
    "webkit.icons.descMid":
      "— {icons} components, sorted alphabetically. \"iconMap\" notes show which tech-tag keys resolve to the component in",
    "webkit.icons.descEnd": ".",
    "webkit.icons.techTags": "Tech-tag icons",
    "webkit.icons.techTagsDesc": "Every key in",
    "webkit.icons.techTagsDescTail":
      "with its real projectTags badge (class + icon), the same pattern Proyectos.astro uses",
    "webkit.icons.uiIcon": "UI icon",
    "webkit.tagsSkills.desc":
      "{tags} project tags · {groups} skill groups — rendered from",
    "webkit.tagsSkills.descAnd": "and",
    "webkit.tagsSkills.projectTags": "Project tags",
    "webkit.backgrounds.heroRadial": "Hero radial gradient",
    "webkit.backgrounds.heroRadialDesc":
      "Reproduced from Layout.astro — the full-page backdrop behind every section",
    "webkit.backgrounds.backdropSample":
      "Site backdrop sample (follows theme)",
    "webkit.backgrounds.underline": "TitleSection underline",
    "webkit.backgrounds.underlineDesc":
      "Brand gradient bar under every section title — animates to 80px on reveal",
    "webkit.backgrounds.skillPanel":
      "Skill section gradient panel",
    "webkit.backgrounds.skillPanelDesc":
      "Achievements panel from Habilidades.astro — purple/blue wash on light, slate base on dark",
    "webkit.backgrounds.achievementsSample": "Achievements panel sample",
    "webkit.backgrounds.badgeConic": "Badge conic gradient",
    "webkit.backgrounds.badgeConicDesc":
      "Spinning conic ring from Badge.astro —",
    "webkit.backgrounds.badgeAvailable": "Available for projects",
    "webkit.backgrounds.tabActive": "Category tab active state",
    "webkit.backgrounds.tabActiveDesc":
      "Project filter tabs from Proyectos.astro — active uses blue-600",
    "webkit.backgrounds.active": "Active",
    "webkit.backgrounds.inactive": "Inactive",
    "webkit.backgrounds.scrollBar": "Scroll-progress bar",
    "webkit.backgrounds.scrollBarDesc":
      "Fixed top bar in Layout.astro — blue → purple → cyan, 3px tall",
    "webkit.backgrounds.navPill": "Backdrop-blur nav pill",
    "webkit.backgrounds.navPillDesc":
      "Header.astro desktop nav — white/70 or gray-900/60 with backdrop-blur-md",
    "webkit.backgrounds.nav": "Nav",
    "webkit.backgrounds.links": "Links",
    "webkit.components.desc": "Live imports from",
    "webkit.components.descTail": "where possible",
    "webkit.components.linkButtonDesc": "Live import — href=\"#\"",
    "webkit.components.projectLink": "Project link",
    "webkit.components.badgeDesc":
      "Live import — conic-gradient ring + slot content",
    "webkit.components.openToWork": "Open to work",
    "webkit.components.titleSectionDesc":
      "Live import — wrapped in .revealed so the underline renders",
    "webkit.components.sampleSection": "Sample section",
    "webkit.components.tabStaticDesc":
      "Static markup copy — Proyectos.astro tabs have no standalone component; classes inlined",
    "webkit.components.all": "All",
    "webkit.components.tagPillDesc":
      "From projectTags data — first entry, same pattern as Proyectos.astro",
    "webkit.footer.generated":
      "Generated from portfolio data sources · Not a separate design file",
    "webkit.footer.staticRef": "Static reference ·",
    "webkit.footer.backHome": "Back to shinigamy19.tech",
  },
  pt: {
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.about": "Sobre mim",
    "nav.skills": "Habilidades",
    "nav.education": "Educação",
    "nav.contact": "Contato",
    "nav.menu": "Menu",
    "projects.title": "Projetos",
    "projects.all": "Todos",
    "projects.code": "Código",
    "projects.preview": "Visualização",
    "projects.design": "Design",
    "projects.videos": "Vídeos",
    "projects.comingSoon": "Em breve",
    "projects.playstore": "Play Store",
    "projects.playstoreSoon": "Play Store · Em breve",
    "projects.npm": "Pacote",
    "projects.featured": "Destaque",
    "about.title": "Sobre mim",
    "buttons.showMore": "Ver mais",
    "buttons.showLess": "Ver menos",
    "education.courses": "Cursos e Certificações",
    "education.showMore": "Ver mais cursos",
    "education.showLess": "Ver menos cursos",
    "skills.achievements": "Principais Conquistas",
    "categories.editorial": "Editorial",
    "categories.producto": "Produto",
    "categories.videojuegos": "Videogames",
    "categories.audiovisual": "Audiovisual",
    "categories.app": "App",
    "categories.web": "Web",
    "categories.programacion": "Programação",
    "categories.diseno": "Design",
    "categories.educacion": "Educação",
    "categories.otros": "Outros",
    "contact.name": "Nome",
    "contact.email": "E-mail",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.success": "Obrigado pela sua mensagem! Responderei em breve.",
    "contact.error": "Não foi possível enviar. Tente novamente mais tarde.",
    "contact.emailError": "Por favor, insira um e-mail válido.",
    "contact.confirmEmail": "Confirmar E-mail",
    "contact.emailsDoNotMatch": "Os e-mails não coincidem.",
    "footer.rights": "Todos os direitos reservados.",
    "webkit.title": "Webkit do Portfólio",
    "webkit.description":
      "Referência do design system — tokens, ícones e componentes usados por shinigamy19.tech",
    "webkit.back": "Voltar ao portfólio",
    "webkit.subtitle":
      "Referência do design system — tokens, ícones e componentes usados por shinigamy19.tech",
    "webkit.meta":
      "{icons} ícones · {tags} tags de projeto · {groups} grupos de habilidades — tudo renderizado a partir de fontes de dados ao vivo, nunca uma lista duplicada.",
    "webkit.section.colors": "Tokens de cor",
    "webkit.section.typography": "Tipografia",
    "webkit.section.icons": "Ícones",
    "webkit.section.tagsSkills": "Tags e habilidades",
    "webkit.section.backgrounds": "Fundos e efeitos",
    "webkit.section.components": "Componentes",
    "webkit.colors.brandGradient": "Gradiente da marca",
    "webkit.colors.brandGradientDesc":
      "Barra de progresso de scroll e sublinhado do TitleSection —",
    "webkit.colors.skillPurple": "Roxo do badge de habilidade",
    "webkit.colors.skillPurpleDesc":
      "Pills de habilidade em Habilidades.astro —",
    "webkit.colors.skillPurpleSame": "(mesma cor no claro e no escuro)",
    "webkit.colors.sampleSkill": "Habilidade de exemplo",
    "webkit.colors.heroLight": "Radial do hero (claro)",
    "webkit.colors.heroLightDesc":
      "Fundo da página em Layout.astro, forçado no claro —",
    "webkit.colors.heroLightTail": "no branco",
    "webkit.colors.lightPanel": "Painel de exemplo claro",
    "webkit.colors.heroDark": "Radial do hero (escuro)",
    "webkit.colors.heroDarkDesc":
      "Fundo da página em Layout.astro, forçado no escuro —",
    "webkit.colors.heroDarkTail": "no gray-950",
    "webkit.colors.darkPanel": "Painel de exemplo escuro",
    "webkit.colors.expCategories": "Cores das categorias de experiência",
    "webkit.colors.expCategoriesDesc": "Mapa de tokens copiado de",
    "webkit.colors.expCategoriesTail":
      "categoryColors — claro (forçado) e escuro (forçado) lado a lado",
    "webkit.colors.light": "Claro",
    "webkit.colors.dark": "Escuro",
    "webkit.colors.eduGradients": "Gradientes de educação",
    "webkit.colors.eduGradientsDesc": "Importado de",
    "webkit.colors.eduGradientsTail":
      "— cada card usa bg-gradient-to-br + a classe de gradiente abaixo",
    "webkit.typography.desc":
      "Pesos do Roboto usados no site — 400 (corpo), 500 (medium), 700 (bold) — importados via",
    "webkit.typography.descTail": "no Layout.astro",
    "webkit.typography.h2Label":
      "h2 — estilo TitleSection · text-3xl font-semibold · peso 500",
    "webkit.typography.h2Sample": "Exemplo de título de seção",
    "webkit.typography.bodyLabel": "Corpo · peso 400",
    "webkit.typography.bodySample":
      "O texto do corpo usa Roboto 400 no tamanho base com entrelinha relaxada. Este é o estilo de parágrafo padrão nas seções do portfólio — descrições, texto sobre mim e conteúdo de cards.",
    "webkit.typography.mediumLabel": "Medium · peso 500",
    "webkit.typography.mediumSample":
      "Peso medium para rótulos de navegação, datas e texto inline enfatizado.",
    "webkit.typography.smallLabel":
      "Texto pequeno / de tag · peso 500–700 · text-xs",
    "webkit.typography.tagPill": "Pill de tag · medium",
    "webkit.typography.category": "Categoria · semibold",
    "webkit.typography.date": "Data · bold",
    "webkit.icons.desc": "Auto-descobertos com",
    "webkit.icons.descMid":
      "— {icons} componentes, ordenados em ordem alfabética. As notas \"iconMap\" mostram quais chaves de tech-tag resolvem para o componente em",
    "webkit.icons.descEnd": ".",
    "webkit.icons.techTags": "Ícones de tech-tags",
    "webkit.icons.techTagsDesc": "Cada chave de",
    "webkit.icons.techTagsDescTail":
      "com seu badge real de projectTags (classe + ícone), o mesmo padrão que Proyectos.astro usa",
    "webkit.icons.uiIcon": "Ícone UI",
    "webkit.tagsSkills.desc":
      "{tags} tags de projeto · {groups} grupos de habilidades — renderizados a partir de",
    "webkit.tagsSkills.descAnd": "e",
    "webkit.tagsSkills.projectTags": "Tags de projeto",
    "webkit.backgrounds.heroRadial": "Gradiente radial do hero",
    "webkit.backgrounds.heroRadialDesc":
      "Reproduzido do Layout.astro — o fundo de página completo atrás de cada seção",
    "webkit.backgrounds.backdropSample":
      "Amostra do fundo do site (segue o tema)",
    "webkit.backgrounds.underline": "Sublinhado do TitleSection",
    "webkit.backgrounds.underlineDesc":
      "Barra com gradiente da marca sob cada título de seção — anima até 80px ao revelar",
    "webkit.backgrounds.skillPanel":
      "Painel com gradiente da seção de habilidades",
    "webkit.backgrounds.skillPanelDesc":
      "Painel de conquistas de Habilidades.astro — lavagem roxa/azul no claro, base slate no escuro",
    "webkit.backgrounds.achievementsSample": "Amostra do painel de conquistas",
    "webkit.backgrounds.badgeConic": "Gradiente cônico do badge",
    "webkit.backgrounds.badgeConicDesc":
      "Anel cônico giratório do Badge.astro —",
    "webkit.backgrounds.badgeAvailable": "Disponível para projetos",
    "webkit.backgrounds.tabActive": "Estado ativo da aba de categoria",
    "webkit.backgrounds.tabActiveDesc":
      "Abas de filtro de projetos de Proyectos.astro — a ativa usa blue-600",
    "webkit.backgrounds.active": "Ativo",
    "webkit.backgrounds.inactive": "Inativo",
    "webkit.backgrounds.scrollBar": "Barra de progresso de scroll",
    "webkit.backgrounds.scrollBarDesc":
      "Barra superior fixa no Layout.astro — azul → roxo → cyan, 3px de altura",
    "webkit.backgrounds.navPill": "Pill de nav com backdrop-blur",
    "webkit.backgrounds.navPillDesc":
      "Nav de desktop do Header.astro — white/70 ou gray-900/60 com backdrop-blur-md",
    "webkit.backgrounds.nav": "Nav",
    "webkit.backgrounds.links": "Links",
    "webkit.components.desc": "Imports ao vivo de",
    "webkit.components.descTail": "sempre que possível",
    "webkit.components.linkButtonDesc": "Import ao vivo — href=\"#\"",
    "webkit.components.projectLink": "Link do projeto",
    "webkit.components.badgeDesc":
      "Import ao vivo — anel conic-gradient + conteúdo do slot",
    "webkit.components.openToWork": "Aberto a propostas",
    "webkit.components.titleSectionDesc":
      "Import ao vivo — envolvido em .revealed para que o sublinhado renderize",
    "webkit.components.sampleSection": "Seção de exemplo",
    "webkit.components.tabStaticDesc":
      "Cópia de markup estática — as abas de Proyectos.astro não têm componente independente; classes inline",
    "webkit.components.all": "Todas",
    "webkit.components.tagPillDesc":
      "A partir dos dados de projectTags — primeira entrada, mesmo padrão de Proyectos.astro",
    "webkit.footer.generated":
      "Gerado a partir das fontes de dados do portfólio · Não é um arquivo de design separado",
    "webkit.footer.staticRef": "Referência estática ·",
    "webkit.footer.backHome": "Voltar ao shinigamy19.tech",
  },
} as const;
