import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IChallenge extends Document {
  postedBy: Types.ObjectId; // alumni
  title: string;
  description: string;
  tests?: string; // placeholder for test cases
  createdAt: Date;
  updatedAt: Date;
}

const ChallengeSchema = new Schema<IChallenge>(
  {
    postedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tests: String,
  },
  { timestamps: true }
);

export const Challenge = mongoose.model<IChallenge>('Challenge', ChallengeSchema);
