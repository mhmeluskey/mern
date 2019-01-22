import React from "react";
import "./Foot.css";
import Add from "./Add";

function Foot(props) {
  return (
    <div className="wrapper">
      <div className="card">
        <Add onClick={() => props.handleAddMeal(props.id)} />
        <button>&times; </button>
        <div className="img-container" />
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
}

export default Foot;
