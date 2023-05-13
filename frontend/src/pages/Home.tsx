import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import StoreItem from "../components/StoreItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreItems } from "../redux/slices/storeItems/storeItems";
import { AppDispatch, RootState } from "../redux/store";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Home = () => {
  const storeItems: StoreItemProps[] = useSelector<RootState, StoreItemProps[]>(
    (state) => state.storeItems.items
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchStoreItems());
  }, []);
  return (
    <>
      <Typography variant="h1">Home</Typography>
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
