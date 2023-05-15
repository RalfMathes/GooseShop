import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CartItemProps } from "../types/CartItemProps";

const useGetItemCount = (id: number) => {
  return useSelector<RootState, number>(
    (state) =>
      state.shoppingCartReducer.items.find(
        (item: CartItemProps) => item.id == id
      )?.quantity || 0
  );
};

export default useGetItemCount;
