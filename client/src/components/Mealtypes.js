import React from "react";
import "./Mealtypes.css";

const Mealtypes = () => {
  return (
    <div className="mealtypes">
      <h2>Food Types</h2> <p className="enter">*enter food in all lowercase</p>
      <ul>
        <li>beans</li>
        <li>beef</li>
        <li>cheese</li>
        <li>chicken</li>
        <li>eggs</li>
        <li>fruit</li>
        <li>lamb</li>
        <li>lentils</li>
      </ul>
      <ul>
        <li>lamb</li>
        <li>milk</li>
        <li>nuts</li>
        <li>pork</li>
        <li>tofu</li>
        <li>tuna</li>
        <li>turkey</li>
        <li>vegetables</li>
      </ul>
    </div>
  );
};

export default Mealtypes;
