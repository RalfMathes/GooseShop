import {
  AppBar,
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import * as React from "react";

const pages = ["Home", "Collections", "Categories"];
const paths = ["/", "/collection", "/category"];

const Navbar = () => {
  const { classes } = useStyles();
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
          <Icon className={classes.iconRoot}>
            <img className={classes.imageIcon} src="/static/goose.svg" />
          </Icon>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Page menu">
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
          {pages.map((page, index) => (
            <Typography key={page} sx={{ mr: 2 }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={paths[index]}
              >
                {page}
              </Link>
            </Typography>
          ))}
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

const useStyles = makeStyles()(() => ({
  imageIcon: {
    height: "100%",
    fill: "white",
  },
  iconRoot: {
    textAlign: "center",
  },
}));
