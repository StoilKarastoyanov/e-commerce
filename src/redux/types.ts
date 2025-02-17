import ProductSlice from './product/slice';
import CardSlice from './cart/slice';
import { combineReducers } from '@reduxjs/toolkit';

const reducerObject = {
    product: ProductSlice,
    cart: CardSlice,
};

type ReducerType = typeof reducerObject;

export type ReduxState = {
    [K in keyof ReducerType]: ReturnType<ReducerType[K]>;
};

const reducers = combineReducers(reducerObject);

export default reducers;