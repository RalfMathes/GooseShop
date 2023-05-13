import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import StoreItem from "../components/StoreItem";

const Home = () => {
  const itemsJson = [
    {
      id: 1,
      name: "knife",
      price: 15.99,
      imgUrl: "/static/goose.svg",
    },
    {
      id: 2,
      name: "goose plush",
      price: 17.99,
      imgUrl: "/static/goose.svg",
    },
    {
      id: 3,
      name: "goose energy drink",
      price: 3,
      imgUrl: "/static/goose.svg",
    },
    {
      id: 4,
      name: "goose turbo",
      price: 115.99,
      imgUrl: "/static/goose.svg",
    },
  ];

  return (
    <>
      <Typography variant="h1">Home</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {itemsJson.map((item) => (
          <Grid key={item.id} item xs={12} sm={6}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
