import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import singleProductReducer from "../slices/singleProductSlice";
import authSlice from '../slices/authSlice';
import userReducer from "../slices/userSlice";
import categoryReducer from "../slices/categorySlice"

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authSlice,
    singleProduct: singleProductReducer,
    user: userReducer,
    categories: categoryReducer
  },
});
export default store;