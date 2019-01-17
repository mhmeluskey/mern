import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Foot from "./components/Foot";
import Form from "./components/Form";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
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
        </header>{" "}
        <Form />
        <Foot />
      </div>
    );
  }
}

export default App;
