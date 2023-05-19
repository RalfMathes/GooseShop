import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import StoreItem from "../components/StoreItem";
import useFilterItems from "../hooks/useFilterItems";
import useGetCategory from "../hooks/useGetCategory";
import { StoreItemProps } from "../types/StoreItemProps";
import capitaliseWord from "../utilities/captialiseWord";

const Category = () => {
  const { categoryId } = useParams();
  const filterId = Number.parseInt(categoryId ?? "1");
  const { classes } = useStyles();
  const category = useGetCategory(filterId);
  const filteredItems: StoreItemProps[] = useFilterItems("category", filterId);
  const [visibleItems, setVisibleItems] =
    useState<StoreItemProps[]>(filteredItems);
  const [activeTag, setActiveTag] = useState("");

  useEffect(() => {
    if (activeTag !== "") {
      setVisibleItems(
        visibleItems.filter((item) => item.tags.includes(activeTag))
      );
    }
  }, [activeTag]);

  const storeItemCallback = (event: any, tag: string) => {
    setActiveTag(tag);
  };

  return (
    <>
      <div className={classes.centerDiv}>
        <img className={classes.hero} src={category?.imgUrl} />
      </div>
      <Typography variant="h3" className={classes.centeredText}>
        {capitaliseWord(category?.name ?? "")}
      </Typography>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {visibleItems.map((item) => (
            <Grid
              className={classes.gridItem}
              key={item.id}
              item
              xs={12}
              sm={6}
            >
              <StoreItem {...item} onTagClick={storeItemCallback} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Category;

const useStyles = makeStyles()((theme) => ({
  centerDiv: {
    height: "50%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  centeredText: {
    textAlign: "center",
    marginBottom: 70,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 40,
    },
  },
  hero: {
    width: "100%",
    position: "relative",
    maxWidth: "1200px",
    display: "flex",
    alignItems: "center",
    marginTop: -70,
    marginBottom: 70,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginBottom: 40,
    },
  },
  gridItem: {
    marginBottom: 30,
  },
}));
