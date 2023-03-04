import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPokemon = createAsyncThunk("/category/pokemon-all", async () => {
    const { data } = await axios.get('/api/category/pokemon-all');
    return data
});

export const getAllPotions = createAsyncThunk("/category/potions", async () => {
    const { data } = await axios.get('/api/category/potions');
    return data
})


export const getAllPokeballs = createAsyncThunk("/category/pokeballs", async () => {
    const { data } = await axios.get('/api/category/pokeballs');
    return data
})


export const categorySlice = createSlice({
    name: "category",
    initialState: {
        pokemon: [],
        pokeballs: [],
        potions: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPokemon.fulfilled, (state, { payload }) => {
            state.pokemon.push([...payload])
        });
        builder.addCase(getAllPotions.fulfilled, (state, { payload }) => {
            state.pokeballs.push([...payload])
        });
        builder.addCase(getAllPokeballs.fulfilled, (state, { payload }) => {
            state.potions.push([...payload])
        })
    }
})

export const getCategories = (state) => state.category;
export default categorySlice.reducer;