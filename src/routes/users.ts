import express, { Router, Express, Request, Response } from "express";
import { User } from "../models/users";
import {
  getAllUsers,
  getUserById,
  signup,
  updateUser,
  deleteUser,
} from "../controllers/users";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signup);

userRouter.post("/login", (req, res) => {
  res.send({ message: "login" });
});

userRouter.patch("/me/:id", updateUser);

userRouter.delete("/me/:id", deleteUser);
