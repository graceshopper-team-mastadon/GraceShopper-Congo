import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import singleProductReducer from "../slices/singleProductSlice";
import authSlice from  '../slices/authSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authSlice,
    singleProduct: singleProductReducer,
  },
});
export default store;