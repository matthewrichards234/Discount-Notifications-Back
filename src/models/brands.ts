import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  logoUrl: { type: String },
});

export const Brand = mongoose.model("Brands", brandSchema);
