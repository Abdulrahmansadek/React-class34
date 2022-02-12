import React, { useState } from "react";
import ProductsItem from "./ProductsItem";
import CategoriesList from "./CategoriesList";

function ProductsList({ products, categoryData }) {
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
        <CategoriesList
          onFilterCategories={filterCategoriesHandler}
          categoryItem={categoryData}
        />
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
