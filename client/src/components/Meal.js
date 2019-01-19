import React from "react";
import "./Foot.css";
import footprint from "./Footprint.png";

const Meal = props => {
  return (
    <div className="wrapper">
      <div className="card">
        <button>Add</button>
        <button>&times; </button>
        <div className="img-container">
          <img src={footprint} alt="footprint" />
        </div>
        <div className="results">
          <p className="result__food">
            Food: {props.food}
            {/* {co2food.food} */}
            <br /> Co2 in Kilos: {props.co2}
            {/* {co2food.co2} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meal;
