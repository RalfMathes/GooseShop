import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "tss-react/mui";
import StoreCategory from "../components/StoreCategory";
import StoreCollection from "../components/StoreCollection";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import useGetCategories from "../hooks/useGetCategories";
import useGetCollections from "../hooks/useGetCollections";
import { fetchCollections } from "../redux/slices/collections/collections";
import { setTitle } from "../redux/slices/title/title";
import { AppDispatch } from "../redux/store";

const Home = () => {
  const { classes } = useStyles();
  const collections = useGetCollections();
  const categories = useGetCategories();
  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const isMobileView = useGetBreakpointBool();

  useEffect(() => {
    appDispatch(fetchCollections());
    dispatch(setTitle("Home"));
  }, []);

  return (
    <>
      <img className={classes.hero} src="/static/hero.png" />
      <Container>
        <Grid className={classes.iconGrid} container spacing={2}>
          <Grid className={classes.iconGridItem} item xs={6} sm={3}>
            <LocalShippingIcon className={classes.spacedIcon} />
            <Typography className={classes.iconCaption} variant="body2">
              Fast and reliable delivery
            </Typography>
          </Grid>
          <Grid className={classes.iconGridItem} item xs={6} sm={3}>
            <ThumbUpIcon className={classes.spacedIcon} />
            <Typography className={classes.iconCaption} variant="body2">
              Approved by geese around the world
            </Typography>
          </Grid>
          <Grid className={classes.iconGridItem} item xs={6} sm={3}>
            <ContactSupportIcon className={classes.spacedIcon} />
            <Typography className={classes.iconCaption} variant="body2">
              Friendly and fast support
            </Typography>
          </Grid>
          <Grid className={classes.iconGridItem} item xs={6} sm={3}>
            <FavoriteIcon className={classes.spacedIcon} />
            <Typography className={classes.iconCaption} variant="body2">
              High quality products
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div id="categories" className={classes.categoriesRoot}>
        <Typography variant="h4" className={classes.categoryTitle}>
          Categories
        </Typography>
        <div className={classes.scrollGrid}>
          {categories.map((category) => (
            <StoreCategory key={category.id} {...category} />
          ))}
        </div>
      </div>
      <div id="collections" className={classes.collectionsRoot}>
        <Typography variant="h4" className={classes.collectionTitle}>
          Collections
        </Typography>
        <Container>
          {collections.map((collection) => (
            <StoreCollection key={collection.id} {...collection} />
          ))}
        </Container>
      </div>
    </>
  );
};

export default Home;

const useStyles = makeStyles()((theme) => ({
  hero: {
    width: "100%",
    height: "400",
    backgroundSize: "cover",
    marginTop: -70,
    marginBottom: 70,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginBottom: 40,
    },
  },
  borderDiv: {
    border: 2,
    borderStyle: "solid",
  },
  categoriesRoot: {
    backgroundColor: "rgba(251, 139, 23, 0.4)",
    padding: "20px 0px 40px 0px",
  },
  collectionsRoot: {
    padding: "20px 0px 20px 0px",
  },
  categoryTitle: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  collectionTitle: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: -20,
  },
  iconCaption: {
    margin: "0 30px 0 30px",
  },
  iconGrid: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 30,
    },
  },
  iconGridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 40,
    },
  },
  scrollGrid: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarColor: "#fb8b17",
    whiteSpace: "nowrap",
    padding: "0 20px 0 20px",
  },
  spacedIcon: {
    marginBottom: 20,
    fontSize: 40,
  },
}));
