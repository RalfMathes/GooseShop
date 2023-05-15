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
                <IconButton
                  className={classes.borderButton}
                  onClick={handleOpenUserMenu}
                >
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
                  <MenuItem key={index}>
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
                <Typography key={index} className={classes.navBarItem}>
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
    backgroundColor: "rgba(251, 139, 23, .75)",
    backdropFilter: "blur(4px)",
    borderBottom: "solid",
    borderColor: "#fb8b17",
    borderWidth: 2,
    marginBottom: 8,
    position: "sticky",
  },
  appBarMobile: {
    backgroundColor: "rgba(251, 139, 23, .70)",
    backdropFilter: "blur(4px)",
    border: "solid",
    borderColor: "#fb8b17",
    borderRadius: "15px",
    borderWidth: 2,
    bottom: 0,
    left: "2%",
    marginBottom: "6px",
    position: "fixed",
    top: "auto",
    width: "96%",
  },
  borderButton: {
    backgroundColor: "rgba(251, 139, 23, .40)",
    border: "solid",
    borderColor: "#fb8b17",
    borderWidth: 1,
  },
  flexBoxRight: {
    flexGrow: 1,
  },
  iconRoot: {
    backgroundColor: "rgba(251, 139, 23, .40)",
    border: "solid",
    borderColor: "#fb8b17",
    borderWidth: 1,
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
