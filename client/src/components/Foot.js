import React from "react";
import "./Foot2.css";
import Add from "./Add";

function Foot(props) {
  return (
    <div className="hello">
      <h1 className="result__food">{props.food} </h1>
      {/* {co2food.food} */}
      <p className="grams">Grams of CO2:</p> <h1>{props.co2}</h1>
      {/* {co2food.co2} */}
      <Add onClick={() => props.handleAddMeal(props.id)} />
    </div>
  );
}

export default Foot;
