const uuid = require("uuid");

let DUMMY_PLACES = [
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

const getPlaceById = (req, res, next) => {
  const error = new Error("Cant find places");
  const place = DUMMY_PLACES.find((p) => p.id === req.params.pid);
  console.log("Listenning");
  if (!place) {
    throw error;
  }
  res.json(place);
};

const getPlaceByUserId = (req, res, next) => {
  const error = new Error("Cant find users");
  const place = DUMMY_PLACES.find((p) => p.creator === req.params.uid);
  if (!place) return next(error); //for asynchronous
  else res.json(place);
};

const createdPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body; //same as const title = req.body.title , description = req.body.description
  const createdPlace = {
    id: uuid.v4(),
    title: title,
    description,
    location: coordinates,
    address: address,
    creator,
  };
  DUMMY_PLACES.push(createdPlace);
  res.status(201).json(DUMMY_PLACES);
};

const updatePlace = (req, res, next) => {
  const { title, description } = req.body;
  const placeid = req.params.pid;
  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeid) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeid);
  updatedPlace.title = title;
  updatedPlace.description = description;
  DUMMY_PLACES[placeIndex] = updatedPlace;
  res.status(201).json(updatedPlace);
};

const deletePlace = (req, res, next) => {
  const placeid = req.params.pid;
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeid);
  res.status(201).json(DUMMY_PLACES);
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createdPlace = createdPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
