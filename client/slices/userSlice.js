import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const Axios = require('axios')

export const updateUser = createAsyncThunk("updateUser", async ({ id, username, email, password, address }) => {
    const { data } = await axios.put(`http://localhost:3000/api/users/${id}`, {
        username, email, password, address
    });
    return data
});

// export const getUser = createAsyncThunk("getUser", async (id) => {
//     const { data } = await axios.get(`http://localhost:3000/api/user/${id}`);
//     return data;
// })

export const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            return payload
        })
    },
})

export const selectUser = (state) => state.user;
export default userSlice.reducer