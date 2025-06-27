import { boolean } from "zod/v4";
import { AggregateOperation } from "./../../../node_modules/mongodb/src/operations/aggregate";
import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
  otp?: string;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    agreeToTerms: { type: Boolean, required: true },
    otp: { type: String, required: false },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User", UserSchema);
