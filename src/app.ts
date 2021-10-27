import express, { json, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import { dogRouter,uploadRouter } from "./routes";
import { errorController } from "./controllers";

const app = express();
app.use(json()); // middleware
app.use(cors());

app.use("/dog", dogRouter);
app.use("/user",uploadRouter)


app.use("*", (req: Request, res: Response) => {
  res.status(404);
  res.send("Page not found!!!");
});

app.use(errorController.errorHandler);

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
