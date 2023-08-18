const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const error = new Error("Cant find places");
  const place = DUMMY_PLACES.find((p) => p.id === req.params.pid);
  console.log("Listenning");
  if (!place) {
    throw error;
  }
  res.json(place);
});

router.get("/user/:uid", (req, res, next) => {
  const error = new Error("Cant find users");
  const place = DUMMY_PLACES.find((p) => p.creator === req.params.uid);
  if (!place) return next(error); //for asynchronous
  else res.json(place);
});

module.exports = router;
