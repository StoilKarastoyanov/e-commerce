import { createSelector } from "@reduxjs/toolkit";
import { ReduxState } from "../types";

export const selectFavoritesState = (state: ReduxState) => state.favorites;

export const selectFavoriteItems = createSelector([selectFavoritesState], favoritesState => favoritesState.favoriteItems);