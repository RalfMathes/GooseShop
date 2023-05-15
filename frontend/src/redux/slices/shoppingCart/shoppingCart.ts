import { createSlice } from "@reduxjs/toolkit";
import { CartItemProps } from "../../../types/CartItemProps";
import type { RootState } from "../../store";
export interface ShoppingCartState {
  count: number;
  items: CartItemProps[];
}

const initialState: ShoppingCartState = {
  count: 0,
  items: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    increaseItem: (state, action) => {
      const targetId = action.payload;

      if (state.items.find((item) => item.id === targetId) == null) {
        state.items.push({ id: targetId, quantity: 1 });
      } else {
        state.items.map((item) => {
          if (item.id === targetId) {
            item.quantity++;
          }
        });
      }
      state.count = state.items.reduce(
        (sum, current) => sum + current.quantity,
        0
      );
    },
    decreaseItem: (state, action) => {
      const targetId = action.payload;

      if (state.items.find((item) => item.id === targetId)?.quantity === 1) {
        state.items = state.items.filter((item) => item.id != targetId);
      } else {
        state.items.map((item) => {
          if (item.id === targetId) {
            item.quantity--;
          }
        });
      }
      state.count = state.items.reduce(
        (sum, current) => sum + current.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      const targetId = action.payload;
      state.items = state.items.filter((item) => item.id != targetId);
      state.count = state.items.reduce(
        (sum, current) => sum + current.quantity,
        0
      );
    },
  },
});

export default shoppingCartSlice.reducer;
export const selectShoppingCartCount = (state: RootState) =>
  state.shoppingCartReducer.count;
export const { increaseItem, decreaseItem, removeItem } =
  shoppingCartSlice.actions;
