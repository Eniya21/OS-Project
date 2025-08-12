import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IStory extends Document {
  author: Types.ObjectId; // alumni
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const StorySchema = new Schema<IStory>(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const Story = mongoose.model<IStory>('Story', StorySchema);
