import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState, initialFavoritesState } from "./state";
import { Product } from "@/src/components/types";

const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialFavoritesState,
    reducers: {
        addFavoriteItem: (state: FavoritesState, action: PayloadAction<Product>) => {
            state.favoriteItems.push(action.payload)
        },
        removeFavoriteItem: (state: FavoritesState, action: PayloadAction<Product>) => {
            const existingItemIndex = state.favoriteItems.findIndex(
                (item) => item.id === action.payload.id
            );

            state.favoriteItems.splice(existingItemIndex, 1);
        },
        clearFavorites: (state: FavoritesState) => {
            state.favoriteItems = [];
        }
    }
});

export const { addFavoriteItem, removeFavoriteItem, clearFavorites } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;