import { CssBaseline, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import MobileSpacer from "./components/MobileSpacer";
import MobileTopBar from "./components/MobileTopBar";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Collection from "./pages/Collection";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
import Item from "./pages/Item";
import theme from "./theme";

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
