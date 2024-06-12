import mongoose from "mongoose";
import { AddressDocument } from "./Address";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"] },
  address: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
  ],
});

export interface UserDocument extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  address: AddressDocument[];
}

export const User = mongoose.model<UserDocument>("User", userSchema);
