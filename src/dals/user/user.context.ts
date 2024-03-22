import { Schema, model } from "mongoose";
import { User } from ".";

export const UserSchema = new Schema<User>({
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    salt: { type: Schema.Types.String, required: true },
    role: { type: Schema.Types.String, required: true },
})

export const userContext = model<User>('users', UserSchema)
