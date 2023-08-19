const express = require("express");
const bodyparser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const app = express();

app.use(bodyparser.json());

app.use("/api/places", placesRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);
  res.status(error.code || 500).send(error.message || "Unknown Error");
});

app.listen(4000);
