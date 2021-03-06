import axios from "axios";

export default {
  getCo2: function(type) {
    console.log("api route hit");
    return axios.get("/api/food/" + type);
  },

  getMeals: function() {
    console.log("meals hit");
    return axios.get("/api/meals");
  },

  deleteMeal: function(id) {
    console.log(id);
    console.log("delete route");
    return axios.delete("/api/meals/" + id);
  },

  saveMeal: function(mealData) {
    console.log("meal route");
    return axios.post("/api/meals", mealData);
  }
};
