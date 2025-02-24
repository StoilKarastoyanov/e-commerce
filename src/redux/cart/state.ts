import { CartItem } from "@/src/components/types";

export interface CartState {
    cartItems: CartItem[];
}

export const initialCartState: CartState = {
    cartItems: []
}