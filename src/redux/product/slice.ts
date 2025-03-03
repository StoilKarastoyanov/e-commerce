import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductState, { initialProductState } from "./state";
import { Product } from "@/src/components/types";

const ProductSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        setSelectedProduct: (state: ProductState, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload;
        },
        addReviwedProduct: (state: ProductState, action: PayloadAction<Product>) => {
            state.reviewedProducts.push(action.payload);
        }
    },
});

export const { setSelectedProduct, addReviwedProduct } = ProductSlice.actions;

export default ProductSlice.reducer;