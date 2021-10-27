import express from "express";
import multer from "multer";

import { fileUploadController } from "../controllers";

export const uploadRouter = express.Router();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets");
  },
  filename: (req, file, cb) => {
    const file_name = Date.now() + " - " + file.originalname;
    // req.body.file_name = file_name;
    cb(null, file_name);
  },
});

const upload = multer({ storage: fileStorage });

uploadRouter.post(
  "/upload",
  upload.single("file"),
  fileUploadController.uploadFile
);
