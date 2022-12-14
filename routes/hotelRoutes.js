import express from "express";
import * as hotelController from "../controller/hotelController.js";

const router = express.Router();

router
  .get("/", hotelController.getAll)
  .get("/:id", hotelController.getOne)
  .post("/", hotelController.saveOne)
  .put("/:id", hotelController.editOne)
  .delete("/:id", hotelController.deleteOne);

export default router;
