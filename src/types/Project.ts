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
    category: string;
    github?: string;
    link?: string;
    link2?: string;
}
