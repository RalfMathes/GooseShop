import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CategoryProps } from "../types/CategoryProps";

const useGetCategory = (filterId: number) => {
  const unfilteredCategories = useSelector<RootState, CategoryProps[]>(
    (state) => state.categoriesReducer.categories
  );

  return unfilteredCategories.find(
    (category: CategoryProps) => category.id == filterId
  );
};

export default useGetCategory;
