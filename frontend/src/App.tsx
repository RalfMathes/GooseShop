import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Item from "./pages/Item";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/category" element={<Category />} />
          <Route path="/item" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
