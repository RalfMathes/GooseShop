import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CategoryProps } from "../types/CategoryProps";

const useGetCategories = () => {
  return useSelector<RootState, CategoryProps[]>(
    (state) => state.categoriesReducer.categories
  );
};

export default useGetCategories;
