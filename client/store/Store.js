import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import singleProductReducer from "../slices/singleProductSlice";
import authSlice from "../slices/authSlice";
import userReducer from "../slices/userSlice";
import categoryReducer from "../slices/categorySlice";
import cartReducer from "../slices/cartSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authSlice,
    singleProduct: singleProductReducer,

    users: userReducer,

    user: userReducer,
    categories: categoryReducer,
    cart: cartReducer,

  },
});
export default store;
