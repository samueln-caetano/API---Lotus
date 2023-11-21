import { Router } from "express";

import userController from "../controllers/auth.controller.js";

const router = Router();

router.post("/", userController.signUp);
router.get("/", userController.signIn);

export default router;
