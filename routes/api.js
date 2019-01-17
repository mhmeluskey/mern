const router = require("express").Router();
const db = require("../models");

router.get("/food/:id", (req, res) => {
  console.log("/food/:id route was hit!");
  console.log(db.co2food);
  db.co2food
    .find({ food: "Lamb" })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.create("/meal", (req, res) => {
  console.log("/meal route was hit");
  db.co2food
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
