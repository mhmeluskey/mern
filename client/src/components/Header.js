import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";

export function Header(props) {
  return (
    <div className="nav">
      <a className="title" href="#">
        Co2 of Your Plate
      </a>
      <div className="links">
        <a href="#">Home |</a>
        <a href="#"> Meals</a>
      </div>
    </div>
  );
}

export default Header;
