import mongoose from 'mongoose';
import { ProductDocument } from './Product';
import { UserDocument } from './UserDetails';
import { StoreDocument } from './Store';
import { AddressDocument } from './Address';

const orderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  status: { type: String, required: true, enum: ['pending', 'confirmed', 'in-progress', 'delivered', 'cancelled'] },
  address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
  estimatedDelivery: { type: Date },
  orderTime: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderType: { type: String, required: true, enum: ['dinein', 'takeaway', 'delivery'] },
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true }, // Reference to Store model
});

export interface OrderDocument extends mongoose.Document {
  products: ProductDocument[];
  status: string;
  address: AddressDocument;
  estimatedDelivery: Date | null;
  orderTime: Date;
  userId: UserDocument;
  orderType: string;
  store: StoreDocument;
}

export const Order = mongoose.model<OrderDocument>('Order', orderSchema);
