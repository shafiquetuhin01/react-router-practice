import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <nav className="custom-link">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
