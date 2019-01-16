const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/api");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/co2food");
const db = require("./models");
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("/allusers", function(req, res) {
//   console.log("All users route was hit");
//   db.User.find({})
//     .sort({ date: -1 })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });

// app.get("/allco2food", function(req, res) {
//   console.log("All users route was hit");
//   db.co2food
//     .find({})
//     .sort({ date: -1 })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
