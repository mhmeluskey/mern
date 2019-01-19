import React, { Component } from "react";
import Meal from "./Meal.js";
import API from "../utils/API";

class Meals extends Component {
  state = {
    meals: [],
    food: "",
    co2: "",
    id: ""
  };

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
  render() {
    return (
      <div>
        <h1>My Meals</h1>
        {this.state.meals.map(meal => (
          <Meal key={meal.id} food={meal.food} co2={meal.co2} />
        ))}
      </div>
    );
  }
}

export default Meals;
