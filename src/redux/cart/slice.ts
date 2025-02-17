import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, initialCartState } from "./state";
import { Product } from "@/src/components/types";


const CartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<Product>) => {
            state.cartItems.push(action.payload);
        },
        clearCart: (state: CartState) => {
            state.cartItems = [];
        }
    },
});

export const { addToCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;