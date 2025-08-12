import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IJob extends Document {
  title: string;
  description: string;
  company: string;
  location?: string;
  type?: string; // full-time, internship
  postedBy: Types.ObjectId; // alumni/admin
  url?: string;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: String,
    type: String,
    postedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    url: String,
  },
  { timestamps: true }
);

export const Job = mongoose.model<IJob>('Job', JobSchema);
