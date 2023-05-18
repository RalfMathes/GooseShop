import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";

import { Link } from "react-router-dom";
import { StoreItemProps } from "../types/StoreItemProps";
import formatCurrency from "../utilities/formatCurrency";
import AddToCartCluster from "./AddToCartCluster";

const StoreItem = ({ ...item }: StoreItemProps) => {
  const { classes } = useStyles();

  return (
    <Card variant="elevation" className={classes.storeItemCard}>
      <Link to={`/item/${item.id}`}>
        <CardMedia
          className={classes.cardMedia}
          image={item.imgUrl}
          title={item.name}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {item.name}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {formatCurrency(item.price)}
        </Typography>
      </CardContent>
      <AddToCartCluster {...item} />
      <Stack className={classes.tagStack} direction="row" spacing={2}>
        {item.tags.map((tag: string, index: number) => (
          <Chip
            key={index}
            className={classes.tagChip}
            color="primary"
            size="small"
            label={tag}
            onClick={(event) => item.onTagClick(event, tag)}
          />
        ))}
      </Stack>
    </Card>
  );
};

export default StoreItem;

const useStyles = makeStyles()(() => ({
  cardMedia: {
    height: 140,
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
