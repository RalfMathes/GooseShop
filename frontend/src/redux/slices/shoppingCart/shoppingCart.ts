import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type CartItem = {
  id: number;
  quantity: number;
};
export interface ShoppingCartState {
  count: number;
  items: CartItem[];
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
    },
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
export const {
  increaseItem,
  decreaseItem,
  increaseCartCount,
  decreaseCartCount,
} = shoppingCartSlice.actions;
