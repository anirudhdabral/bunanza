import mongoose from 'mongoose';

const discountSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  minimumAmount: {
    type: Number,
    default: 'NA',
  },
  discount: {
    type: String,
    required: true,
    enum: ['%', 'INR'],
  },
  value: {
    type: Number,
    required: true,
  },
});

export interface DiscountDocument extends mongoose.Document {
  code: string;
  minimumAmount: number | 'NA';
  discount: '%' | 'INR';
  value: number;
}

export const Discount = mongoose.model<DiscountDocument>('Discount', discountSchema);
