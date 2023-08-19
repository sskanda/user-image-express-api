const express = require("express");
const placeController = require("../controllers/places-controller");

const router = express.Router();

router.get("/:pid", placeController.getPlaceById);

router.get("/user/:uid", placeController.getPlaceByUserId);

module.exports = router;
