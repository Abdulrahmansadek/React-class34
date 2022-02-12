import React from "react";

function Button({ children, style, value }) {
  return (
    <button className={style} value={value}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  style: "category-btn",
};

export default Button;
