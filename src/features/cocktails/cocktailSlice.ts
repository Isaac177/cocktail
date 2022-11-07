import {createSlice} from "@reduxjs/toolkit";
import Cocktail from "../../models/cocktailModel";
import {getCocktails} from "./coktails";


interface CocktailState {
    loading: boolean;
    error: string | null;
    data: Cocktail[] ;
}

const initialState = {
    loading: false,
    error: null,
    data: []
} as CocktailState;

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCocktails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCocktails.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        });
        builder.addCase(getCocktails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default cocktailSlice.reducer;