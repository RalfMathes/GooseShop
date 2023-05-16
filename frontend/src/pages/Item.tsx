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
    <>
      <Container className={classes.itemContainer}>
        <img className={classes.itemImage} src={item?.imgUrl}></img>
        <Typography className={classes.itemTitle} variant="h3">
          {capitaliseWord(item?.name ?? "")}
        </Typography>
        <Typography className={classes.priceTag} variant="h5">
          {formatCurrency(item?.price ?? 0)}
        </Typography>
      </Container>
      <div className={classes.textColoDiv}>
        <Container>
          <Typography variant="body1">{item?.description}</Typography>
        </Container>
      </div>
    </>
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
  totalText: {
    padding: "20px 20px 20px 0",
    textAlign: "end",
  },
  textColoDiv: {
    backgroundColor: "rgba(251, 139, 23, 0.4)",
  },
}));
