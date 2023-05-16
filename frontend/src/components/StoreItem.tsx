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
import { useDispatch } from "react-redux";
import { makeStyles } from "tss-react/mui";

import { Link } from "react-router-dom";
import useGetItemCount from "../hooks/useGetItemCount";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../redux/slices/shoppingCart/shoppingCart";
import { StoreItemProps } from "../types/StoreItemProps";
import formatCurrency from "../utilities/formatCurrency";

const StoreItem = ({
  id,
  name,
  description,
  price,
  imgUrl,
  tags,
  onTagClick,
}: StoreItemProps) => {
  const itemCount = useGetItemCount(id);

  const { classes } = useStyles();
  const dispatch = useDispatch();

  const noItemsAdded = itemCount === 0;

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
        {tags.map((tag: string, index: number) => (
          <Chip
            key={index}
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
  cardMedia: {
    height: 140,
  },
  flexBoxCenter: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  storeItemCard: {
    borderRadius: 10,
    boxShadow: "0 1px 2px rgba(0,0,0, .15)",
  },
  tagChip: {
    marginBottom: 10,
    marginLeft: 10,
  },
  tagStack: {
    flexWrap: "wrap",
  },
}));
