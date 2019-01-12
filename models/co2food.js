const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const co2foodSchema = new Schema({
  food: { type: String, required: true },
  rank: { type: Number, required: true },
  co2: { type: Number, required: true }
});

const co2food = mongoose.model("co2food", co2foodSchema);

module.exports = co2food;
