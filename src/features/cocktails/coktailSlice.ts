import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import Cocktail from "../../models/cocktailModel";


export const getCocktails = createAsyncThunk(
    'cocktails/getCocktails',
    async (data, thunkAPI) => {
        try {
            const response = await axios.get<Cocktail[]>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data}`);
            return response.data;
        }
        catch (e: any) {
            const message = e.response?.data?.message || 'Something went wrong';
            return thunkAPI.rejectWithValue(message);
        }
    });

interface CocktailState {
    loading: boolean;
    error: string | null;
    data: Cocktail[] | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null
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