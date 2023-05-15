import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { StoreItemProps } from "../types/StoreItemProps";

const useGetCartItem = (id: number) => {
  const storeItems: StoreItemProps[] = useSelector<RootState, StoreItemProps[]>(
    (state) => state.storeItemsReducer.items
  );
  return storeItems.find((item) => item.id === id);
};

export default useGetCartItem;
