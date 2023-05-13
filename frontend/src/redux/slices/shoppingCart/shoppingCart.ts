import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface ShoppingCartState {
  count: number;
}

const initialState: ShoppingCartState = {
  count: 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    increaseCartCount: (state) => {
      state.count++;
    },
    decreaseCartCount: (state) => {
      state.count--;
    },
  },
});

export default shoppingCartSlice.reducer;
export const selectShoppingCartCount = (state: RootState) =>
  state.shoppingCart.count;
export const { increaseCartCount, decreaseCartCount } =
  shoppingCartSlice.actions;
