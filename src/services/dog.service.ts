import { Details } from "../models";

class DogService {
  find() {
    return Details.find({});
  }
  findByBreed(breed: String) {}
  updateByBreed(breed: String, species: [String]) {}
  createBreed(breed: String) {}
  deleteBreed(breed: String) {}
  deleteSpecies(breed: String, species: String) {}
}

export const dogService = new DogService();
