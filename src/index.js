import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDatabase from "./database/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log("Server is runnig on port:", process.env.PORT);
});
