import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { makeStyles } from "tss-react/mui";
import useGetItemCount from "../hooks/useGetItemCount";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../redux/slices/shoppingCart/shoppingCart";
import { StoreItemProps } from "../types/StoreItemProps";

const AddToCartCluster = (item: StoreItemProps) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const itemCount = useGetItemCount(item.id);
  const noItemsAdded = itemCount === 0;

  const handleIncreaseItem = () => {
    dispatch(increaseItem([item.id, item.price]));
  };

  const handleDecreaseItem = () => {
    dispatch(decreaseItem(item.id));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className={classes.flexBoxColumn}>
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
              className={classes.compactButton}
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
              className={classes.compactButton}
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
    </div>
  );
};

export default AddToCartCluster;

const useStyles = makeStyles()((theme) => ({
  cartCountText: {
    marginLeft: 8,
    marginRight: 8,
  },
  compactButton: {
    minWidth: 40,
  },
  flexBoxColumn: {
    display: "flex",
    justifyContent: "center",
    height: 83,
    width: 163,
    flexDirection: "column",
  },
  flexBoxCenter: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
}));
