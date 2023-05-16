import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreItems } from "../redux/slices/storeItems/storeItems";
import { AppDispatch, RootState } from "../redux/store";
import { StoreItemProps } from "../types/StoreItemProps";

const useGetItems = (filterId: number) => {
  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(fetchStoreItems());
  }, []);

  const unfilteredCollections = useSelector<RootState, StoreItemProps[]>(
    (state) => state.storeItemsReducer.items
  );

  return unfilteredCollections.find(
    (item: StoreItemProps) => item.id == filterId
  );
};

export default useGetItems;
