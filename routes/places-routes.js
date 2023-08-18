const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Listenning");
  res.json({
    message: "wat?",
  });
});

module.exports = router;
