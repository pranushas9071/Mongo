import express from "express";
import { dogController } from "../controllers";

export const dogRouter = express.Router();
dogRouter.get("/getAll", dogController.getAllBreed);
dogRouter.get("/getSpecies", dogController.getSpecies);
dogRouter.post("/addBreed", dogController.createBreed);
dogRouter.put("/addSpecies", dogController.addSpecies);
dogRouter.delete("/deleteBreed", dogController.deleteBreed);
dogRouter.delete("/deleteSpecies", dogController.deleteSpecies);
