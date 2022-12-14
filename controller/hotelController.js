export const hotels = [
  {
    id: 73947595,
    name: "Shanri-La",
    city: "Istanbul",
    ratings: [5, 5, 3],
  },
  {
    id: 73947596,
    name: "The Marker",
    city: "Dublin",
    ratings: [5, 4, 4],
  },
  {
    id: 73947597,
    name: "Four Seasons",
    city: "Bangkok",
    ratings: [5, 5, 5],
  },
];

export function getAll(req, res) {
  res.status(200).json(hotels);
}

export function getOne(req, res) {
  const hotel = hotels.find((id) => id.id === +req.params.id);
  if (hotel) return res.status(200).json(hotel);
  res.status(404).json("hotel not found");
  console.log(req.params.id);
}

export function saveOne() {}

export function editOne() {}

export function deleteOne(req, res) {
  const index = hotels.findIndex((el) => el.id === req.params.id);
  if (index < 0) {
    return res.status(404).json("hotel not found");
  }
  hotels.splice(index, 1);
  res.status(201).json(`hotel ${req.params.id} deleted`);
}
