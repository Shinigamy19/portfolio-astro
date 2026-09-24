export interface SkillItem {
    name: string;
    /** Proficiency level 0-100. undefined = no bar shown */
    level?: number;
}

export interface SkillGroup {
    category: string;
    items: (string | SkillItem)[];
    category_en?: string;
    category_pt?: string;
}

export interface Achievement {
    title: string;
    icon: string;
    color: string;
    title_en?: string;
    title_pt?: string;
}
