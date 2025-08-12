import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IMentorship extends Document {
  mentor: Types.ObjectId; // alumni
  title: string; // area like job hunting, higher studies
  description?: string;
  skills?: string[];
  availability?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MentorshipSchema = new Schema<IMentorship>(
  {
    mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: String,
    skills: { type: [String], default: [] },
    availability: String,
  },
  { timestamps: true }
);

export const Mentorship = mongoose.model<IMentorship>('Mentorship', MentorshipSchema);
