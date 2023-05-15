import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";
import StoreCategory from "../components/StoreCategory";
import StoreCollection from "../components/StoreCollection";
import { fetchCategories } from "../redux/slices/categories/categories";
import { fetchCollections } from "../redux/slices/collections/collections";
import { setTitle } from "../redux/slices/title/title";
import { AppDispatch, RootState } from "../redux/store";
import { CategoryProps } from "../types/CategoryProps";
import { CollectionProps } from "../types/CollectionProps";

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
  const dispatch = useDispatch();

  useEffect(() => {
    appDispatch(fetchCategories());
    appDispatch(fetchCollections());
    dispatch(setTitle("Home"));
  }, []);

  return (
    <>
      <div>
        <Typography variant="h4" className={classes.contentTitle}>
          Categories
        </Typography>
        <div className={classes.scrollGrid}>
          {categories.map((category) => (
            <StoreCategory key={category.id} {...category} />
          ))}
        </div>
      </div>
      <div>
        <Typography variant="h4" className={classes.contentTitle}>
          Collections
        </Typography>
        <div className={classes.scrollGrid}>
          {collections.map((collection) => (
            <StoreCollection key={collection.id} {...collection} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

const useStyles = makeStyles()(() => ({
  borderDiv: {
    border: 2,
    borderStyle: "solid",
  },
  scrollGrid: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
  contentTitle: {
    display: "flex",
    justifyContent: "center",
  },
}));
