import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchStoreItems } from "../redux/slices/storeItems/storeItems";

type StoreItemProps = {
  id: number;
  categoryId: number;
  collectionId: number;
  name: string;
  price: number;
  imgUrl: string;
};

const useFilterItems = (filterType: string, filterId: number) => {
  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(fetchStoreItems());
  }, []);

  const unfilteredItems = useSelector<RootState, StoreItemProps[]>(
    (state) => state.storeItemsReducer.items
  );

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
