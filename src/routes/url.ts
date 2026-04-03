import express, { Router } from "express";

export const urlRouter = Router();

urlRouter.post("/create", (req, res) => {
  console.log("Received Headers:", req.headers);
  console.log("Received Body:", req.body);
  res.send("posting new route for playwright to use later");
});
