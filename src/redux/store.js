import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./slices/rootSlice";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});
