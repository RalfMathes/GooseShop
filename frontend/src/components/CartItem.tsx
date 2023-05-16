import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "tss-react/mui";
import useGetCartItem from "../hooks/useGetCartItem";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../redux/slices/shoppingCart/shoppingCart";
import { fetchStoreItems } from "../redux/slices/storeItems/storeItems";
import { AppDispatch } from "../redux/store";
import { CartItemProps } from "../types/CartItemProps";
import formatCurrency from "../utilities/formatCurrency";

const CartItem = ({ id, quantity, price }: CartItemProps) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const appDispatch = useDispatch<AppDispatch>();
  const item = useGetCartItem(id);

  useEffect(() => {
    appDispatch(fetchStoreItems());
  }, []);

  if (item == null) return null;

  const handleIncreaseItem = () => {
    dispatch(increaseItem([id, price]));
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
  columnBox: {
    alignItems: "end",
    display: "flex",
    flexDirection: "column",
    flexGrow: 2,
    justifyContent: "space-evenly",
    marginRight: 8,
  },
  flexCard: {
    display: "flex",
  },
  itemCard: {
    height: 140,
    margin: 8,
    width: 140,
  },
}));
