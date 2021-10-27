import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: Schema.Types.String, index: true },
  proof: { type: Schema.Types.String },
},{strict:true});

profileSchema.index({ name: 1 }, { unique: true });

export const Profile = mongoose.model("Profile", profileSchema,"Profile");