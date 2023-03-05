import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ id, username, email, password, address }) => {
    const { data } = await axios.put(`http://localhost:3000/api/users/${id}`, {
      username,
      email,
      password,
      address,
    });
    return data;
  }
);

export const fetchAllUsers = createAsyncThunk("getUsers", async () => {
  const { data } = await axios.get("http://localhost:3000/api/users/");
  return data;
});

export const fetchSingleUser = createAsyncThunk("getUser", async () => {
  const { data } = await axios.get("http://localhost:3000/api/users/user");
  return data;
});

export const DeleteSingleUser = createAsyncThunk("deleteUser", async (id) => {
  const { data } = await axios.delete(`http://localhost:3000/api/users/${id}`);
  return data;
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    singleUser: {},
    userStatus: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.singleUser = payload;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
      state.allUsers = payload;
      //   console.log("reducer: ", payload);
      //   console.log("state: ", state.allUsers);
    });
    builder.addCase(fetchSingleUser.fulfilled, (state, { payload }) => {
      state.singleUser = payload;
    });
  },
});

export const userState = (state) => state.users;
export default userSlice.reducer;
