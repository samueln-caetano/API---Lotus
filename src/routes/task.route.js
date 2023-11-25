import { Router } from "express";

import taskController from "../controllers/task.controller.js";

const router = Router();

router.post("/:userId", taskController.addTask);
router.get("/:userId", taskController.findAll);
router.get("/:userId/:id", taskController.findById);
router.patch("/:userId/:id", taskController.updateTask);
router.delete("/:userId/:id", taskController.removeTask);

export default router;
