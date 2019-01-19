import Foot from "./components/Foot";
import Form from "./components/Form";
import Header from "./components/Header";
import React, { Component } from "react";
import API from "./utils/API";

import "./App.css";
import Main from "./components/Main";

class App extends Component {
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
      <div className="App">
        <Header />
        <Main />
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

export default App;
