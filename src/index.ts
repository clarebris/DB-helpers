import express, { NextFunction, Request, Response } from "express";
import { sqlConfig } from "./config/config";
const app = express();

app.use(express.json());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: error.message,
  });
});

app.listen(3300, () => {
  console.log(sqlConfig);
  console.log("listening on port 3300");
});
