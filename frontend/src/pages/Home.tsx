import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";
import StoreCategory from "../components/StoreCategory";
import StoreCollection from "../components/StoreCollection";
import useGetCategories from "../hooks/useGetCategories";
import { fetchCategories } from "../redux/slices/categories/categories";
import { fetchCollections } from "../redux/slices/collections/collections";
import { setTitle } from "../redux/slices/title/title";
import { AppDispatch, RootState } from "../redux/store";
import { CollectionProps } from "../types/CollectionProps";

const Home = () => {
  const { classes } = useStyles();
  const collections: CollectionProps[] = useSelector<
    RootState,
    CollectionProps[]
  >((state) => state.collectionsReducer.collections);
  const categories = useGetCategories();
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
  contentTitle: {
    display: "flex",
    justifyContent: "center",
  },
  scrollGrid: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
}));
