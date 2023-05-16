import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import useGetShoppingCartCount from "../hooks/useGetShoppingCartCount";

const ShoppingCart = () => {
  const { classes } = useStyles();
  const shoppingCartCount = useGetShoppingCartCount();

  return (
    <Link className={classes.shoppingCartLink} to="/cart">
      <IconButton className={classes.borderButton}>
        <Badge badgeContent={shoppingCartCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default ShoppingCart;

const useStyles = makeStyles()(() => ({
  borderButton: {
    ":hover": {
      color: "#fb8b17",
    },
    backgroundColor: "rgba(251, 139, 23, 1)",
    color: "white",
    border: "solid",
    borderColor: "#fb8b17",
    borderWidth: 1,
  },
  shoppingCartLink: {
    textDecoration: "none",
  },
}));
