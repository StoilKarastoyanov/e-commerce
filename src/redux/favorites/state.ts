import { Product } from "@/src/components/types";

export interface FavoritesState {
    favoriteItems: Product[];
}

export const initialFavoritesState: FavoritesState = {
    favoriteItems: []
}