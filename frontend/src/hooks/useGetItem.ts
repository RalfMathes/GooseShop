import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchStoreItems } from "../redux/slices/storeItems/storeItems";

type CollectionProps = {
  id: number;
  name: string;
  imgUrl: string;
};

const useGetItems = (filterId: number) => {
  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(fetchStoreItems());
  }, []);

  const unfilteredCollections = useSelector<RootState, CollectionProps[]>(
    (state) => state.storeItemsReducer.items
  );

  return unfilteredCollections.find(
    (item: CollectionProps) => item.id == filterId
  );
};

export default useGetItems;