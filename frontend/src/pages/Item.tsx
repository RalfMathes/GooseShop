import { Chip, Container, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import AddToCartCluster from "../components/AddToCartCluster";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import useGetItem from "../hooks/useGetItem";
import capitaliseWord from "../utilities/captialiseWord";
import formatCurrency from "../utilities/formatCurrency";

const Item = () => {
  const { itemId } = useParams();
  const filterId = Number.parseInt(itemId ?? "1");
  const { classes } = useStyles();
  const item = useGetItem(filterId);
  const isMobileView = useGetBreakpointBool();

  return (
    <>
      <Container className={classes.itemContainer}>
        <div className={classes.imageContainer}>
          <img className={classes.itemImage} src={item.imgUrl}></img>
        </div>
        <div className={classes.storeItemWrapper}>
          <Typography className={classes.itemTitle} variant="h3">
            {capitaliseWord(item.name)}
          </Typography>
          <div className={classes.rowDiv}>
            <Typography className={classes.priceTag} variant="h5">
              {formatCurrency(item.price)}
            </Typography>
            <AddToCartCluster {...item} />
          </div>
          <div className={classes.descriptionDiv}>
            <Typography variant="body1">{item.description}</Typography>
          </div>
          <Stack className={classes.tagStack} direction="row">
            {item.tags.map((tag: string, index: number) => (
              <Chip
                key={index}
                className={classes.tagChip}
                color="primary"
                size="small"
                label={tag}
                // onClick={(event) => onTagClick(event, tag)}
              />
            ))}
          </Stack>
        </div>
      </Container>
      <div className={classes.optionalFooter}>
        <img
          className={classes.footerImage}
          src={"/static/goose_logo_shadow.png"}
        />
      </div>
    </>
  );
};

export default Item;

const breakpoint = 1200;

const useStyles = makeStyles()((theme) => ({
  descriptionDiv: {
    marginBottom: 30,
    [theme.breakpoints.down(breakpoint)]: {
      backgroundColor: "rgba(251, 139, 23, 0.4)",
      borderRadius: 10,
      padding: "20px 20px 20px 20px",
    },
  },
  footerImage: {
    height: "70%",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "0 1px 2px rgba(0,0,0, .15)",
    marginBottom: 40,
    maxHeight: 500,
    overflow: "hidden",
    [theme.breakpoints.up(breakpoint)]: {
      marginRight: 15,
      width: "50%",
    },
  },
  itemContainer: {
    alignItems: "start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    [theme.breakpoints.down(breakpoint)]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  itemImage: {
    backgroundColor: "white",
    borderRadius: 10,
    objectFit: "cover",
    width: "100%",
  },
  itemTitle: {
    marginBottom: 30,
  },
  optionalFooter: {
    backgroundColor: "rgba(251, 139, 23, 0.2)",
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(breakpoint)]: {
      display: "none",
      visibility: "hidden",
    },
  },
  priceTag: {},
  rowDiv: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  storeItemWrapper: {
    marginBottom: 20,
    marginleft: 15,
    flexDirection: "column",
    textAlign: "start",
    width: "100%",
    [theme.breakpoints.up(breakpoint)]: {
      display: "flex",
      marginBottom: 0,
      width: "50%",
    },
  },
  tagChip: {
    marginBottom: 10,
    marginRight: 10,
  },
  tagStack: {
    flexWrap: "wrap",
  },
  totalText: {
    textAlign: "end",
    padding: "20px 20px 20px 0",
  },
}));
