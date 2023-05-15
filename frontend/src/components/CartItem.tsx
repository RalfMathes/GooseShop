import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
import { StoreItemProps } from "../types/StoreItemProps";
import { CartItemProps } from "../types/CartItemProps";

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
          <Button variant="contained" onClick={handleIncreaseItem}>
            <AddIcon />
          </Button>
          <Button variant="contained" onClick={handleDecreaseItem}>
            <RemoveIcon />
          </Button>
          <Button variant="contained" onClick={handleRemoveItem}>
            <DeleteIcon />
          </Button>
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
    marginRight: 8,
  },
  itemCard: {
    height: 140,
    width: 140,
    margin: 8,
  },
}));
