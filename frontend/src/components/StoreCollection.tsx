import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";

type CollectionsProps = {
  id: number;
  name: string;
  imgUrl: string;
};

const StoreCollection = ({ id, name, imgUrl }: CollectionsProps) => {
  const { classes } = useStyles();

  return (
    <Link className={classes.navMenuLink} to={`/collection/${id}`}>
      <Card>
        <CardMedia
          className={classes.collectionCard}
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
  contentTitle: {
    display: "flex",
    justifyContent: "center",
  },
  flexBoxCenter: {
    display: "flex",
    alignItems: "center",
  },
  collectionCard: {
    height: 140,
  },
  navMenuLink: {
    textDecoration: "none",
    color: "black",
  },
}));
