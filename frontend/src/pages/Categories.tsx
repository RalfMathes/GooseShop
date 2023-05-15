import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/slices/categories/categories";
import { AppDispatch, RootState } from "../redux/store";
import { makeStyles } from "tss-react/mui";
import StoreCategory from "../components/StoreCategory";
import { CategoryProps } from "../types/CategoryProps";

const Categories = () => {
  const { classes } = useStyles();
  const categories: CategoryProps[] = useSelector<RootState, CategoryProps[]>(
    (state) => state.categoriesReducer.categories
  );
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(fetchCategories());
  }, []);
  return (
    <>
      <Box className={classes.titleBoxMobile}>
        <Typography variant="h3">Categories</Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {categories.map((category) => (
          <Grid key={category.id} item xs={12} sm={6}>
            <StoreCategory {...category} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Categories;

const useStyles = makeStyles()(() => ({
  titleBoxMobile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "primary.bright",
  },
}));
