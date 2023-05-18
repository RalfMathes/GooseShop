import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CollectionProps } from "../../../types/CollectionProps";
import type { RootState } from "../../store";

export interface CollectionsState {
  loading: boolean;
  collections: CollectionProps[];
  error: string;
}

const initialState: CollectionsState = {
  loading: false,
  collections: [],
  error: "",
};

const fetchCollections = createAsyncThunk<CollectionProps[]>(
  "collections/fetchCollections",
  async () => {
    const response = await axios.get("http://localhost:3000/collections");
    return response.data;
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.loading = false;
      state.collections = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCollections.rejected, (state, action) => {
      state.loading = false;
      state.collections = [];
      state.error = action.error.message ?? "";
    });
  },
});

export default collectionsSlice.reducer;
export const selectCollections = (state: RootState) =>
  state.collectionsReducer.collections;
export { fetchCollections };
