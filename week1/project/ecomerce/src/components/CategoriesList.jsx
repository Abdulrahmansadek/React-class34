import React, { useState } from "react";
import Button from "./Button";

function CategoriesList({ onFilterCategories, categoryItem }) {
  const [selected, setSelected] = useState();
  const filterCategory = (e) => {
    onFilterCategories(e.target.value);
    setSelected(e.target.value);
  };

  return (
    <div className="categories-container" onClick={filterCategory}>
      {categoryItem.map((item, idx) => {
        return (
          <Button
            key={idx}
            value={item.slice(6)}
            style={selected === item.slice(6) ? "checked" : "category-btn"}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
}

export default CategoriesList;
