import express, { Router, Express, Request, Response } from "express";
import { User } from "../models/users";
export const userRouter = Router();

// GET all users
userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find(); // ✅ await here
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// GET user by id
userRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// SIGNUP
userRouter.post("/signup", async (req: Request, res: Response) => {
  try {
    const newUser = await User.create({
      firstName: "John",
      lastName: "Doe",
      email: "john1@example.com",
      password: "12345678",
    });

    res.status(201).json(newUser); // ✅ send response
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

userRouter.post("/login", (req, res) => {
  res.send({ message: "login" });
});

userRouter.patch("/me", (req, res) => {
  res.send({ message: "update user" });
});

userRouter.delete("/me", (req, res) => {
  res.send({ message: "deleted user" });
});
