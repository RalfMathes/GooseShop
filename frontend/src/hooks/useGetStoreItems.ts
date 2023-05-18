import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { StoreItemProps } from "../types/StoreItemProps";

const useGetStoreItems = () => {
  return useSelector<RootState, StoreItemProps[]>(
    (state) => state.storeItemsReducer.items
  );
};

export default useGetStoreItems;
