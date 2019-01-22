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
    food: "lamb",
    co2: 4312
  },
  {
    food: "beef",
    co2: 2970
  },
  {
    food: "cheese",
    co2: 1485
  },
  {
    food: "pork",
    co2: 1331
  },
  {
    food: "turkey",
    co2: 1199
  },
  {
    food: "chicken",
    co2: 759
  },
  {
    food: "tuna",
    co2: 671
  },
  {
    food: "eggs",
    co2: 528
  },
  {
    food: "potatoes",
    co2: 319
  },
  {
    food: "rice",
    co2: 297
  },
  {
    food: "nuts",
    co2: 253
  },
  {
    food: "beans",
    co2: 220
  },
  {
    food: "tofu",
    co2: 220
  },
  {
    food: "vegetables",
    co2: 220
  },
  {
    food: "milk",
    co2: 209
  },
  {
    food: "fruit",
    co2: 121
  },
  {
    food: "lentils",
    co2: 99
  }
];

const meals = [
  {
    food: "lamb",
    co2: 4312
  },
  {
    food: "beef",
    co2: 2970
  },
  {
    food: "cheese",
    co2: 1485
  },
  {
    food: "pork",
    co2: 1331
  },
  {
    food: "turkey",
    co2: 1199
  },
  {
    food: "chicken",
    co2: 759
  },
  {
    food: "tuna",
    co2: 671
  },
  {
    food: "eggs",
    co2: 528
  },
  {
    food: "potatoes",
    co2: 319
  },
  {
    food: "rice",
    co2: 297
  },
  {
    food: "nuts",
    co2: 253
  },
  {
    food: "beans",
    co2: 220
  },
  {
    food: "tofu",
    co2: 220
  },
  {
    food: "vegetables",
    co2: 220
  },
  {
    food: "milk",
    co2: 209
  },
  {
    food: "fruit",
    co2: 121
  },
  {
    food: "lentils",
    co2: 99
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
