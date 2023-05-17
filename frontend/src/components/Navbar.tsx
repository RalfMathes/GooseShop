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

const anchorIds = ["categories", "collections"];

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
          <Link className={classes.navBarLink} to="/">
            <IconButton className={classes.iconRoot}>
              <img className={classes.imageIcon} src="/static/goose.svg" />
            </IconButton>
          </Link>
          {isMobileView ? (
            <>
              <ShoppingCart />
              <Tooltip title="Page menu">
                <IconButton
                  className={classes.borderButton}
                  onClick={handleOpenUserMenu}
                >
                  <MenuIcon />
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
                {anchorIds.map((anchorId: string, index) => (
                  <a
                    key={index}
                    className={classes.navMenuLink}
                    href={`#${anchorId}`}
                  >
                    <MenuItem>
                      <Typography textAlign="center">{anchorId}</Typography>
                    </MenuItem>
                  </a>
                ))}
              </Menu>
            </>
          ) : (
            <>
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
    backgroundColor: "rgba(255, 243, 231, .75)",
    backdropFilter: "blur(4px)",
    borderBottom: "solid",
    borderColor: "#e7dbd0",
    borderWidth: 1,
    boxShadow: "0 1px 2px rgba(0,0,0, .15)",
    position: "sticky",
  },
  appBarMobile: {
    backgroundColor: "rgba(255, 247, 238, .85)",
    backdropFilter: "blur(4px)",
    // border: "solid",
    // borderColor: "#fb8b17",
    borderRadius: "15px",
    // borderWidth: 2,
    bottom: 0,
    left: "2%",
    marginBottom: "6px",
    position: "fixed",
    top: "auto",
    width: "96%",
  },
  borderButton: {
    ":hover": {
      color: "rgba(251, 139, 23, 1)",
    },
    backgroundColor: "rgba(251, 139, 23, 1)",
    border: "solid",
    borderColor: "#fb8b17",
    borderWidth: 1,
    color: "white",
  },
  flexBoxRight: {
    flexGrow: 1,
  },
  iconRoot: {
    ":hover": {
      filter:
        "invert(53%) sepia(88%) saturate(925%) hue-rotate(350deg) brightness(102%) contrast(97%)",
    },
    backgroundColor: "#0474e8",
    border: "solid",
    borderColor: "#0474e8",
    borderWidth: 1,
    filter: "invert(100%)",
    textAlign: "center",
  },
  imageIcon: {
    display: "flex",
    height: "24px",
    width: "24px",
  },
  mobileBarGrid: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  navBarItem: {
    marginRight: "16px",
  },
  navBarLink: {
    color: "black",
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
