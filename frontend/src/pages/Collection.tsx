import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import StoreItem from "../components/StoreItem";
import { makeStyles } from "tss-react/mui";
import useFilterItems from "../hooks/useFilterItems";
import { useParams } from "react-router-dom";
import useGetCollection from "../hooks/useGetCollection";
import { StoreItemProps } from "../types/StoreItemProps";
import { useEffect, useState } from "react";
import { setTitle } from "../redux/slices/title/title";
import { useDispatch } from "react-redux";

const Collection = () => {
  const { collectionId } = useParams();
  const filterId = Number.parseInt(collectionId ?? "1");
  const { classes } = useStyles();
  const collection = useGetCollection(filterId);
  const filteredItems: StoreItemProps[] = useFilterItems(
    "collection",
    filterId
  );
  const [visibleItems, setVisibleItems] =
    useState<StoreItemProps[]>(filteredItems);
  const [activeTag, setActiveTag] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Collection: " + collection?.name));
  }, []);

  useEffect(() => {
    if (activeTag !== "") {
      setVisibleItems(
        visibleItems.filter((item) => item.tags.includes(activeTag))
      );
    }
  }, [activeTag]);

  const storeItemCallback = (event: any, tag: string) => {
    setActiveTag(tag);
  };

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {visibleItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={6}>
            <StoreItem
              id={item.id}
              categoryId={item.categoryId}
              collectionId={item.collectionId}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
              tags={item.tags}
              onTagClick={storeItemCallback}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Collection;

const useStyles = makeStyles()(() => ({}));
