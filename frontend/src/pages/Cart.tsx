import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { makeStyles } from "tss-react/mui";
import CartItem from "../components/CartItem";
import { CartItemProps } from "../types/CartItemProps";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import { useEffect } from "react";
import { setTitle } from "../redux/slices/title/title";

const Cart = () => {
  const { classes } = useStyles();
  const items = useSelector<RootState, CartItemProps[]>(
    (state) => state.shoppingCartReducer.items
  );
  const isMobileView = useGetBreakpointBool();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Cart"));
  }, []);

  return (
    <>
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

const useStyles = makeStyles()(() => ({}));
