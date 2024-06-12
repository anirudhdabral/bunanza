import mongoose from 'mongoose';
import { UserDocument } from './UserDetails';

const addressSchema = new mongoose.Schema({
  lane1: { type: String, required: true }, // House number and street name
  lane2: { type: String }, // Optional apartment number or floor
  landmark: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true }, // Postal code
  phone: { type: String, required: true }, // Phone number for deliveries
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional reference to User
});

export interface AddressDocument extends mongoose.Document {
  lane1: string;
  lane2: string | null;
  landmark: string | null;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  userId: UserDocument | null;
}

export const Address = mongoose.model<AddressDocument>('Address', addressSchema);
