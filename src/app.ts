import express from "express";
import { dogRouter } from "./routes";
import mongoose from "mongoose";

const app = express();
app.use("/dog", dogRouter);

mongoose
  .connect("mongodb://localhost:27017/Dog-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("Connected to db..");
    app.listen(8080, () => {
      console.log("Server started at port:8080");
    });
  })
  .catch((err) => console.log(err));
