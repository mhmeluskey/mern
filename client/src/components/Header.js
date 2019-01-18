import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function Header(props) {
  return (
    <div className="nav">
      <Link
        to="/"
        onClick={() => props.handlePageChange("Home")}
        className="navbar-brand"
      >
        Co2 of Your Plate
      </Link>
      <div className="links">
        <Link to="/" onClick={() => props.handlePageChange("Home")}>
          Home |
        </Link>

        <Link to="/meals" onClick={() => props.handlePageChange("Meals")}>
          Meals
        </Link>
      </div>
    </div>
  );
}

export default Header;
