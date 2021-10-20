import { Request, Response } from "express";
import { dogService } from "../services";

class DogController {
  async getAllBreed(req: Request, res: Response) {
    const data = await dogService.find();
    // console.log(data);
    res.send(data);
  }

  async getSpecies(req: Request, res: Response) {
    if (typeof req.query.breed == "string") {
      const data = await dogService.findByBreed(req.query.breed);
      console.log(data);
      res.send(data);
    }
  }

  async createBreed(req: Request, res: Response) {
    if (typeof req.body.breed == "string") {
      try {
        const data = await dogService.createBreed(req.body.breed);
        console.log(data);
        res.send(`"${req.body.breed}" added successfully!!`);
      } catch (err) {
        res.send(`Error : Breed already exists!!`)
      }
    }
  }

  addSpecies(req: Request, res: Response) {
    console.log(Object.keys(req));
    const breed = req.query.breed,
      species = req.body.species;
    if (typeof breed == "string" && Array.isArray(species)) {
      const data = dogService.updateByBreed(breed, species);
      console.log(data);
      res.send(data);
    }
  }

  deleteBreed(req: Request, res: Response) {
    if (typeof req.query.breed == "string") {
      const data = dogService.deleteBreed(req.query.breed);
      console.log(data);
      res.send(data);
    }
  }

  deleteSpecies(req: Request, res: Response) {
    if (
      typeof req.query.breed == "string" &&
      typeof req.query.species == "string"
    ) {
      const data = dogService.deleteSpecies(req.query.breed, req.query.species);
      console.log(data);
      res.send(data);
    }
  }
}

export const dogController = new DogController();
