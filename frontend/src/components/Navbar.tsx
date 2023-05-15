import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import ShoppingCart from "./ShoppingCart";

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
  appBarDesktop: {
    marginBottom: 8,
    position: "sticky",
  },
  appBarMobile: {
    borderRadius: "15px",
    bottom: 0,
    left: "2%",
    marginBottom: "6px",
    position: "fixed",
    top: "auto",
    width: "96%",
  },
  flexBoxRight: {
    flexGrow: 1,
  },
  iconRoot: {
    textAlign: "center",
  },
  imageIcon: {
    display: "flex",
    filter: "invert(100%)",
    height: "24px",
    width: "24px",
  },
  mobileBarGrid: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  navBarIcon: {
    color: "white",
  },
  navBarItem: {
    marginRight: "16px",
  },
  navBarLink: {
    color: "white",
    textDecoration: "none",
  },
  navBarMenu: {
    marginTop: "-45px",
  },
  navMenuLink: {
    color: "black",
    textDecoration: "none",
  },
}));
