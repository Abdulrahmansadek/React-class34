import React, { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";
import CategoriesList from "./CategoriesList";
import Error from "./Error";
import IsLoading from "./IsLoading";
function ProductsList() {
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategories] = useState("");
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [ErrorItem, setErrorItem] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const filterCategoriesHandler = (category) => {
    if (selectCategory === category) {
      setSelectCategories([]);
      getProducts();

      return;
    } else {
      setSelectCategories(category);
    }
    setLoading(true);
  };

  const getCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      setErrorItem(true);
      setCategoriesLoading(false);
    }
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
    getCategories();
    getProducts();
  }, []);
  useEffect(() => {
    getProductByCategories();
  }, [selectCategory]);

  return (
    <>
      <div className="categories-container">
        <CategoriesList
          onFilterCategories={filterCategoriesHandler}
          selectedCategory={selectCategory}
          categories={categories}
        />
      </div>
      <div className="container">
        {loading === false ? (
          products.map((item) => <ProductsItem key={item.id} items={item} />)
        ) : (
          <div>
            {ErrorItem && <Error />}
            {categoriesLoading && <IsLoading />}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductsList;
