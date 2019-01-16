import React, { Component } from "react";

// import API from "../../utils/API";

class Co2 extends Component {
  state = {
    co2: ""
  };

  render() {
    return <h1>{this.state.co2}</h1>;
  }
}

export default Co2;
