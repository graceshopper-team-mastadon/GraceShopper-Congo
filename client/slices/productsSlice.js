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
export const deleteSingleProduct = createAsyncThunk(
  "deleteProduct",
  async (id) => {
    console.log("thunk receives this id: ", id);
    const { data } = await axios.get(
      `http://localhost:3000/api/dashboard/products/${id}`,
      { id }
    );
    await axios.delete(`http://localhost:3000/api/dashboard/products/${id}`, {
      id,
    });
    console.log("data in thunk:", data);
    return data;
  }
);

/*

DELETE IF IN CART SLICE:

export const AddToCart = createAsyncThunk("/addToCart", async (productInfo) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/cart",
    productInfo
  );
  // console.log("data returned to thunk:", data);
  return data;
});
*/

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
    builder.addCase(deleteSingleProduct.fulfilled, (state, { payload }) => {
      state.Products = state.Products.filter(
        (product) => product.id !== payload.id
      );
    });
  },
});

export const allProductsState = (state) => state.Products;

export default productsSlice.reducer;
