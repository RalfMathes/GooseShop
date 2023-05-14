import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchCategories } from "../redux/slices/categories/categories";

type CategoryProps = {
  id: number;
  name: string;
  imgUrl: string;
};

const useGetCategory = (filterId: number) => {
  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(fetchCategories());
  }, []);

  const unfilteredCategories = useSelector<RootState, CategoryProps[]>(
    (state) => state.categoriesReducer.categories
  );

  return unfilteredCategories.find(
    (category: CategoryProps) => category.id == filterId
  );
};

export default useGetCategory;
