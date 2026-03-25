export interface ExperienceItem {
    date: string;
    title: string;
    company: string;
    description: string;
    tags: string[];
    category: string | string[];
    date_en?: string;
    title_en?: string;
    description_en?: string;
    date_pt?: string;
    title_pt?: string;
    description_pt?: string;
}
