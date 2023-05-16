export type StoreItemProps = {
  id: number;
  categoryId: number;
  collectionId: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  tags: string[];
  onTagClick: (item: any, tag: string) => void;
};
