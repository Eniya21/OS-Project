import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IDiscussion extends Document {
  topic: string;
  createdBy: Types.ObjectId;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const DiscussionSchema = new Schema<IDiscussion>(
  {
    topic: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Discussion = mongoose.model<IDiscussion>('Discussion', DiscussionSchema);
