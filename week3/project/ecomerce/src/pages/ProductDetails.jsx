import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
function ProductDetails() {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const { title, description, image } = data;

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  } else
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={id} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
}

export default ProductDetails;
