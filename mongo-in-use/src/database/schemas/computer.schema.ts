import * as mongoose from 'mongoose';

export const ComputerSchema = new mongoose.Schema({
  name: String,
  CPU: String,
  RamInGb: Number,
});
