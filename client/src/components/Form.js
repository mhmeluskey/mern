import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    food: "",
    co2: ""
  };

  render() {
    return (
      <div className="searchform">
        <h1>
          Add Food:
          {this.props.food}
        </h1>
        <form className="form">
          <input
            value={this.props.food}
            name="food"
            onChange={this.props.handleInputChange}
            type="text"
            placeholder="Food"
          />
        </form>

        <button onClick={this.props.handleFormSubmit}>Submit</button>
      </div>
    );
  }
}

export default Form;
