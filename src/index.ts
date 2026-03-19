import express, { Express, Request, Response } from "express";
import { userRouter } from "./routes/users";

const app: Express = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Bun + Express!!!");
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
