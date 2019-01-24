import React from "react";
import Meal from "./Meal.js";
import "./Foot.css";

const Meals = props => {
  return (
    <div>
      <div className="mealsdiv">
        <h1 className="mealtitle"> My Meals</h1>
        {props.meals.map(meal => (
          <Meal
            id={meal._id}
            key={meal._id}
            food={meal.food}
            co2={meal.co2}
            handleAddMeal={props.handleAddMeal}
            deleteMeal={props.deleteMeal}
            image={props.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Meals;
