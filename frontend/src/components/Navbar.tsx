import {
  AppBar,
  Box,
  Container,
  Grid,
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

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return matches ? (
    <AppBar className={classes.appBarMobile}>
      <Container>
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
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  ) : (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <IconButton className={classes.iconRoot}>
            <Link className={classes.navBarLink} to="/">
              <img className={classes.imageIcon} src="/static/goose.svg" />
            </Link>
          </IconButton>
          {pages.map((page, index) => (
            <Typography key={page} className={classes.navBarItem}>
              <Link className={classes.navBarLink} to={paths[index]}>
                {page}
              </Link>
            </Typography>
          ))}
          <Box className={classes.flexBoxRight} />
          <ShoppingCart />
        </Toolbar>
      </Container>
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
    backdropFilter: "blur10px",
    position: "fixed",
    top: "auto",
    bottom: 0,
    width: "96%",
    marginRight: "2%",
    marginBottom: "10px",
  },
  flexBoxCenter: {
    flexGrow: 0,
  },
  flexBoxRight: {
    flexGrow: 1,
  },
  flexBoxLeft: {
    flexGrow: 2,
  },
  imageIcon: {
    display: "flex",
    height: "24px",
    width: "24px",
    fill: "white",
    stroke: "white",
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
