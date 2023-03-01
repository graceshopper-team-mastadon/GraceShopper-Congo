import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk("/products", async () => {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    singleProduct: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCampuses.fulfilled, (state, { payload }) => {
      state.allProducts = payload;
    });
  },
});

export const allProductsState = (state) => state.allProducts;

export default productSlice.reducer;
