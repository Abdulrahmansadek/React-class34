import React from "react";

function Header({ onFilterCategories }) {
  const filterCategory = (e) => {
    onFilterCategories(e.target.value);
  };

  return (
    <div>
      <button value={"electronics"} onClick={filterCategory}>
        electronics
      </button>
      <button value={"women's clothing"} onClick={filterCategory}>
        women's clothing
      </button>
      <button value={"men's clothing"} onClick={filterCategory}>
        men's clothing
      </button>
      <button value={"jewelery"} onClick={filterCategory}>
        jewelery
      </button>
    </div>
  );
}

export default Header;
