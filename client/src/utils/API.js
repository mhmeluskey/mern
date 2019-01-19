import axios from "axios";

export default {
  getCo2: function(type) {
    console.log("api route hit");
    return axios.get("/api/food/" + type);
  },

  getMeals: function() {
    console.log("meals hit");
    return axios.get("/api/meals");
  }
  // addMeal: function(id) {
  //   console.log("hit");
  //   return axios.get("/meal");
  // }
};
