import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";
import StoreCollection from "../components/StoreCollection";
import { fetchCollections } from "../redux/slices/collections/collections";
import { setTitle } from "../redux/slices/title/title";
import { AppDispatch, RootState } from "../redux/store";
import { CollectionProps } from "../types/CollectionProps";

const Collections = () => {
  const { classes } = useStyles();
  const collections: CollectionProps[] = useSelector<
    RootState,
    CollectionProps[]
  >((state) => state.collectionsReducer.collections);
  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();

  useEffect(() => {
    appDispatch(fetchCollections());
    dispatch(setTitle("Collections"));
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
    backgroundColor: "primary.bright",
    display: "flex",
    justifyContent: "center",
  },
}));
