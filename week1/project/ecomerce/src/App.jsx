import "./App.css";
import products from "./fake-data/all-products";
import ProductsList from "./components/ProductsList";
import categories from "./fake-data/all-categories";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <>
      <Container className="App">
        <h1>Products </h1>
      </Container>

      <ProductsList products={products} categoryData={categories} />
    </>
  );
}

export default App;
