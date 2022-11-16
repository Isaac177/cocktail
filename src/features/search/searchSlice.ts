import {createSlice} from "@reduxjs/toolkit";
import Cocktail from "../../models/cocktailModel";
import {searchByName} from "./search";
import {getCocktails} from "../cocktails/coktails";


interface CocktailState {
    loading: boolean;
    error: string | null;
    result: Cocktail[] ;
}

const initialState = {
    loading: false,
    error: null,
    result: []
} as CocktailState;

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        resetSearch(state, action) {
            state.result = [];
        },
        setResults(state, action) {
            state.result = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(searchByName.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(searchByName.fulfilled, (state, action) => {
            state.loading = false;
            state.result = action.payload;
            state.error = null;
        });
        builder.addCase(searchByName.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        builder.addCase(getCocktails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCocktails.fulfilled, (state, action) => {
            state.loading = false;
            state.result = action.payload;
            state.error = null;
        });
        builder.addCase(getCocktails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});

export default searchSlice.reducer;
export const {resetSearch, setResults} = searchSlice.actions;


