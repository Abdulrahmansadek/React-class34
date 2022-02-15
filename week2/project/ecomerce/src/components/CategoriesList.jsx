import React, { useState } from "react";
import { useEffect } from "react";
import Button from "./Button";
import Error from "./Error";
import IsLoading from "./IsLoading";

function CategoriesList({ onFilterCategories, loading, setCategoriesLoading }) {
  const [selected, setSelected] = useState();
  const [categoryItem, setCategoryItem] = useState([]);
  const [categoriesError, setCategoriesError] = useState(false);

  useEffect(() => {
    setCategoriesError(false);
    setCategoriesLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategoriesLoading(false);
        setCategoryItem(json);
      })
      .catch((error) => {
        setCategoriesError(true);
        console.log(error);
        return <Error />;
      });
  }, []);

  const filterCategory = (e) => {
    onFilterCategories(e.target.value);
    setSelected(e.target.value);
  };
  if (categoriesError) {
    return <Error />;
  } else if (loading) {
    return (
      <>
        {loading && <IsLoading />}
        <div className="categories-container" onClick={filterCategory}>
          {categoryItem.map((item, idx) => {
            return (
              <Button
                key={idx}
                value={item}
                style={selected === item ? "checked" : "category-btn"}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="categories-container" onClick={filterCategory}>
          {categoryItem.map((item, idx) => {
            return (
              <Button
                key={idx}
                value={item}
                style={selected === item ? "checked" : "category-btn"}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </>
    );
  }
}

export default CategoriesList;
