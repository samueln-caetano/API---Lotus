import { Router } from "express";

import userController from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.findAll);
router.get("/:id", userController.findById);
router.patch("/:id", userController.uptadeUser);
router.delete("/:id", userController.removeUser);


export default router;
