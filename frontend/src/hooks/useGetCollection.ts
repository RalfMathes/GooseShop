import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CollectionProps } from "../types/CollectionProps";

const useGetCollection = (filterId: number) => {
  const unfilteredCollections = useSelector<RootState, CollectionProps[]>(
    (state) => state.collectionsReducer.collections
  );

  return unfilteredCollections.find(
    (collection: CollectionProps) => collection.id == filterId
  );
};

export default useGetCollection;
