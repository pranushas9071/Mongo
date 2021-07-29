"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var dogSchema = new Schema({
    breed: { type: Schema.Types.String, index: true },
    species: { type: [Schema.Types.String] },
}, { strict: true });
dogSchema.index({ breed: 1 }, { unique: true });
exports.Details = mongoose_1.default.model("Detail", dogSchema, "Detail");
