const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealsSchema = new Schema({
  food: { type: String, required: true },

  co2: { type: Number, required: true }
});

const meals = mongoose.model("meals", mealsSchema);

module.exports = meals;
