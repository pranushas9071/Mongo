import { Request, Response } from "express";

import { fileUploadService } from "../services";

class FileUploadControler {
  uploadFile(req: Request, res: Response) {
    if (req.file?.filename) {
      const result = fileUploadService.addUserProfile(
        req.body.name,
        req.file.filename
      );
    }
    console.log(`name : ${req.body.name} ; file : ${req.file?.filename}`);
    res.send({ message: "Uploaded successfuly" });
  }
}

export const fileUploadController = new FileUploadControler();
