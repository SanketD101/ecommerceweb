import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function NavBar() {
  return (
    <>
      <ul className="header-menu--">
        <li>
          <NavLink to="/" className="li-link">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="li-link">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="li-link">
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="li-link">
            CONTACT
          </NavLink>
        </li>
        <li>
          <button>LOG IN</button>
        </li>
        <li>
          <NavLink to="/cart" className="li-link">
            <FiShoppingCart />
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default NavBar;
