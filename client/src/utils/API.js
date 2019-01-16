import axios from "axios";

export default {
  getCo2: function(name) {
    console.log("api route hit");
    return axios.get("/api/food/" + name);
  }
};
