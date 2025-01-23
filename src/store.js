import { configureStore } from "@reduxjs/toolkit";
import ohcReducer from "./slices/ohcSlice";

const store = configureStore({
  reducer: {
    ohc: ohcReducer,
  },
});

export default store;
