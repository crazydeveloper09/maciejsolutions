import mongoose, { models, Schema } from 'mongoose';

const OrderSchema = new Schema(
  {
    projectName: String,
    name: String,
    email: String,
    expectations: String,
    budget: String,
    deadline: Date,
    service: String,
  },
  { timestamps: true },
);

export interface Order {
  projectName: string;
  name: string;
  email: string;
  expectations: string;
  budget: string;
  deadline: Date;
  service: string;
  createdAt: Date;
  updatedAt: Date;
}

export default models.Order || mongoose.model('Order', OrderSchema);
