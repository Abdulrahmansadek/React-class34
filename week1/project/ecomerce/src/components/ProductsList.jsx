import React, { useState } from "react";
import ProductsItem from "./ProductsItem";
import Header from "./Header";

function ProductsList({ products }) {
  const [categories, setCategories] = useState("");
  const filterCategoriesHandler = (category) => {
    setCategories(category);
  };
  const filteredCategory = products.filter((catItem) => {
    if (categories === "") {
      return catItem;
    }
    return catItem.category === categories;
  });

  return (
    <>
      <div className="categories-container">
        <Header onFilterCategories={filterCategoriesHandler} />
      </div>
      <div className="container">
        {filteredCategory.map((item) => {
          return <ProductsItem key={item.id} items={item} />;
        })}
      </div>
    </>
  );
}

export default ProductsList;
