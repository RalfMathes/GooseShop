import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreItems } from "../redux/slices/storeItems/storeItems";
import { AppDispatch, RootState } from "../redux/store";
import { StoreItemProps } from "../types/StoreItemProps";

const useGetItem = (filterId: number) => {
  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(fetchStoreItems());
  }, []);

  const unfilteredItems = useSelector<RootState, StoreItemProps[]>(
    (state) => state.storeItemsReducer.items
  );

  return unfilteredItems.find((item: StoreItemProps) => item.id == filterId);
};

export default useGetItem;
