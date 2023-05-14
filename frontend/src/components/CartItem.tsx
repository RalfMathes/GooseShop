import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import formatCurrency from "../utilities/formatCurrency";
import { makeStyles } from "tss-react/mui";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  increaseItem,
  decreaseItem,
  removeItem,
} from "../redux/slices/shoppingCart/shoppingCart";
import { useEffect } from "react";
import { fetchStoreItems } from "../redux/slices/storeItems/storeItems";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const appDispatch = useDispatch<AppDispatch>();
  const storeItems: StoreItemProps[] = useSelector<RootState, StoreItemProps[]>(
    (state) => state.storeItemsReducer.items
  );

  useEffect(() => {
    appDispatch(fetchStoreItems());
  }, []);
  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  const handleIncreaseItem = () => {
    dispatch(increaseItem(id));
  };

  const handleDecreaseItem = () => {
    dispatch(decreaseItem(id));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.flexCard}>
        <CardMedia
          className={classes.itemCard}
          image={item.imgUrl}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body1">
            {item.name} x{quantity}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {formatCurrency(item.price)}
          </Typography>
        </CardContent>
        <Box className={classes.columnBox}>
          <Button onClick={handleIncreaseItem}>+</Button>
          <Button onClick={handleDecreaseItem}>-</Button>
          <Button onClick={handleRemoveItem}>Remove Item</Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default CartItem;

const useStyles = makeStyles()(() => ({
  flexCard: {
    display: "flex",
  },
  columnBox: {
    display: "flex",
    flexGrow: 2,
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "space-evenly",
  },
  itemCard: {
    height: 140,
    width: 140,
  },
}));
