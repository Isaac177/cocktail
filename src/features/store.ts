import {configureStore} from "@reduxjs/toolkit";

import cocktailSlice from "./cocktails/cocktailSlice";

const store = configureStore({
    reducer: {
        cocktails: cocktailSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
