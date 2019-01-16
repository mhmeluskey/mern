const db = require("../models");

module.exports = {
  findById: function(req, res) {
    console.log(req.params);
    db.co2food
      .findById(req.params.food)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
