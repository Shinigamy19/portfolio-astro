export interface ProjectTag {
    name: string;
    class: string;
    icon?: any;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: ProjectTag[];
    category: string | string[];
    github?: string | string[];
    link?: string;
    link2?: string;
    figma?: string;
    behance?: string;
    youtube?: string;
    title_en?: string;
    description_en?: string;
    comingSoon?: boolean;
}
