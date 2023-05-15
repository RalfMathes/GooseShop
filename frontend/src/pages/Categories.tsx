import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "tss-react/mui";
import StoreCategory from "../components/StoreCategory";
import useGetCategories from "../hooks/useGetCategories";
import { fetchCategories } from "../redux/slices/categories/categories";
import { setTitle } from "../redux/slices/title/title";
import { AppDispatch } from "../redux/store";

const Categories = () => {
  const { classes } = useStyles();
  const categories = useGetCategories();

  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();

  useEffect(() => {
    appDispatch(fetchCategories());
    dispatch(setTitle("Categories"));
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
    backgroundColor: "primary.bright",
    display: "flex",
    justifyContent: "center",
  },
}));
