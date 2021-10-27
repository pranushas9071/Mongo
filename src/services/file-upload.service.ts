import { Profile } from "../models";

class FileUploadService {
  addUserProfile(name: string, file: string) {
    const data = { name: name, proof: file };
    return Profile.collection.insertOne(data);
  }
}

export const fileUploadService = new FileUploadService();
