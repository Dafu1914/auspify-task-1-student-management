import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  email: string;
  age: number;
  course: string;
}

const StudentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    course: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IStudent>('Student', StudentSchema);