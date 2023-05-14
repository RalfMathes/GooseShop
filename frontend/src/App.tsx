import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Item from "./pages/Item";
import Navbar from "./components/Navbar";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Category from "./pages/Category";
import Collection from "./pages/Collection";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fb8b17",
    },
    secondary: {
      main: "#ff7500",
    },
    background: {
      default: "#fff8eb",
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collections />} />
            <Route path="/collection/:collectionId" element={<Collection />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/item/:itemId" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
