import React, { useState, useEffect } from "react";

import Button from "./Button";

const CategoriesList = ({
  onFilterCategories,
  getProducts,
  selectedCategory,
  setCategoriesLoading,
  setErrorItem,
}) => {
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return categories.map((item, idx) => (
    <div
      className="categories-container"
      key={idx}
      onClick={() => {
        onFilterCategories(item);
      }}
    >
      <Button
        value={item}
        style={selectedCategory === item ? "checked" : "category-btn"}
      >
        {item}
      </Button>
    </div>
  ));
};

export default CategoriesList;
