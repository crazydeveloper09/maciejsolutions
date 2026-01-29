import mongoose, { models, Schema } from 'mongoose';

const ReviewSchema = new Schema(
  {
    projectSlug: String,
    nickname: String,
    rating: Number,
    comment: String,
  },
  { timestamps: true },
);

export interface Review {
  _id: string;
  projectSlug: string;
  nickname: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export default models.Review || mongoose.model('Review', ReviewSchema);
