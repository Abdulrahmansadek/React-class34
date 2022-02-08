import "./App.css";
import products from "./fake-data/all-products";
import ProductsList from "./components/ProductsList";
import { useState } from "react";
function App() {
  const [product, setProducts] = useState(products);

  return (
    <>
      <div className="App">
        <h1>Products </h1>
      </div>

      <ProductsList products={product} />
    </>
  );
}

export default App;
