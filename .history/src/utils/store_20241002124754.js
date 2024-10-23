import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice, // name of the slice : slice
  },
}); //slices

export default store;
