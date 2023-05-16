import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import useGetItem from "../hooks/useGetItem";
import { setTitle } from "../redux/slices/title/title";
import capitaliseWord from "../utilities/captialiseWord";
import formatCurrency from "../utilities/formatCurrency";

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
    <Container className={classes.itemContainer}>
      <img className={classes.itemImage} src={item?.imgUrl}></img>
      <Typography className={classes.itemTitle} variant="h3">
        {capitaliseWord(item?.name ?? "")}
      </Typography>
      <Typography className={classes.priceTag}>
        {formatCurrency(item?.price ?? 0)}
      </Typography>
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
      </Grid> */}
    </Container>
  );
};

export default Item;

const useStyles = makeStyles()(() => ({
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
  },
  itemImage: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "white",
    boxShadow: "0 1px 2px rgba(0,0,0, .15)",
    marginBottom: 15,
  },
  itemTitle: {
    textAlign: "center",
  },
  priceTag: {
    textAlign: "start",
  },
}));
