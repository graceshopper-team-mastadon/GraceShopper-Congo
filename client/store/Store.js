import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import productsReducer from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
  },
});
export default store;