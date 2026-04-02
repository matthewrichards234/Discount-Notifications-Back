import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users";
import { clothingItemRouter } from "./routes/clothingItems";
import { urlRouter } from "./routes/url";

const app: Express = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRouter);
app.use("/clothingItems", clothingItemRouter);
app.use("/url", urlRouter);

mongoose
  .connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/discount-notifications",
  )
  .then(() => console.log("Connected to MongoDB via Mongoose"))
  .catch((err) => console.error(err));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Bun + Express!!!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
