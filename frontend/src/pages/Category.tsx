import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import StoreItem from "../components/StoreItem";
import { makeStyles } from "tss-react/mui";
import useFilterItems from "../hooks/useFilterItems";
import { useParams } from "react-router-dom";
import useGetCategory from "../hooks/useGetCategory";
import { StoreItemProps } from "../types/StoreItemProps";

const Category = () => {
  const { categoryId } = useParams();
  const filterId = Number.parseInt(categoryId ?? "1");
  const { classes } = useStyles();
  const category = useGetCategory(filterId);
  const filteredItems: StoreItemProps[] = useFilterItems("category", filterId);

  return (
    <>
      <Box className={classes.titleBoxMobile}>
        <Typography variant="h3">{category?.name}</Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={6}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Category;

const useStyles = makeStyles()(() => ({
  titleBoxMobile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "primary.bright",
  },
}));
