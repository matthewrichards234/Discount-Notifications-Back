import express, { Router } from "express";
import { User } from "../schemas/users";
import {
  getAllUsers,
  getUserById,
  signup,
  login,
  updateUser,
  deleteUser,
} from "../controllers/users";

import { validate } from "../middleware/validate";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", validate(User), signup);
userRouter.post("/login", login);
userRouter.patch("/me/:id", updateUser);
userRouter.delete("/me/:id", deleteUser);
