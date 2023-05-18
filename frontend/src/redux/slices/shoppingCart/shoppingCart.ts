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

const getCartItemById = (state: ShoppingCartState, itemId: number) => {
  return state.items.find((item) => {
    return item.id === itemId;
  });
};

const removeCartItemById = (state: ShoppingCartState, itemId: number) => {
  state.items = state.items.filter((item) => {
    return item.id != itemId;
  });
};

const updateCountAndTotal = (state: ShoppingCartState) => {
  state.count = state.items.reduce((sum, current) => {
    return sum + current.quantity;
  }, 0);
  state.total = state.items.reduce((sum, current) => {
    return sum + current.price * current.quantity;
  }, 0);
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    increaseItem: (state, action) => {
      const targetId = action.payload[0];
      const targetPrice = action.payload[1];
      const itemInCart = getCartItemById(state, targetId);

      if (itemInCart == null) {
        state.items.push({ id: targetId, quantity: 1, price: targetPrice });
      } else {
        itemInCart.quantity += 1;
      }
      updateCountAndTotal(state);
    },
    decreaseItem: (state, action) => {
      const targetId = action.payload;
      const itemInCart = getCartItemById(state, targetId);

      if (itemInCart?.quantity === 1) {
        removeCartItemById(state, targetId);
      } else {
        if (itemInCart != null) {
          itemInCart.quantity -= 1;
        }
      }
      updateCountAndTotal(state);
    },
    removeItem: (state, action) => {
      const targetId = action.payload;

      removeCartItemById(state, targetId);
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
