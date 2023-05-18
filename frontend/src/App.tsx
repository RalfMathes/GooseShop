import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MobileSpacer from "./components/MobileSpacer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Item from "./pages/Item";
import { fetchCategories } from "./redux/slices/categories/categories";
import { fetchStoreItems } from "./redux/slices/storeItems/storeItems";
import { AppDispatch } from "./redux/store";
import theme from "./theme";

const App = () => {
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(fetchStoreItems());
    appDispatch(fetchCategories());
  }, [appDispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:collectionId" element={<Collection />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/item/:itemId" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <MobileSpacer />
      </ThemeProvider>
    </>
  );
};

export default App;
