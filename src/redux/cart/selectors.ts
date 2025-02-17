import { createSelector } from "@reduxjs/toolkit";
import { ReduxState } from "../types";
import { CartState } from "./state";

export const selectCartState = (state: ReduxState): CartState => state.cart;

export const selectCartItems = createSelector([selectCartState], (cartState) => cartState.cartItems);