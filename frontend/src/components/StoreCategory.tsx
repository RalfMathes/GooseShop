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

type CategoriesProps = {
  id: number;
  name: string;
  imgUrl: string;
};

const StoreCategory = ({ id, name, imgUrl }: CategoriesProps) => {
  const { classes } = useStyles();

  return (
    <Link className={classes.navMenuLink} to={`/category/${id}`}>
      <Card>
        <CardMedia
          className={classes.categoryCard}
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
  contentTitle: {
    display: "flex",
    justifyContent: "center",
  },
  flexBoxCenter: {
    display: "flex",
    alignItems: "center",
  },
  categoryCard: {
    height: 140,
  },
  navMenuLink: {
    textDecoration: "none",
    color: "black",
  },
}));
