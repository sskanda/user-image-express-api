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

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
