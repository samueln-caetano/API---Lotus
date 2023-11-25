import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDatabase from "./database/db.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDatabase();

app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is runnig on port:", process.env.PORT);
});
