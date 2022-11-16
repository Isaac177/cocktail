import {configureStore} from "@reduxjs/toolkit";

import cocktailSlice from "./cocktails/cocktailSlice";
import searchSlice from "./search/searchSlice";

const store = configureStore({
    reducer: {
        cocktails: cocktailSlice,
        search: searchSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
