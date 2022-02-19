import React, { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";
import CategoriesList from "./CategoriesList";
import Error from "./Error";
import IsLoading from "./IsLoading";
function ProductsList() {
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategories] = useState("");

  const [loading, setLoading] = useState(true);
  const [ErrorItem, setErrorItem] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const filterCategoriesHandler = (category) => {
    if (selectCategory === category) {
      setSelectCategories([]);
      getProducts();
      setLoading(true);
      return;
    } else {
      setSelectCategories(category);
    }
    setLoading(true);
  };

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
      setErrorItem(false);
    } catch (error) {
      setErrorItem(true);
      setLoading(false);
    }
  };

  const getProductByCategories = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${selectCategory}`
      );
      const data = await res.json();
      setProducts(data);
      setLoading(false);
      setErrorItem(false);
      setCategoriesLoading(true);
    } catch (error) {
      setErrorItem(true);
      setCategoriesLoading(false);
    }
  };

  useEffect(() => {
    getProductByCategories();
  }, [selectCategory]);

  return (
    <>
      <div className="categories-container">
        <CategoriesList
          onFilterCategories={filterCategoriesHandler}
          selectedCategory={selectCategory}
          getProducts={getProducts}
          setErrorItem={setErrorItem}
          setCategoriesLoading={setCategoriesLoading}
        />
      </div>
      <div className="container">
        {loading ? (
          <div>
            {ErrorItem && <Error />}
            {categoriesLoading && <IsLoading />}
          </div>
        ) : ErrorItem ? (
          <Error />
        ) : (
          products.map((item) => <ProductsItem key={item.id} items={item} />)
        )}
      </div>
    </>
  );
}

export default ProductsList;
