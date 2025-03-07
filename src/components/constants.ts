// dropwowns
import { DropdownOptions, SidePanelAttributes } from "./types";

export const categories: DropdownOptions = {
    name: 'Categories',
    options: ['women', 'men', 'children'],
};

export const colors: DropdownOptions = {
    name: 'Colors',
    options: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White'],
};

export const sizes: DropdownOptions = {
    name: 'Sizes',
    options: ['Small', 'Medium', 'Large'],
};

// side panels
export const ShoppingCartSidePanelAttributes: SidePanelAttributes = {
    name: 'Shopping Cart',
    title: 'Your cart is empty',
    subtitle: `Looks like you haven't made your choice yet...`,
    image: '/img/empty.jpg',
}

export const FavoriteSidePanelAttributes: SidePanelAttributes = {
    name: 'Favorite Items',
    title: 'No favorite items',
    subtitle: `Your favorites list is feeling a little lonely... time to add some love! ❤️`,
    image: '/img/noFavorites.jpg',
}

