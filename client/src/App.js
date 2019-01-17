import React, { Component } from "react";

import "./App.css";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    food: "",
    co2: "",
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else {
      return <Meals />;
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
      </Router>
    );
  }
}

export default App;
