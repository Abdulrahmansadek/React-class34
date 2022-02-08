import "./App.css";
import products from "./fake-data/all-products";
import ProductsList from "./components/ProductsList";
import { useState } from "react";
import categories from "./fake-data/all-categories";
function App() {
  const [product, setProducts] = useState(products);
  const [category, setCategories] = useState(categories);

  return (
    <>
      <div className="App">
        <h1>Products </h1>
      </div>

      <ProductsList products={product} category={category} />
    </>
  );
}

export default App;
