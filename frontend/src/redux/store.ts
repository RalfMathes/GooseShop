import { configureStore } from "@reduxjs/toolkit";
import anchorElementReducer from "../redux/slices/anchorElementMenu/anchorElementMenu";

const store = configureStore({
  reducer: {
    anchorElement: anchorElementReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Remove this if you want to be taken seriously...
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
