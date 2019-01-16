const axios = require("axios");
const router = require("express").Router();
const db = require("../models");

router.get("/food/:id", (req, res) => {
  console.log(req);
  axios
    .get(db.co2foods.find({ food: req.co2 }))
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
