import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductState from "./state";

const initialProductState: ProductState = {
    selectedProductId: undefined,
    reviewedProductIds: [],
};

const ProductSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        setSelectedProductId: (state: ProductState, action: PayloadAction<string>) => {
            state.selectedProductId = action.payload;
        },
        setReviwedProductIds: (state: ProductState, action: PayloadAction<string>) => {
            state.reviewedProductIds.push(action.payload);
        }
    },
});

export const { setSelectedProductId, setReviwedProductIds } = ProductSlice.actions;

export default ProductSlice.reducer;