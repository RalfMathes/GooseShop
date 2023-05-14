import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import StoreItem from "../components/StoreItem";
import { makeStyles } from "tss-react/mui";
import useFilterItems from "../hooks/useFilterItems";
import { useParams } from "react-router-dom";
import useGetCollection from "../hooks/useGetCollection";

type StoreItemProps = {
  id: number;
  categoryId: number;
  collectionId: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Collection = () => {
  const { collectionId } = useParams();
  const filterId = Number.parseInt(collectionId ?? "1");
  const { classes } = useStyles();
  const collection = useGetCollection(filterId);
  const filteredItems: StoreItemProps[] = useFilterItems(
    "collection",
    filterId
  );

  return (
    <>
      <Box className={classes.titleBoxMobile}>
        <Typography variant="h3">{collection?.name}</Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={6}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Collection;

const useStyles = makeStyles()(() => ({
  titleBoxMobile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "primary.bright",
  },
}));
