import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import StoreItem from "../components/StoreItem";
import useGetItem from "../hooks/useGetItem";
import { setTitle } from "../redux/slices/title/title";

const Item = () => {
  const { itemId } = useParams();
  const filterId = Number.parseInt(itemId ?? "1");
  const { classes } = useStyles();
  const item = useGetItem(filterId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(item?.name));
  }, []);

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid key={item?.id} item xs={12} sm={6}>
          <StoreItem
            id={0}
            categoryId={0}
            collectionId={0}
            name={""}
            price={0}
            imgUrl={""}
            tags={[]}
            onTagClick={() => {
              console.log("Dummy funcion");
            }}
            {...item}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Item;

const useStyles = makeStyles()(() => ({}));
