import { StoreItemProps } from "../types/StoreItemProps";
import useGetStoreItems from "./useGetStoreItems";

const useFilterItems = (filterType: string, filterId: number) => {
  const unfilteredItems = useGetStoreItems();

  switch (filterType) {
    case "category":
      return unfilteredItems.filter(
        (item: StoreItemProps) => item.categoryId == filterId
      );
    case "collection":
      return unfilteredItems.filter(
        (item: StoreItemProps) => item.collectionId == filterId
      );
    case "item":
      return unfilteredItems.filter(
        (item: StoreItemProps) => item.id == filterId
      );
    default:
      return unfilteredItems;
  }
};

export default useFilterItems;
