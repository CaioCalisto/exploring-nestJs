import { Document } from 'mongoose';

export interface Computer extends Document {
    readonly name: String,
    readonly CPU: String,
    readonly RamInGb: Number,
}