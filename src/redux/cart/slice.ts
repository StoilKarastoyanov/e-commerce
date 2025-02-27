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
        removeItem: (state: CartState, action: PayloadAction<CartItem>) => {
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id && item.size[0] === action.payload.size[0]
            );

            if (existingItemIndex !== -1) {
                const existingItem = state.cartItems[existingItemIndex];

                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; // Decrease quantity by 1
                } else {
                    state.cartItems.splice(existingItemIndex, 1); // Remove item if quantity is 1
                }
            }
        },
        clearCart: (state: CartState) => {
            state.cartItems = [];
        },
    },
});

export const { addToCart, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;