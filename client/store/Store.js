import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import singleProductReducer from "../slices/singleProductSlice";
import userReducer from "../slices/userSlice"

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    user: userReducer
  },
});
export default store;