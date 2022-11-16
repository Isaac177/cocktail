import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Cocktail from "../../models/cocktailModel";


export const searchByName = createAsyncThunk(
    'cocktails/searchByName',
    async (result, thunkAPI) => {
        try {
            const response = await axios.get<Cocktail[]>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${result}`);
            return response.data;
        }
        catch (e: any) {
            const message = e.response?.data?.message || 'Something went wrong';
            return thunkAPI.rejectWithValue(message);
        }
    });
/*
export const searchByIngredient = createAsyncThunk(
    'cocktails/searchByIngredient',
    async (data: string, thunkAPI) => {
        try {
            const response = await axios.get<Cocktail[]>(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data}`);
            return response.data;
        }
        catch (e: any) {
            const message = e.response?.data?.message || 'Something went wrong';
            return thunkAPI.rejectWithValue(message);
        }
    });

export const searchByAlcohol = createAsyncThunk(
    'cocktails/searchByAlcohol',
    async (data: string, thunkAPI) => {
        try {
            const response = await axios.get<Cocktail[]>(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${data}`);
            return response.data;
        }
        catch (e: any) {
            const message = e.response?.data?.message || 'Something went wrong';
            return thunkAPI.rejectWithValue(message);
        }
    });

export const searchByGlass = createAsyncThunk(
    'cocktails/searchByGlass',
    async (data: string, thunkAPI) => {
        try {
            const response = await axios.get<Cocktail[]>(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${data}`);
            return response.data;
        }
        catch (e: any) {
            const message = e.response?.data?.message || 'Something went wrong';
            return thunkAPI.rejectWithValue(message);
        }
    });*/



