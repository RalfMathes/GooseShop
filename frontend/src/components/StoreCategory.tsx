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
    <Card>
      <CardMedia className={classes.categoryCard} image={imgUrl} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </CardContent>
      <Box className={classes.flexBoxCenter}>
        <Button>
          <Link className={classes.navMenuLink} to={`/category/${id}`}>
            Go to {name} category
          </Link>
        </Button>
      </Box>
    </Card>
  );
};

export default StoreCategory;

const useStyles = makeStyles()(() => ({
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
