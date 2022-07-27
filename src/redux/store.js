import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/productSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
