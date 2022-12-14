const hotels = [
  {
    name: "Shanri-La",
    city: "Istanbul",
    ratings: [5, 5, 3],
  },
  {
    name: "The Marker",
    city: "Dublin",
    ratings: [5, 4, 4],
  },
  {
    name: "Four Seasons",
    city: "Bangkok",
    ratings: [5, 5, 5],
  },
];

export function getAll(req, res) {
  res.status(200).json(hotels);
}

export function getOne(req, res) {}

export function saveOne() {}

export function editOne() {}

export function deleteOne() {}
