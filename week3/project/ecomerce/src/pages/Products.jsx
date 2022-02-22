import ProductList from "../components/ProductList";
import { useState } from "react";
import Categories from "../components/Categories";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategories = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <Categories
        handleCategories={handleCategories}
        selectedCategory={selectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
}

export default Products;
