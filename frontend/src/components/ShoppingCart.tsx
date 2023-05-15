import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import useGetShoppingCartCount from "../hooks/useGetShoppingCartCount";

const ShoppingCart = () => {
  const { classes } = useStyles();
  const shoppingCartCount = useGetShoppingCartCount();

  return (
    <IconButton>
      <Link className={classes.shoppingCartLink} to="/cart">
        <Badge badgeContent={shoppingCartCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </IconButton>
  );
};

export default ShoppingCart;

const useStyles = makeStyles()(() => ({
  shoppingCartLink: {
    color: "white",
    textDecoration: "none",
  },
}));
