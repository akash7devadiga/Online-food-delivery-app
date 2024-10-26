import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
//To build our store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

export default appStore;