const router = require("express").Router();
const co2foodController = require("../../controllers/co2foodController");

// Matches with "/api/food/:id"
router.route("/:id").get(co2foodController.findById);
// .put(co2foodController.update);

module.exports = router;

//install
