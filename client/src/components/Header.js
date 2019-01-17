import React from "react";
import "./Header.css";

export function Header(props) {
  return (
    <div className="nav">
      <a className="title" href="#">
        Co2 of Your Plate
      </a>
      <div className="links">Home | Meals</div>
    </div>
  );
}

export default Header;
