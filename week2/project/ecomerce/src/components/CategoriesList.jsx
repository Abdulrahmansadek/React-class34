import React from "react";

import Button from "./Button";

const CategoriesList = ({
  onFilterCategories,
  categories,
  selectedCategory,
}) => {
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
