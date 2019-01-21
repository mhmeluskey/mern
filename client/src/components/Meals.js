import React, { Component } from "react";
import Meal from "./Meal.js";
import API from "../utils/API";

const Meals = props => {
  return (
    <div>
      <h1>My Meals</h1>
      {props.meals.map(meal => (
        <Meal
          id={meal._id}
          key={meal._id}
          food={meal.food}
          co2={meal.co2}
          handleAddMeal={props.handleAddMeal}
          deleteMeal={props.deleteMeal}
        />
      ))}
    </div>
  );
};

export default Meals;
