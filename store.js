import { configureStore } from "@reduxjs/toolkit";
import basketCounter, { basketReducer } from "./features/basketCounter";

export const store = configureStore({
  reducer: {
    basket: basketCounter,
  },
});
