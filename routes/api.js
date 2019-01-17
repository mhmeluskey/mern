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

module.exports = router;
