import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import { CollectionProps } from "../types/CollectionProps";

const StoreCollection = ({
  id,
  name,
  description,
  imgUrl,
}: CollectionProps) => {
  const { classes } = useStyles();
  const isMobileView = useGetBreakpointBool();
  const idIsEven = id % 2 === 0;
  const renderMediaLeft = !isMobileView && idIsEven;

  return (
    <Link className={classes.navMenuLink} to={`/collection/${id}`}>
      <Card className={classes.collectionCardDesktop}>
        <div className={classes.storeCollectionWrapper}>
          {renderMediaLeft ? null : (
            <CardMedia
              className={classes.collectionCardMedia}
              image={imgUrl}
              title={name}
            />
          )}
          <CardContent className={classes.collectionCardContent}>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.contentTitle}
            >
              The {name} collection
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </CardContent>
          {renderMediaLeft ? (
            <CardMedia
              className={classes.collectionCardMedia}
              image={imgUrl}
              title={name}
            />
          ) : null}
        </div>
      </Card>
    </Link>
  );
};

export default StoreCollection;

const useStyles = makeStyles()((theme) => ({
  collectionCardDesktop: {
    width: "100%",
    marginTop: 50,
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  collectionCardContent: {
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },
  collectionCardMedia: {
    height: 220,
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      height: 400,
    },
  },
  collectionCardMobile: {
    width: 200,
    marginBottom: 20,
    flexGrow: 1,
  },
  contentTitle: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "#fb8b17",
  },
  flexBoxCenter: {
    alignItems: "center",
    display: "flex",
  },
  navMenuLink: {
    color: "black",
    textDecoration: "none",
  },
  storeCollectionWrapper: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
}));
