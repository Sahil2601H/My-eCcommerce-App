// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import sellerSlice from "./seller/sellerSlice";
// import sellerProductSlice, { fetchSellerProduct } from "./seller/sellerProductSlice";
// import productSlice from "./customer/ProductSlice";
// // Root reducer (can be expanded later with actual reducers)
// const rootReducer = combineReducers({

//    seller:sellerSlice,
//    sellerProduct:sellerProductSlice,
//    product:productSlice
// });

// const store = configureStore({
//     reducer: rootReducer,
//     // No need to manually add redux-thunk, it's included by default in Redux Toolkit
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>;

// // Custom hooks
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/ProductSlice";

// Root reducer
const rootReducer = combineReducers({
   seller: sellerSlice,
   sellerProduct: sellerProductSlice,
   product: productSlice
});

// Configure store with middleware and dev tools
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload.headers'],
            }
        }),
    devTools: process.env.NODE_ENV !== 'production'
});

// Enhanced types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Custom hooks with correct typing
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;