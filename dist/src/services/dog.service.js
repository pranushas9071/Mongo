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
    DogService.prototype.findByBreed = function (breed) { };
    DogService.prototype.updateByBreed = function (breed, species) { };
    DogService.prototype.createBreed = function (breed) { };
    DogService.prototype.deleteBreed = function (breed) { };
    DogService.prototype.deleteSpecies = function (breed, species) { };
    return DogService;
}());
exports.dogService = new DogService();
