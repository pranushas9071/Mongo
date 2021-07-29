import { Request, Response } from "express";
import { dogService } from "../services";

class DogController {
  async getAllBreed(req: Request, res: Response) {
    const data = await dogService.find();
    console.log(data);
    res.send(data);
  }
}

export const dogController = new DogController();
