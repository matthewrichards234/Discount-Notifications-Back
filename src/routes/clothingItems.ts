import { Router } from "express";
import {
  TEST,
  getAllClothingItems,
  getClothingItemById,
  createClothingItem,
  likeClothingItem,
  dislikeClothingItem,
} from "../controllers/clothingItems";
import { validate } from "../middleware/validate";
import { ClothingItem } from "../schemas/clothingItems";
export const clothingItemRouter = Router();

clothingItemRouter.get("/TEST", TEST);
clothingItemRouter.get("/", getAllClothingItems);
clothingItemRouter.get("/:id", getClothingItemById);
clothingItemRouter.post("/upload", validate(ClothingItem), createClothingItem);
clothingItemRouter.patch("/:id/likes/:userId", likeClothingItem);
clothingItemRouter.delete("/:id/likes/:userId", dislikeClothingItem);
// clothingItemRouter.patch("/:id/likes", likeClothingItem);
// clothingItemRouter.delete("/:id/likes", dislikeClothingItem);
