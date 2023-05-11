import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import * as React from "react";

const pages = ["Home", "Collections", "Categories"];
const paths = ["/", "/collection", "/category"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return matches ? (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page, index) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={paths[index]}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
