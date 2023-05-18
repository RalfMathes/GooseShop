import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";
import CartItem from "../components/CartItem";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import { RootState } from "../redux/store";
import { CartItemProps } from "../types/CartItemProps";
import formatCurrency from "../utilities/formatCurrency";

const Cart = () => {
  const { classes } = useStyles();
  const items = useSelector<RootState, CartItemProps[]>(
    (state) => state.shoppingCartReducer.items
  );
  const isMobileView = useGetBreakpointBool();
  const total = useSelector<RootState, number>(
    (state) => state.shoppingCartReducer.total
  );

  return (
    <>
      <Container className={classes.cartContainer}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {items.map((item, index) => (
            <Grid key={index} item xs={12} sm={12}>
              <CartItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={classes.textColoDiv}>
        <Container>
          <Typography className={classes.totalText} variant="h4">
            Total: {formatCurrency(total)}
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Cart;

const useStyles = makeStyles()(() => ({
  cartContainer: {
    paddingTop: 15,
  },
  textColoDiv: {
    backgroundColor: "rgba(251, 139, 23, 0.4)",
  },
  totalText: {
    padding: "20px 20px 20px 0",
    textAlign: "end",
  },
}));
