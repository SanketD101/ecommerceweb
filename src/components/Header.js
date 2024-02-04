import React from "react";
import { Im500Px } from "react-icons/im";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header-main">
      <div className="header-icon">
        <Im500Px size="40px" />
      </div>
      <div className="nav-bar">
        <NavBar />
      </div>
    </div>
  );
}
export default Header;
