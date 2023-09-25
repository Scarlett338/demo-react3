import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/"> Home</Link>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

// <Link to="/">Home</Link>
// {/*       <Link to="/product">Product Info</Link>
//  */}
// <Link to="/checkout">Checkout</Link>
