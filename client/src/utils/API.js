import axios from "axios";

export default {
  getCo2: function(id) {
    console.log("api route hit");
    return axios.get("/api/food/" + id);
  }
};
