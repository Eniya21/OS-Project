import mongoose, { Schema, Document } from 'mongoose';

export type UserRole = 'student' | 'alumni' | 'admin';

export interface IUser extends Document {
  role: UserRole;
  email: string;
  passwordHash: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
  social?: { linkedin?: string; github?: string; twitter?: string; website?: string };
  // Student fields
  course?: string;
  year?: string;
  skills?: string[];
  interests?: string[];
  // Alumni fields
  graduationYear?: number;
  workExperienceYears?: number;
  currentRole?: string;
  company?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    role: { type: String, enum: ['student', 'alumni', 'admin'], required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    bio: String,
    avatarUrl: String,
    social: {
      linkedin: String,
      github: String,
      twitter: String,
      website: String,
    },
    course: String,
    year: String,
    skills: { type: [String], default: [] },
    interests: { type: [String], default: [] },
    graduationYear: Number,
    workExperienceYears: Number,
    currentRole: String,
    company: String,
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);
