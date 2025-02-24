import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, initialCartState } from "./state";
import { CartItem } from "@/src/components/types";


const CartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id && item.size[0] === action.payload.size[0]
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity; // Increase quantity
            } else {
                state.cartItems.push(action.payload);
            }
        },
        clearCart: (state: CartState) => {
            state.cartItems = [];
        }
    },
});

export const { addToCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;