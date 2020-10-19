import { Schema, Document, Model, model } from 'mongoose';
import IUser from './IUser';

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const UserModel: Model<IUser & Document> = model<IUser & Document>(
    'User', UserSchema
);