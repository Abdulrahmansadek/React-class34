import "./App.css";
import ProductsList from "./components/ProductsList";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Container className="App">
        <h1>Products </h1>
      </Container>

      <ProductsList />
    </>
  );
}

export default App;
