import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchCollections } from "../redux/slices/collections/collections";
import { CollectionProps } from "../types/CollectionProps";

const useGetCollection = (filterId: number) => {
  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(fetchCollections());
  }, []);

  const unfilteredCollections = useSelector<RootState, CollectionProps[]>(
    (state) => state.collectionsReducer.collections
  );

  return unfilteredCollections.find(
    (collection: CollectionProps) => collection.id == filterId
  );
};

export default useGetCollection;
