import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favourites";
import ProductDetails from "./pages/ProductDetails";
import { FavouriteContextProvider } from "./context/FavouriteContext";
function App() {
  return (
    <>
      <FavouriteContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/favourite" element={<Favourites />} />
          </Routes>
        </Router>
      </FavouriteContextProvider>
    </>
  );
}

export default App;
