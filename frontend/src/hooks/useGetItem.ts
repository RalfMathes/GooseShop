import { StoreItemProps } from "../types/StoreItemProps";
import useGetStoreItems from "./useGetStoreItems";

const useGetItem = (filterId: number) => {
  const unfilteredItems = useGetStoreItems();

  return unfilteredItems.find((item: StoreItemProps) => item.id == filterId);
};

export default useGetItem;
