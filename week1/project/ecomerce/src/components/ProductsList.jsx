import React, { useState } from "react";
import ProductsItem from "./ProductsItem";
import CategoriesList from "./CategoriesList";

function ProductsList({ products, categoryData }) {
  const [categories, setCategories] = useState("");
  const [matchedCategoriesArray, setMatchedCategoriesArray] =
    useState(products);
  const filterCategoriesHandler = (category) => {
    if (categories === category) {
      setMatchedCategoriesArray(products);

      return;
    }
    const filtered = products.filter((catItem) => {
      if (catItem.category === category) {
        return catItem;
      }
    });
    setCategories(category);
    setMatchedCategoriesArray(filtered);
  };

  return (
    <>
      <div className="categories-container">
        <CategoriesList
          onFilterCategories={filterCategoriesHandler}
          categoryItem={categoryData}
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
