import express, { Request, Response } from "express";
import { User } from "../models/users";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
}

export async function signup(req: Request, res: Response) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const allowedUpdates: string[] = [
      "firstName",
      "lastName",
      "email",
      "password",
    ];
    const updates: any = {};

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).send("User not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send("Failed to update user");
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send("User not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send("Failed to delete user");
  }
}
