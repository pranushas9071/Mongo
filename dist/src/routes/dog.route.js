"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dogRouter = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
exports.dogRouter = express_1.default.Router();
exports.dogRouter.get("/getAll", controllers_1.dogController.getAllBreed);
