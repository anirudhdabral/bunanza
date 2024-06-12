import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  type: { type: String, enum: ['veg', 'nonveg'] },
  category: { type: String, required: true },
});

export interface ProductDocument extends mongoose.Document {
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  type: string;
  category: string;
}

export const Product = mongoose.model<ProductDocument>('Product', productSchema);
