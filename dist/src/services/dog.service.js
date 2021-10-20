"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dogService = void 0;
var models_1 = require("../models");
var DogService = /** @class */ (function () {
    function DogService() {
    }
    DogService.prototype.find = function () {
        return models_1.Details.find({});
    };
    DogService.prototype.findByBreed = function (breed) {
        return models_1.Details.find({ breed: breed }, { species: 1, _id: 0 });
    };
    DogService.prototype.createBreed = function (breed) {
        var doc = { breed: breed };
        // return Details.collection.insertOne(doc);
        return models_1.Details.insertMany([doc]);
    };
    DogService.prototype.updateByBreed = function (breed, newSpecies) {
        console.log(typeof newSpecies);
        models_1.Details.updateOne({ breed: breed }, { $push: { species: { $each: newSpecies } } }, { upsert: false }, function (err, res) {
            if (err)
                console.log(err);
            console.log(res);
        });
        return newSpecies + " added to " + breed + " successfully!!";
    };
    DogService.prototype.deleteBreed = function (breedToBeDeleted) {
        models_1.Details.deleteOne({ breed: breedToBeDeleted }, function (err) {
            console.log(err);
        });
        return breedToBeDeleted + " deleted successfully!!";
    };
    DogService.prototype.deleteSpecies = function (breed, species) {
        models_1.Details.updateOne({ breed: breed }, { $pull: { species: species } }, { upsert: false }, function (err, res) {
            if (err)
                console.log(err);
            console.log(res);
        });
        return species + " is successfully removed from " + breed;
    };
    return DogService;
}());
exports.dogService = new DogService();
