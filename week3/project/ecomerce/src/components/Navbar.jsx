import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between ">
      <Link to={"/"} className="btn btn-ghost normal-case text-xl">
        Shop
      </Link>
      <div className="navbar-end">
        <Link to={"/"}>Products | </Link>

        <Link to={"/favourite"}> Favourites</Link>
      </div>
    </div>
  );
}

export default Navbar;
