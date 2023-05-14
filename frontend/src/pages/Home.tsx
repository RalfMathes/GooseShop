import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import StoreItem from "../components/StoreItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreItems } from "../redux/slices/storeItems/storeItems";
import { AppDispatch, RootState } from "../redux/store";
import { makeStyles } from "tss-react/mui";

type StoreItemProps = {
  id: number;
  categoryId: number;
  collectionId: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Home = () => {
  const { classes } = useStyles();
  const storeItems: StoreItemProps[] = useSelector<RootState, StoreItemProps[]>(
    (state) => state.storeItemsReducer.items
  );
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(fetchStoreItems());
  }, []);
  return (
    <>
      <Box className={classes.titleBoxMobile}>
        <Typography variant="h3">Home</Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {storeItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={6}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;

const useStyles = makeStyles()(() => ({
  titleBoxMobile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "primary.bright",
  },
}));
