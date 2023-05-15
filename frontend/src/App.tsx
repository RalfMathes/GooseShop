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
import MobileSpacer from "./components/MobileSpacer";
import theme from "./theme";
import MobileTopBar from "./components/MobileTopBar";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <MobileTopBar />
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
          <MobileSpacer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
