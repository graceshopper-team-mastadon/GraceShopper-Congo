import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk("/products", async () => {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;
});
export const getProductCategory = createAsyncThunk(
  "/products/:category",
  async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/products/:category"
    );
    return data;
  }
);

export const AddToCart = createAsyncThunk("/addToCart", async (productInfo) => {
  console.log("productInfo in thunk:", productInfo);
  const { data } = await axios.post(
    "http://localhost:3000/api/cart",
    productInfo
  );
  // console.log("data returned to thunk:", data);
  return data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    Products: [],
    singleProduct: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.Products = payload;
    });
    builder.addCase(getProductCategory.fulfilled, (state, { payload }) => {
      state.Products = payload;
    });
  },
});

export const allProductsState = (state) => state.Products;

export default productsSlice.reducer;
