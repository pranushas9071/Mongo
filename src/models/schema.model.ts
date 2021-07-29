import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dogSchema = new Schema({
  breed: { type: Schema.Types.String, index: true },
  species: { type: [Schema.Types.String] },
},{strict:true});
dogSchema.index({ breed: 1 }, { unique: true });

export const Details = mongoose.model("Detail", dogSchema,"Detail");
