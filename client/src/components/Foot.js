import React from "react";
import "./Foot.css";
import Add from "./Add";

function Foot(props) {
  return (
    <div className="footcard">
      <p className="result__food">
        Food: {props.food}
        {/* {co2food.food} */}
        <br /> Co2 in Kilos: {props.co2}
        {/* {co2food.co2} */}
      </p>
      <Add onClick={() => props.handleAddMeal(props.id)} />
    </div>
  );
}

export default Foot;
