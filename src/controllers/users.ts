import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
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
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Email and password required");
    }

    const user = await User.findOne({ email: req.body.email }).select(
      "+password",
    );
    console.log(user);

    if (!user) {
      return res.status(404).send("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server errorrr");
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

    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send("User not found");
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
