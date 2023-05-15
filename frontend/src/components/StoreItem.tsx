import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";

import { Link } from "react-router-dom";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../redux/slices/shoppingCart/shoppingCart";
import { RootState } from "../redux/store";
import { CartItemProps } from "../types/CartItemProps";
import { StoreItemProps } from "../types/StoreItemProps";
import formatCurrency from "../utilities/formatCurrency";

const StoreItem = ({
  id,
  name,
  price,
  imgUrl,
  tags,
  onTagClick,
}: StoreItemProps) => {
  const itemCount = useSelector<RootState, number>(
    (state) =>
      state.shoppingCartReducer.items.find(
        (item: CartItemProps) => item.id == id
      )?.quantity || 0
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
    <Card variant="elevation" className={classes.storeItemCard}>
      <Link to={`/item/${id}`}>
        <CardMedia className={classes.cardMedia} image={imgUrl} title={name} />
      </Link>
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
        <Box className={classes.flexBoxCenter}>
          <Button variant="contained" onClick={handleIncreaseItem}>
            Add to Cart
          </Button>
        </Box>
      ) : (
        <>
          <Box className={classes.flexBoxCenter}>
            <Button
              size="small"
              variant="contained"
              onClick={handleDecreaseItem}
            >
              <RemoveIcon />
            </Button>
            <Typography className={classes.cartCountText}>
              {itemCount} in cart
            </Typography>
            <Button
              size="small"
              variant="contained"
              onClick={handleIncreaseItem}
            >
              <AddIcon />
            </Button>
          </Box>
          <Box className={classes.flexBoxCenter}>
            <Button size="small" variant="contained" onClick={handleRemoveItem}>
              Remove Item
            </Button>
          </Box>
        </>
      )}
      <Stack className={classes.tagStack} direction="row" spacing={2}>
        {tags.map((tag: string) => (
          <Chip
            className={classes.tagChip}
            color="primary"
            size="small"
            label={tag}
            onClick={(event) => onTagClick(event, tag)}
          />
        ))}
      </Stack>
    </Card>
  );
};

export default StoreItem;

const useStyles = makeStyles()(() => ({
  cartCountText: {
    marginLeft: 8,
    marginRight: 8,
  },
  tagStack: {
    flexWrap: "wrap",
  },
  storeItemCard: {
    borderRadius: 10,
  },
  flexBoxCenter: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardMedia: {
    height: 140,
    margin: 5,
  },
  tagChip: {
    marginBottom: 5,
    marginLeft: 5,
  },
}));
