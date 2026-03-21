import mongoose from "mongoose";

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
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
});

export const ClothingItem = mongoose.model("ClothingItem", clothingItemSchema);
