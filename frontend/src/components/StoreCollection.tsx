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
  collectionCardDesktop: {
    width: 400,
  },
  collectionCardMedia: {
    height: 140,
  },
  collectionCardMobile: {
    width: 200,
  },
  contentTitle: {
    display: "flex",
    justifyContent: "center",
  },
  flexBoxCenter: {
    alignItems: "center",
    display: "flex",
  },
  navMenuLink: {
    color: "black",
    textDecoration: "none",
  },
}));
