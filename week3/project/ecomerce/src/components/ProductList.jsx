import React from "react";
import useFetch from "../Hooks/useFetch";
import ProductItem from "./ProductItem";
function ProductList({ selectedCategory }) {
  let url = "https://fakestoreapi.com/products";
  if (selectedCategory) {
    url += `/category/${selectedCategory}`;
  }

  const { data, error, loading } = useFetch(url);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  } else
    return (
      <>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {data.map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            );
          })}
        </div>
      </>
    );
}

export default ProductList;
