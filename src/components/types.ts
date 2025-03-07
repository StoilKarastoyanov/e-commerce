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

export interface CartItem extends Product {
    quantity: number;
}

export type CategoryType = 'women' | 'men' | 'children';

export interface SidePanelAttributes {
    name: string;
    title: string;
    subtitle: string;
    image: string;
}
