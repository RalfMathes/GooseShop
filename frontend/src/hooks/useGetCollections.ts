import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CollectionProps } from "../types/CollectionProps";

const useGetCollections = () => {
  return useSelector<RootState, CollectionProps[]>(
    (state) => state.collectionsReducer.collections
  );
};

export default useGetCollections;
