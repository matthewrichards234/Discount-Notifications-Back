import { Router } from "express";
import {
  TEST,
  getAllClothingItems,
  getClothingItemById,
  createClothingItem,
  likeClothingItem,
  dislikeClothingItem,
} from "../controllers/clothingItems";
export const clothingItemRouter = Router();

clothingItemRouter.get("/TEST", TEST);
clothingItemRouter.get("/", getAllClothingItems);
clothingItemRouter.get("/:id", getClothingItemById);
clothingItemRouter.post("/upload", createClothingItem);
clothingItemRouter.patch("/:id/likes", likeClothingItem);
clothingItemRouter.delete("/:id/likes", dislikeClothingItem);
