import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import { CollectionProps } from "../types/CollectionProps";

const StoreCollection = ({ id, name, imgUrl }: CollectionProps) => {
  const { classes } = useStyles();
  const isMobileView = useGetBreakpointBool();

  return (
    <Link className={classes.navMenuLink} to={`/collection/${id}`}>
      <Card
        className={
          isMobileView
            ? classes.collectionCardMobile
            : classes.collectionCardDesktop
        }
      >
        <CardMedia
          className={classes.collectionCardMedia}
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

export default StoreCollection;

const useStyles = makeStyles()(() => ({
  collectionCardMobile: {
    width: 200,
  },
  collectionCardDesktop: {
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
  collectionCardMedia: {
    height: 140,
  },
  navMenuLink: {
    textDecoration: "none",
    color: "black",
  },
}));
