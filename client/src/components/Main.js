import React from "react";
import "./Main.css";
import logo from "./logo.png";
import whitefoot from "./whitefoot.png";
import globe from "./global.png";

const Main = () => {
  return (
    <div className="App">
      <nav>CO2 of Your Plate</nav>
      <header className="App-header">
        <div className="rightside">
          <div className="words">
            <h5 className="track">Start keeping track of your </h5>
            <h1> Carbon Footprint </h1>
            <img className="white" src={whitefoot} />
            <h5 className="mealtime"> one meal at a time</h5>
            <img className="global" src={globe} />
          </div>
        </div>
        <div className="leftside">
          <img className="static-logo" src={logo} />
        </div>
        <div className="directions">
          Enter in the last type of food you ate to see what the average serving
          size of 110 Grams releases in Carbon Emissons. Add the food to your
          meals to keep track.
        </div>
      </header>
    </div>
  );
};

export default Main;
