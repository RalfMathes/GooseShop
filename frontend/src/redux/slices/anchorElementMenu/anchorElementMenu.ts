import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface AnchorElementState {
  element: null | HTMLElement;
}

const initialState: AnchorElementState = {
  element: null,
};

const anchorElementSlice = createSlice({
  name: "anchorElement",
  initialState: initialState,
  reducers: {
    setAnchorElement: (state, action) => {
      state.element = action.payload;
    },
  },
});

export default anchorElementSlice.reducer;
export const selectAnchorElement = (state: RootState) =>
  state.anchorElementReducer.element;
export const { setAnchorElement } = anchorElementSlice.actions;
