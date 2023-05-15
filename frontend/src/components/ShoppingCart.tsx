import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { RootState } from "../redux/store";

const ShoppingCart = () => {
  const { classes } = useStyles();
  const shoppingCartCount = useSelector<RootState, number>(
    (state) => state.shoppingCartReducer.count
  );

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
    textDecoration: "none",
    color: "white",
  },
}));
