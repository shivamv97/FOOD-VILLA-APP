import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
}); //slices

export default store;
