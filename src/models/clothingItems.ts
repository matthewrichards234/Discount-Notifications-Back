import mongoose from "mongoose";
import { minLength } from "zod";

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
    enum: {
      values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      message: "Size must be XS, S, M, L, or XL",
    },
    minLength: 1,
    maxLength: 4,
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
});

export const ClothingItem = mongoose.model("ClothingItem", clothingItemSchema);
