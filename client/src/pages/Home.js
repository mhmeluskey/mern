import React, { Component } from "react";
import Form from "../components/Form";
import Foot from "../components/Foot";
import "./Home.css";
import logo from "./logo.png";
import API from "../utils/API";

class Home extends Component {
  state = {
    food: "",
    co2: ""
  };

  handleFormSubmit = event => {
    console.log("find food");
    event.preventDefault();
    console.log(this.state.food);

    API.getCo2(this.state.food)
      .then(res => {
        console.log("This is what i got from the server:");
        console.log(res);

        this.setState({ co2: res.data.co2 });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          food={this.food}
        />
        <Foot co2={this.state.co2} food={this.state.food} />
      </div>
    );
  }
}

export default Home;
