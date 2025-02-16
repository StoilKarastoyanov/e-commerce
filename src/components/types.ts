export interface DropdownOptions {
    name: string;
    options: string[];
}

export interface CardProps {
    id?: string;
    title: string;
    price: string;
    image: string;
}

export type CategoryType = 'women' | 'men' | 'children';
