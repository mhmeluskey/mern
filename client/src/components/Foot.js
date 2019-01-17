import React, { Component } from "react";
import "./Foot.css";
import footprint from "./Footprint.png";

class Foot extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <div className="card">
          <button>Add</button>
          <button>&times; </button>
          <div className="img-container">
            <img src={footprint} alt="footprint" height="140px" />
          </div>
        </div>
      </div>
    );
  }
}

export default Foot;
