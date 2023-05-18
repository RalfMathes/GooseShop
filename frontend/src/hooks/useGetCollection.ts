import { CollectionProps } from "../types/CollectionProps";
import useGetCollections from "./useGetCollections";

const useGetCollection = (filterId: number) => {
  const unfilteredCollections = useGetCollections();

  return unfilteredCollections.find(
    (collection: CollectionProps) => collection.id == filterId
  );
};

export default useGetCollection;
