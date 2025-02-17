export interface DropdownOptions {
    name: string;
    options: string[];
}

export interface Product {
    id: string;
    title: string;
    price: string;
    size: string[];
    image: string;
}

export type CategoryType = 'women' | 'men' | 'children';
