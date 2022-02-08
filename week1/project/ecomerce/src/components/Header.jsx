import React from "react";

function Header({ onFilterCategories, category }) {
  const filterCategory = (e) => {
    onFilterCategories(e.target.value);
  };

  return (
    <div onClick={filterCategory}>
      {category.map((item, idx) => {
        return (
          <button key={idx} value={item}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Header;
