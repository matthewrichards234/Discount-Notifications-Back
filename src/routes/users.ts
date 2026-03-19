import express, { Router, Express, Request, Response } from "express";

export const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ message: "general get route" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ message: "get user by id" });
});

userRouter.post("/signup", (req, res) => {
  res.send({ message: "signup user" });
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
