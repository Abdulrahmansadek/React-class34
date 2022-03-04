import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../context/FavouriteContext";
import heartSolid from "../assets/heart-solid.svg";
import heartEmpty from "../assets/heart-regular.svg";

function ProductItem({ id, title, image }) {
  const { toggleFavourite, isFavourite } = useContext(FavouriteContext);
  const isFav = isFavourite(id);

  const handleFavourite = (e) => {
    e.preventDefault();
    toggleFavourite(id);
  };
  return (
    <div className="favorite-container">
      <Link to={`/product/${id}`}>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="justify-end card-actions"></div>
          </div>
        </div>
        <div>
          <img
            src={isFav ? heartSolid : heartEmpty}
            alt="heart"
            className="heart-filled"
            onClick={handleFavourite}
          />
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
