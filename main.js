import express from "express";
import { request } from "http";
import hotelRouter from "./routes/hotelRoutes.js";

const server = express();
const port = 4002;

const apiKey = "040";

server.use((req, res, next) => {
  if (req.query.api_key === apiKey) {
    next();
  } else {
    res.status(401).send("You cannot access this");
  }
});

server.use("/hotels", hotelRouter);

server.use((req, res) => {
  res.status(404).send("Not Found");
});

server.listen(port, () => {
  console.log("listening on port " + port);
});

export default server;
