import express from "express";
import { dogController } from "../controllers";

export const dogRouter = express.Router();
dogRouter.get("/getAll", dogController.getAllBreed);
