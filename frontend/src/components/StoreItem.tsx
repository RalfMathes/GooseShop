import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import formatCurrency from "../utilities/formatCurrency";
import { makeStyles } from "tss-react/mui";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  increaseItem,
  decreaseItem,
  removeItem,
} from "../redux/slices/shoppingCart/shoppingCart";

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

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const itemCount = useSelector<RootState, number>(
    (state) =>
      state.shoppingCart.items.find((item: CartItemProps) => item.id == id)
        ?.quantity || 0
  );

  const { classes } = useStyles();
  const dispatch = useDispatch();

  const noItemsAdded = itemCount === 0;

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
    <Card>
      <CardMedia className={classes.itemCard} image={imgUrl} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {formatCurrency(price)}
        </Typography>
      </CardContent>
      {noItemsAdded ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button onClick={handleIncreaseItem}>Add to Cart</Button>
        </Box>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button onClick={handleDecreaseItem}>-</Button>
            <Typography>{itemCount} in cart</Typography>
            <Button onClick={handleIncreaseItem}>+</Button>
          </Box>
          <Box>
            <Button onClick={handleRemoveItem}>Remove Item</Button>
          </Box>
        </>
      )}
    </Card>
  );
};

export default StoreItem;

const useStyles = makeStyles()(() => ({
  itemCard: {
    height: 140,
  },
}));
