import { configureStore } from '@reduxjs/toolkit';
import singleProductReducer from "./slices/singleProductSlice"

const store = configureStore({
    reducer: {
        singleProduct: singleProductReducer
    }
})
export default store