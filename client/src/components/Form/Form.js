import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    food: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="searchform">
        <h1>
          Add Food: <h3 className="red">{this.state.food}</h3>
        </h1>
        <form className="form">
          <input
            value={this.state.food}
            name="food"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Food"
          />

          <button>{/* </form>onClick={this.handleFormSubmit} */}Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
