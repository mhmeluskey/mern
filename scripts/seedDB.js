const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/co2food");

const userSeed = [
  {
    username: "Megan",
    password: "012345679"
  },
  {
    username: "admin",
    password: "password"
  }
];

const co2foodSeed = [
  {
    food: "Lamb",
    rank: 1,
    co2: 39.2
  },
  {
    food: "Beef",
    rank: 2,
    co2: 27.0
  }
];

const meals = [
  {
    food: "Lamb",
    rank: 1,
    co2: 39.2
  },
  {
    food: "Beef",
    rank: 2,
    co2: 27.0
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.co2food
  .remove({})
  .then(() => db.co2food.collection.insertMany(co2foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.meals
  .remove({})
  .then(() => db.meals.collection.insertMany(meals))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
