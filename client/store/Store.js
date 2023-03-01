import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import productsReducer from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsReducer,
  },
});
export default store;
