import type { Request, Response } from "express";
import { ClothingItem } from "../models/clothingItems";

export async function TEST(req: Request, res: Response) {
  return res.send({ message: "Hello from clothing router!" });
}

export async function getAllClothingItems(req: Request, res: Response) {
  try {
    const clothingItems = await ClothingItem.find();
    return res.json(clothingItems);
  } catch (error) {
    return res.status(500).send("Failed to fetch items");
  }
}

export async function getClothingItemById(req: Request, res: Response) {}

export async function createClothingItem(req: Request, res: Response) {
  try {
    const newClothingItem = await ClothingItem.create({
      ...req.body,
    });
    return res.status(201).json(newClothingItem);
  } catch (error) {
    return res.status(500).send("Failed to create clothing item.");
  }
}

export async function likeClothingItem(req: Request, res: Response) {}

export async function dislikeClothingItem(req: Request, res: Response) {}
