import type { Request, Response } from "express";
import { ClothingItem } from "../models/clothingItems";
import { User } from "../models/users";

export async function TEST(req: Request, res: Response) {
  return res.send({ message: "WOK" });
}

export async function getAllClothingItems(req: Request, res: Response) {
  try {
    const clothingItems = await ClothingItem.find();
    return res.json(clothingItems);
  } catch (error) {
    return res.status(500).send("Failed to fetch items");
  }
}

export async function getClothingItemById(req: Request, res: Response) {
  try {
    const clothingItem = await ClothingItem.findById(req.params.id);
    if (!clothingItem) {
      return res.status(404).send("Item not found.");
    }
    return res.json(clothingItem);
  } catch (error) {
    return res.status(500).send("Internal server error.");
  }
}

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

export async function likeClothingItem(req: Request, res: Response) {
  try {
    const itemId = req.params.id;
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (user.likedClothingItems.includes(itemId)) {
      return res.status(400).send("Item already liked");
    }

    user.likedClothingItems.push(itemId);
    await user.save();

    const item = await ClothingItem.findByIdAndUpdate(
      itemId,
      {
        $inc: {
          likesCount: 1,
        },
      },
      { new: true },
    );
    if (!item) {
      return res.status(404).send("Clothing item not found");
    }

    return res.status(200).json({
      message: "Item liked",
      likesCount: item.likesCount,
    });
  } catch (error) {
    return res.status(500).send("Failed to like item.");
  }
}

export async function dislikeClothingItem(req: Request, res: Response) {
  try {
    const itemId = req.params.id;
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (!user.likedClothingItems.includes(itemId)) {
      return res.status(400).send("Item is not liked");
    }

    await User.findByIdAndUpdate(userId, {
      $pull: { likedClothingItems: itemId },
    });

    const item = await ClothingItem.findByIdAndUpdate(
      itemId,
      {
        $inc: {
          likesCount: -1,
        },
      },
      { new: true },
    );
    if (!item) {
      return res.status(404).send("Clothing item not found");
    }
    return res.status(200).json({
      message: "Item unliked",
      likesCount: item.likesCount,
    });
  } catch (error) {
    return res.status(500).send("Failed to dislike item.");
  }
}
