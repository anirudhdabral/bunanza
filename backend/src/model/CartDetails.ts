import mongoose from 'mongoose';
import { ProductDocument } from './Product';
import { UserDocument } from './UserDetails';

const cartSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export interface CartDocument extends mongoose.Document {
  product: ProductDocument;
  quantity: number;
  userId: UserDocument;
}

export const Cart = mongoose.model<CartDocument>('Cart', cartSchema);
