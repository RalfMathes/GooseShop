import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import * as React from "react";
import ShoppingCart from "./ShoppingCart";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import Tagbox from "./Tagbox";

const pages = ["Collections", "Categories"];
const paths = ["/collection", "/category"];

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

  const isMobileView = useGetBreakpointBool();
  return (
    <AppBar
      className={isMobileView ? classes.appBarMobile : classes.appBarDesktop}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <IconButton className={classes.iconRoot}>
            <Link className={classes.navBarLink} to="/">
              <img className={classes.imageIcon} src="/static/goose.svg" />
            </Link>
          </IconButton>
          {isMobileView ? (
            <>
              <ShoppingCart />
              <Tooltip title="Page menu">
                <IconButton onClick={handleOpenUserMenu}>
                  <MenuIcon className={classes.navBarIcon} />
                </IconButton>
              </Tooltip>
              <Menu
                className={classes.navBarMenu}
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
                      <Link className={classes.navMenuLink} to={paths[index]}>
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {pages.map((page, index) => (
                <Typography key={page} className={classes.navBarItem}>
                  <Link className={classes.navBarLink} to={paths[index]}>
                    {page}
                  </Link>
                </Typography>
              ))}
              <Tagbox />
              <Box className={classes.flexBoxRight} />
              <ShoppingCart />
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

const useStyles = makeStyles()(() => ({
  mobileBarGrid: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  appBarMobile: {
    borderRadius: "15px",
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: "2%",
    width: "96%",
    marginBottom: "6px",
  },
  appBarDesktop: {
    position: "sticky",
  },
  flexBoxRight: {
    flexGrow: 1,
  },
  imageIcon: {
    display: "flex",
    height: "24px",
    width: "24px",
    filter: "invert(100%)",
  },
  iconRoot: {
    textAlign: "center",
  },
  navBarItem: {
    marginRight: "16px",
  },
  navBarLink: {
    textDecoration: "none",
    color: "white",
  },
  navBarIcon: {
    color: "white",
  },
  navBarMenu: {
    marginTop: "-45px",
  },
  navMenuLink: {
    textDecoration: "none",
    color: "black",
  },
}));
