import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { makeStyles } from "tss-react/mui";
import useMediaQuery from "@mui/material/useMediaQuery";
import CartItem from "../components/CartItem";
import { CartItemProps } from "../types/CartItemProps";

const Cart = () => {
  const { classes } = useStyles();
  const items = useSelector<RootState, CartItemProps[]>(
    (state) => state.shoppingCartReducer.items
  );
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {matches ? (
        <Box className={classes.titleBoxMobile}>
          <Typography variant="h3">Cart</Typography>
        </Box>
      ) : (
        <Typography variant="h3">Cart</Typography>
      )}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={12}>
            <CartItem {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cart;

const useStyles = makeStyles()(() => ({
  titleBoxMobile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "primary.bright",
  },
}));
