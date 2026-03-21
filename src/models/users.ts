import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      minlength: [2, "First name must be at least 2 characters long."],
      maxlength: [30, "First name must be less than 30 characters."],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      minlength: [2, "Last name must be at least 2 characters long."],
      maxlength: [30, "Last name must be less than 30 characters."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email must be unique."],
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      select: false,
    },
    likedBrands: {
      // Reference brand id here
    },
    likedClothingItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClothingItem",
      },
    ],
  },
  {
    timestamps: true, // auto adds createdAt + updatedAt
  },
);

export const User = mongoose.model("User", userSchema);
