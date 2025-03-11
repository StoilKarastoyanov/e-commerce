import { configureStore, DevToolsEnhancerOptions } from '@reduxjs/toolkit';
import reducers, { ReduxState } from './types';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedConfig: PersistConfig<ReduxState> = {
    key: 'root',
    storage: storage,
    whitelist: ['product', 'cart', 'favorites'],
}

const persistedReducer = persistReducer(persistedConfig, reducers);

const devTools: DevToolsEnhancerOptions = {
    serialize: {
        options: {
            map: true,
            set: true,
        }
    },
} as DevToolsEnhancerOptions;

const store = configureStore({
    reducer: persistedReducer,
    devTools,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;