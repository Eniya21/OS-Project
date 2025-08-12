import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IEvent extends Document {
  host: Types.ObjectId; // alumni/admin
  title: string;
  description?: string;
  date: Date;
  url?: string; // webinar or registration link
  attendees: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    host: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: String,
    date: { type: Date, required: true },
    url: String,
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

export const Event = mongoose.model<IEvent>('Event', EventSchema);
