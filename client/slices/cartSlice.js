import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCart = createAsyncThunk("/cart", async () => {
  const { data } = await axios.get("/api/cart");
  return data;
});
export const cartUpdate = createAsyncThunk("/guest/cart", async (product) => {
  return product;
});
export const mergeGuest = createAsyncThunk(
  "/guestt/mergeGuest",
  async (productInfo) => {
    const { data } = await axios.post("api/cart/mergeGuest", productInfo);
    return data;
  }
);

export const QuickAddToCart = createAsyncThunk(
  "/QuickAddToCart",
  async (productInfo) => {
    const { data } = await axios.post(
      "http://localhost:3000/api/cart/quickadd",
      productInfo
    );
    return data;
  }
);

export const AddToCart = createAsyncThunk(
  "/AddToCart",
  async ({ singleProduct, quantity }) => {
    const { data } = await axios.post("http://localhost:3000/api/cart", {
      singleProduct,
      quantity,
    });
    return data;
  }
);

export const deleteSingleItem = createAsyncThunk(
  "cart/deleteItem",
  async (id) => {
    const { data } = await axios.delete(`/api/cart/${id}`);

    return data;
  }
);

export const incrementItemCount = createAsyncThunk(
  "cart/addToCount",
  async (id) => {
    const { data } = await axios.put(`/api/cart/increment/${id}`);
    return data;
  }
);

export const decrementItemCount = createAsyncThunk(
  "cart/subtractFromCount",
  async (id) => {
    const { data } = await axios.put(`/api/cart/decrement/${id}`);
    return data;
  }
);

export const checkoutCart = createAsyncThunk("checkoutCart", async () => {
  const { data } = await axios.put("http://localhost:3000/api/cart/checkout");
  return data;
});

// export const getOrderHistory = createAsyncThunk("orderHistory", async () => {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/cart/order-history"
//   );
//   console.log("data --> ", data);
//   return data;
// });

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    // orderHistory: [],
  },
  reducers: {
    // cartUpdate: (state, action) => {
    //   console.log('payload', action)
    //   state.cart.push(action.payload)
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(cartUpdate.fulfilled, (state, { payload }) => {
      state.cart = payload;
    });
    builder.addCase(getAllCart.fulfilled, (state, { payload }) => {
      state.cart = payload;
    });
    // builder.addCase(getOrderHistory.fulfilled, (state, { payload }) => {
    //   state.orderHistory = payload;
    //   state.orderProducts = payload.
    // });

    builder.addCase(QuickAddToCart.fulfilled, (state, { payload }) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === payload.productId) {
          state.cart[i] = payload;
          break;
        }
        if (i === state.cart.length - 1) {
          state.cart.push(payload);
        }
      }
    });

    builder.addCase(mergeGuest.fulfilled, (state, { payload }) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === payload.productId) {
          state.cart[i] = payload;
          break;
        }
        if (i === state.cart.length - 1) {
          state.cart.push(payload);
        }
      }
    });

    builder.addCase(AddToCart.fulfilled, (state, { payload }) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === payload.productId) {
          state.cart[i] = payload;
          break;
        }
        if (i === state.cart.length - 1) {
          state.cart.push(payload);
        }
      }
    });

    builder.addCase(deleteSingleItem.fulfilled, (state, { payload }) => {
      state.cart = state.cart.filter(
        (element) => element.productId !== payload.productId
      );
    });

    builder.addCase(incrementItemCount.fulfilled, (state, { payload }) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === payload.productId) {
          state.cart[i] = payload;
          break;
        }
      }
    });

    builder.addCase(decrementItemCount.fulfilled, (state, { payload }) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === payload.productId) {
          state.cart[i] = payload;
          break;
        }
      }
    });
  },
});

export const getCart = (state) => state.cart;
export default cartSlice.reducer;
