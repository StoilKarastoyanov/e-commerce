import { Product } from "@/src/components/types";

export default interface ProductState {
    selectedProduct?: Product;
    reviewedProducts: Product[];
}

export const initialProductState: ProductState = {
    selectedProduct: undefined,
    reviewedProducts: [],
};