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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setAnchorElement } from "../redux/slices/anchorElementMenu/anchorElementMenu";

const pages = ["Home", "Collections", "Categories"];
const paths = ["/", "/collection", "/category"];

const Navbar = () => {
  const menuAnchorElement = useSelector<RootState, null | HTMLElement>(
    (state) => state.anchorElement.element
  );
  const dispatch = useDispatch();
  const { classes } = useStyles();
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorElUser(event.currentTarget);
    dispatch(setAnchorElement(event.currentTarget));
  };

  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
    dispatch(setAnchorElement(null));
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
          <Box className={classes.flexBoxCenter}>
            <Tooltip title="Page menu">
              <IconButton onClick={handleOpenUserMenu}>
                <MenuIcon className={classes.navBarIcon} />
              </IconButton>
            </Tooltip>
            <Menu
              className={classes.navBarMenu}
              id="menu-appbar"
              anchorEl={menuAnchorElement}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(menuAnchorElement)}
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
          </Box>
          <Button>
            <Link className={classes.navBarLink} to="/cart">
              Cart
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  ) : (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          {pages.map((page, index) => (
            <Typography key={page} className={classes.navBarItem}>
              <Link className={classes.navBarLink} to={paths[index]}>
                {page}
              </Link>
            </Typography>
          ))}
          <Button>
            <Link className={classes.navBarLink} to="/cart">
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
  flexBoxCenter: {
    flexGrow: 0,
  },
  imageIcon: {
    height: "100%",
    fill: "white",
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
    marginTop: "45px",
  },
  navMenuLink: {
    textDecoration: "none",
    color: "black",
  },
}));
