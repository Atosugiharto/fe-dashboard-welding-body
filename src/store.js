import { configureStore } from "@reduxjs/toolkit";
import ohcReducer from "./slices/ohcSlice";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
  reducer: {
    ohc: ohcReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
