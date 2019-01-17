import React, { Component } from "react";
import "./Form.css";
// import API from "../../utils/API";

class Form extends Component {
  state = {
    food: "",
    co2: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   // console.log("find food");
  //   event.preventDefault();
  //   console.log(this.state.food);
  //   API.getCo2(this.state.food)
  //     .then(res => {
  //       console.log("This is what i got from the server:");
  //       console.log(res);
  //       this.setState({ food: res.data });
  //     })
  //     .catch(err => console.log(err));
  //if (this.state.food) {
  // API.getCo2Answer({
  // food: this.state.food,
  // co2: this.state.co2,
  //})
  // .then(res => this.loadBooks())
  //.catch(err => console.log(err));
  // }
  // };

  render() {
    return (
      <div className="searchform">
        <h1>Add Food: {this.state.food}</h1>
        <form className="form">
          <input
            value={this.state.food}
            name="food"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Food"
          />
        </form>

        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    );
  }
}

export default Form;
