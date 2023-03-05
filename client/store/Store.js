import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import singleProductReducer from "../slices/singleProductSlice";
import authSlice from "../slices/authSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authSlice,
    singleProduct: singleProductReducer,
    users: userReducer,
  },
});
export default store;
