const router = require("express").Router();
const db = require("../models");

router.get("/food/:type", (req, res) => {
  console.log("/food/:id route was hit!");
  console.log(db.co2food);
  db.co2food
    .findOne({ food: req.params.type })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.get("/meals", (req, res) => {
  db.meals
    .find({})
    .sort({ data: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.delete("/meals/:id", (req, res) => {
  db.meals
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.post("/meals", (req, res) => {
  console.log("adding meals");
  console.log(req.body);
  db.meals
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
