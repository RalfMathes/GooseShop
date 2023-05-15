import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { StoreItemProps } from "../../../types/StoreItemProps";
export interface StoreItemsState {
  loading: boolean;
  items: StoreItemProps[];
  error: string;
}

const initialState: StoreItemsState = {
  loading: false,
  items: [],
  error: "",
};

const fetchStoreItems = createAsyncThunk<StoreItemProps[]>(
  "storeItems/fetchStoreItems",
  async () => {
    const response = await axios.get("http://localhost:3000/items");
    return response.data;
  }
);

const storeItemsSlice = createSlice({
  name: "storeItems",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoreItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStoreItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = "";
    });
    builder.addCase(fetchStoreItems.rejected, (state, action) => {
      state.loading = false;
      state.items = [];
      state.error = action.error.message ?? "";
    });
  },
});

export default storeItemsSlice.reducer;
export const selectStoreItems = (state: RootState) =>
  state.storeItemsReducer.items;
export { fetchStoreItems };
