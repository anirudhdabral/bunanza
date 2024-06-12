import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
});

export interface StoreDocument extends mongoose.Document {
  name: string;
  city: string;
}

export const Store = mongoose.model<StoreDocument>('Store', storeSchema);
