import Foot from "./components/Foot";
import Form from "./components/Form";
import Header from "./components/Header";
import React, { Component } from "react";
import API from "./utils/API";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Meals from "./components/Meals";

class App extends Component {
  state = {
    food: "",
    co2: "",
    id: "",
    meals: []
  };

  // componentDidMount() {
  //   this.loadMeals();
  // }

  // loadMeals = () => {
  //   API.getMeals()
  //     .then(res => this.setState({ meals: res.data }))
  //     .catch(err => console.log(err));
  // };

  // renderPage = () => {
  //   if (this.state.currentPage === "Main") {
  //     return <Main />;
  //   } else {
  //     return <Meals />;
  //   }
  // };

  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  componentDidMount() {
    console.log("dsdsd");
    this.loadMeals();
  }

  loadMeals = () => {
    console.log("dsdssd");
    API.getMeals()
      .then(res => {
        this.setState({
          meals: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteMeal = id => {
    console.log(id);
    API.deleteMeal(id)
      .then(res => this.loadMeals())
      .catch(err => console.log(err));
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
        this.setState({ co2: res.data.co2, id: res.data.id });
      })
      .catch(err => console.log(err));
  };

  handleAddMeal = id => {
    console.log(this.state.food);
    console.log(this.state.co2);

    API.saveMeal({
      food: this.state.food,
      co2: this.state.co2
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Main />
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              food={this.food}
            />
            <Foot
              co2={this.state.co2}
              food={this.state.food}
              id={this.state.id}
              meals={this.state.meals}
              handleAddMeal={this.handleAddMeal}
            />
            <Meals
              co2={this.state.co2}
              food={this.state.food}
              id={this.state.id}
              meals={this.state.meals}
              handleAddMeal={this.handleAddMeal}
              deleteMeal={this.deleteMeal}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
