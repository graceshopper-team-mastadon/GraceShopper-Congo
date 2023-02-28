import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const Axios = require('axios')

export const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
    },
})

export default userSlice.reducer