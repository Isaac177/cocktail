import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Cocktail from "../../models/cocktailModel";


export const getCocktails = createAsyncThunk(
    'cocktails/getCocktails',
    async (data, thunkAPI) => {
        try {
            const response = await axios.get<Cocktail[]>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`);
            return response.data;
        }
        catch (e: any) {
            const message = e.response?.data?.message || 'Something went wrong';
            return thunkAPI.rejectWithValue(message);
        }
    });
