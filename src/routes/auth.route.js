import { Router } from "express";

import authController from "../controllers/auth.controller.js";

const router = Router();

router.post("/signUp", authController.signUp);
router.get("/signIn", authController.signIn);

export default router;
