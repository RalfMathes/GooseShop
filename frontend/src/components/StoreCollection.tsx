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
    <Card>
      <CardMedia
        className={classes.collectionCard}
        image={imgUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </CardContent>
      <Box className={classes.flexBoxCenter}>
        <Button>
          <Link className={classes.navMenuLink} to={`/collection/${id}`}>
            Go to {name} collection
          </Link>
        </Button>
      </Box>
    </Card>
  );
};

export default StoreCollection;

const useStyles = makeStyles()(() => ({
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
