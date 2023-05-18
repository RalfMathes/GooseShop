import { createSlice } from "@reduxjs/toolkit";
import { CartItemProps } from "../../../types/CartItemProps";
import type { RootState } from "../../store";
export interface ShoppingCartState {
  count: number;
  items: CartItemProps[];
  total: number;
}

const initialState: ShoppingCartState = {
  count: 0,
  items: [],
  total: 0,
};

const updateCountAndTotal = (state: {
  count: number;
  items: CartItemProps[];
  total: number;
}) => {
  state.count = state.items.reduce((sum, current) => sum + current.quantity, 0);
  state.total = state.items.reduce(
    (sum, current) => sum + current.price * current.quantity,
    0
  );
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    increaseItem: (state, action) => {
      const targetId = action.payload[0];
      const targetPrice = action.payload[1];

      if (state.items.find((item) => item.id === targetId) == null) {
        state.items.push({ id: targetId, quantity: 1, price: targetPrice });
      } else {
        state.items.map((item) => {
          if (item.id === targetId) {
            item.quantity++;
          }
        });
      }
      updateCountAndTotal(state);
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
      updateCountAndTotal(state);
    },
    removeItem: (state, action) => {
      const targetId = action.payload;
      state.items = state.items.filter((item) => item.id != targetId);
      state.count = state.items.reduce(
        (sum, current) => sum + current.quantity,
        0
      );
      updateCountAndTotal(state);
    },
  },
});

export default shoppingCartSlice.reducer;
export const selectShoppingCartCount = (state: RootState) =>
  state.shoppingCartReducer.count;
export const selectShoppingCartTotal = (state: RootState) =>
  state.shoppingCartReducer.total;
export const { increaseItem, decreaseItem, removeItem } =
  shoppingCartSlice.actions;
