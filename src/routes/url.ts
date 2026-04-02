import express, { Router } from "express";

export const urlRouter = Router();

urlRouter.post("/create", (req, res) => {
  res.send("posting new route for playwright to use later");
});
