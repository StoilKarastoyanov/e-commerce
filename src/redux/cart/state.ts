import { Product } from "@/src/components/types";

export interface CartState {
    cartItems: Product[];
}

export const initialCartState: CartState = {
    cartItems: []
}