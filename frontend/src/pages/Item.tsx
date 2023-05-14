import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import StoreItem from "../components/StoreItem";
import { makeStyles } from "tss-react/mui";
import useFilterItems from "../hooks/useFilterItems";
import { useParams } from "react-router-dom";
import useGetItem from "../hooks/useGetItem";

type StoreItemProps = {
  id: number;
  categoryId: number;
  collectionId: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Item = () => {
  const { itemId } = useParams();
  const filterId = Number.parseInt(itemId ?? "1");
  const { classes } = useStyles();
  const item = useGetItem(filterId);
  const filteredItems: StoreItemProps[] = useFilterItems(
    "collection",
    filterId
  );

  return (
    <>
      <Box className={classes.titleBoxMobile}>
        <Typography variant="h3">{item?.name}</Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid key={item?.id} item xs={12} sm={6}>
          <StoreItem
            id={0}
            categoryId={0}
            collectionId={0}
            name={""}
            price={0}
            imgUrl={""}
            {...item}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Item;

const useStyles = makeStyles()(() => ({
  titleBoxMobile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "primary.bright",
  },
}));
