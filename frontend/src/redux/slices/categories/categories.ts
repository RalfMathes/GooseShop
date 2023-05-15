import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { CategoryProps } from "../../../types/CategoryProps";
export interface CategoriesState {
  loading: boolean;
  categories: CategoryProps[];
  error: string;
}

const initialState: CategoriesState = {
  loading: false,
  categories: [],
  error: "",
};

const fetchCategories = createAsyncThunk<CategoryProps[]>(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get("http://localhost:3000/categories");
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.error.message ?? "";
    });
  },
});

export default categoriesSlice.reducer;
export const selectCategories = (state: RootState) =>
  state.categoriesReducer.categories;
export { fetchCategories };
