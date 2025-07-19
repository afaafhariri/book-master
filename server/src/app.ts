import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./routes/bookRoutes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Database connected");
    const PORT = process.env.PORT || 5555;
    app.listen(PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.error("Failed to connect to database", e);
  });

app.use("/books", bookRouter);
