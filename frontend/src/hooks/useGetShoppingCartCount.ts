import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useGetShoppingCartCount = () => {
  return useSelector<RootState, number>(
    (state) => state.shoppingCartReducer.count
  );
};

export default useGetShoppingCartCount;
