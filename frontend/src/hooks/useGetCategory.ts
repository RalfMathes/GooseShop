import { CategoryProps } from "../types/CategoryProps";
import useGetCategories from "./useGetCategories";

const useGetCategory = (filterId: number) => {
  const unfilteredCategories = useGetCategories();

  return unfilteredCategories.find(
    (category: CategoryProps) => category.id == filterId
  );
};

export default useGetCategory;
