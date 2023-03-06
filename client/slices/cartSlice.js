import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCart = createAsyncThunk("/cart", async () => {
  const { data } = await axios.get("/api/cart");
  return data;
});

export const AddToCart = createAsyncThunk("/addToCart", async (productInfo) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/cart",
    productInfo
  );
  return data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCart.fulfilled, (state, { payload }) => {
      state.cart = payload;
    });

    builder.addCase(AddToCart.fulfilled, (state, { payload }) => {
      state.cart.push(payload);
    });
  },
});

export const getCart = (state) => state.cart;
export default cartSlice.reducer;
