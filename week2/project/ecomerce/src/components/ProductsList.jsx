import React, { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";
import CategoriesList from "./CategoriesList";
import Error from "./Error";
import IsLoading from "./IsLoading";
function ProductsList() {
  const [productList, setProducts] = useState([]);
  const [categories, setCategories] = useState("");
  const [matchedCategoriesArray, setMatchedCategoriesArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ErrorItem, setErrorItem] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setMatchedCategoriesArray(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setErrorItem(true);
    }
  };

  const filterCategoriesHandler = (category) => {
    if (categories === category) {
      setMatchedCategoriesArray(productList);

      return;
    }
    const filtered = productList.filter((catItem) => {
      if (catItem.category === category) {
        return catItem;
      }
    });
    setCategoriesLoading(false);
    setCategories(category);
    setMatchedCategoriesArray(filtered);
  };

  if (ErrorItem) {
    return <Error />;
  }

  return (
    <>
      {loading && <IsLoading />}
      <div className="categories-container">
        <CategoriesList
          onFilterCategories={filterCategoriesHandler}
          loading={categoriesLoading}
          setCategoriesLoading={setCategoriesLoading}
        />
      </div>
      <div className="container">
        {matchedCategoriesArray.map((item) => {
          return <ProductsItem key={item.id} items={item} />;
        })}
      </div>
    </>
  );
}

export default ProductsList;
