import { createSelector } from "@reduxjs/toolkit";
import ProductState from "./state";
import { ReduxState } from "../types";

export const selectProductState = (state: ReduxState): ProductState => state.product;

export const selectSelectedItem = createSelector([selectProductState], (productState) => productState.selectedProduct);

export const selectRecentlyViewedItems = createSelector([selectProductState], (productState) => productState.reviewedProducts);