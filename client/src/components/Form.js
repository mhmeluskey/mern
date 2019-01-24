import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div>
        <div className="searchform">
          Add Food:
          <br />
          {this.props.food}
          <br />
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
      </div>
    );
  }
}

export default Form;
