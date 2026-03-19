import express, { Router, Express, Request, Response } from "express";
import { User } from "../models/users";
import { getAllUsers, getUserById, signup } from "../controllers/users";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signup);

userRouter.post("/login", (req, res) => {
  res.send({ message: "login" });
});

userRouter.patch("/me", (req, res) => {
  res.send({ message: "update user" });
});

userRouter.delete("/me", (req, res) => {
  res.send({ message: "deleted user" });
});
