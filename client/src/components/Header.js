import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function Header(props) {
  return (
    <div className="nav">
      <Link to="/home" onClick={() => props.handlePageChange("Main")}>
        Co2 of Your Plate
      </Link>
      <ul className="nav-item">
        <li className="nav-item">
          <Link to="/home" onClick={() => props.handlePageChange("Main")}>
            Home |
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/meals" onClick={() => props.handlePageChange("Meals")}>
            Meals
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
