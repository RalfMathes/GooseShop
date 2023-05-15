import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import { CategoryProps } from "../types/CategoryProps";

const StoreCategory = ({ id, name, imgUrl }: CategoryProps) => {
  const { classes } = useStyles();
  const isMobileView = useGetBreakpointBool();

  return (
    <Link className={classes.navMenuLink} to={`/category/${id}`}>
      <Card
        className={
          isMobileView
            ? classes.categoryCardMobile
            : classes.categoryCardDesktop
        }
      >
        <CardMedia
          className={classes.categoryCardMedia}
          image={imgUrl}
          title={name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            className={classes.contentTitle}
          >
            {name}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default StoreCategory;

const useStyles = makeStyles()(() => ({
  categoryCardMobile: {
    width: 200,
  },
  categoryCardDesktop: {
    width: 400,
  },
  contentTitle: {
    display: "flex",
    justifyContent: "center",
  },
  flexBoxCenter: {
    display: "flex",
    alignItems: "center",
  },
  categoryCardMedia: {
    height: 140,
  },
  navMenuLink: {
    textDecoration: "none",
    color: "black",
  },
}));
