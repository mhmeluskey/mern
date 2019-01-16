const router = require("express").Router();
const co2foodRoutes = require("./co2food");

// food route
router.use("/food", co2foodRoutes);

module.exports = router;
