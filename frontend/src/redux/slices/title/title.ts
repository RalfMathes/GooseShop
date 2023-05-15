import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TitleProps = {
  name: string;
};

export interface TitleState {
  name: string;
}

const initialState: TitleState = {
  name: "",
};

const titleSlice = createSlice({
  name: "title",
  initialState: initialState,
  reducers: {
    setTitle: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default titleSlice.reducer;
export const selectCollections = (state: RootState) => state.titleReducer.name;
export const { setTitle } = titleSlice.actions;
