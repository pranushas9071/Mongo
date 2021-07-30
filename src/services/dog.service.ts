import { CallbackError } from "mongoose";
import { Details } from "../models";

class DogService {
  find() {
    return Details.find({});
  }
  
  findByBreed(breed: String) {
    return Details.find({ breed: breed }, { species: 1, _id: 0 });
  }

  createBreed(breed: String) {
    Details.insertMany([{ breed: breed }]);
    return "New breed added successfully!!";
  }

  updateByBreed(breed: String, newSpecies: string[]) {
    console.log(typeof newSpecies);
    Details.updateOne(
      { breed: breed },
      { $push: { species: { $each: newSpecies } } },
      { upsert: false },
      (err: CallbackError, res: any) => {
        if (err) console.log(err);
        console.log(res);
      }
    );
    return `${newSpecies} added to ${breed} successfully!!`;
  }

  deleteBreed(breedToBeDeleted: String) {
    Details.deleteOne({ breed: breedToBeDeleted }, (err: CallbackError) => {
      console.log(err);
    });
    return `${breedToBeDeleted} deleted successfully!!`;
  }

  deleteSpecies(breed: String, species: String) {
    Details.updateOne(
      { breed: breed },
      { $pull: { species: species } },
      { upsert: false },
      (err: CallbackError, res: any) => {
        if (err) console.log(err);
        console.log(res);
      }
    );
    return `${species} is successfully removed from ${breed}`;
  }
}

export const dogService = new DogService();
