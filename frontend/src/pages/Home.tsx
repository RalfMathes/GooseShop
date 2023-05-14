import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { makeStyles } from "tss-react/mui";
import { fetchCategories } from "../redux/slices/categories/categories";
import { fetchCollections } from "../redux/slices/collections/collections";
import StoreCategory from "../components/StoreCategory";
import StoreCollection from "../components/StoreCollection";

type CategoryProps = {
  id: number;
  name: string;
  imgUrl: string;
};

type CollectionProps = {
  id: number;
  name: string;
  imgUrl: string;
};

const Home = () => {
  const { classes } = useStyles();
  const collections: CollectionProps[] = useSelector<
    RootState,
    CollectionProps[]
  >((state) => state.collectionsReducer.collections);
  const categories: CategoryProps[] = useSelector<RootState, CategoryProps[]>(
    (state) => state.categoriesReducer.categories
  );
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(fetchCategories());
    appDispatch(fetchCollections());
  }, []);

  return (
    <>
      <Box className={classes.titleBoxMobile}>
        <Typography variant="h3">Home</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" className={classes.contentTitle}>
            Categories
          </Typography>
          <Stack>
            {categories.map((category) => (
              <Box key={category.id}>
                <StoreCategory {...category} />
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" className={classes.contentTitle}>
            Collections
          </Typography>
          <Stack>
            {collections.map((collection) => (
              <Box key={collection.id}>
                <StoreCollection {...collection} />
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

const useStyles = makeStyles()(() => ({
  contentTitle: {
    display: "flex",
    justifyContent: "center",
  },
  titleBoxMobile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "primary.bright",
  },
}));
