import { StoreItemProps } from "../types/StoreItemProps";
import useGetStoreItems from "./useGetStoreItems";

const useGetItem = (filterId: number) => {
  const unfilteredItems = useGetStoreItems();
  const filteredItem = unfilteredItems.find((item: StoreItemProps) => {
    return item.id == filterId;
  });

  if (filteredItem != null) return filteredItem;
  throw new Error("No entry for item with id " + filterId + ".");
};

export default useGetItem;
