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
    meals: ""
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

  handleAddMeal = id => {
    console.log("savemeal");
    API.saveMeal({
      id: this.state.id,
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
            <Switch>
              <Route exact path="/home" component={Main} />
              <Route exact path="/meals" component={Meals} />
              <Route exact path="/food/:id" component={Foot} />
            </Switch>

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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
