import useGetStoreItems from "./useGetStoreItems";

const useGetCartItem = (id: number) => {
  const storeItems = useGetStoreItems();
  return storeItems.find((item) => item.id === id);
};

export default useGetCartItem;
