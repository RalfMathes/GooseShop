import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollections } from "../redux/slices/collections/collections";
import { AppDispatch, RootState } from "../redux/store";
import { makeStyles } from "tss-react/mui";
import StoreCollection from "../components/StoreCollection";

type CollectionsProps = {
  id: number;
  name: string;
  imgUrl: string;
};

const Collections = () => {
  const { classes } = useStyles();
  const collections: CollectionsProps[] = useSelector<
    RootState,
    CollectionsProps[]
  >((state) => state.collectionsReducer.collections);
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(fetchCollections());
  }, []);
  return (
    <>
      <Box className={classes.titleBoxMobile}>
        <Typography variant="h3">Collections</Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {collections.map((collection) => (
          <Grid key={collection.id} item xs={12} sm={6}>
            <StoreCollection {...collection} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Collections;

const useStyles = makeStyles()(() => ({
  titleBoxMobile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "primary.bright",
  },
}));
