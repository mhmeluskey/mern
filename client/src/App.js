import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Foot from "./components/Foot";
import Form from "./components/Form";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import API from "./utils/API";

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
      <Router>
        <div className="App">
          <Header />
          <header className="App-header">
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
          </header>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            food={this.food}
          />
          <Foot co2={this.state.co2} food={this.state.food} />
        </div>
      </Router>
    );
  }
}

export default App;
