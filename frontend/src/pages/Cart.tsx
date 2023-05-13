import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartItem from "../components/CartItem";

type CartItemProps = {
  id: number;
  quantity: number;
};

const Cart = () => {
  const items = useSelector<RootState, CartItemProps[]>(
    (state) => state.shoppingCart.items
  );

  return (
    <>
      <Typography variant="h2">Cart</Typography>
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
