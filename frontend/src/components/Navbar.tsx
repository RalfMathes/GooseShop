import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return matches ? (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Button>
            <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
              <MenuIcon />
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  ) : (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography sx={{ mr: 2 }}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
          </Typography>
          <Typography sx={{ mr: 2 }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/collection"
            >
              Collections
            </Link>
          </Typography>
          <Typography sx={{ flexGrow: 1 }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/category"
            >
              Categories
            </Link>
          </Typography>
          <Button>
            <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
              Cart
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
