import { Router } from "express";
import * as controller from "../controllers/task.controller.js";

const router = Router();

router.get("/", controller.list);
router.post("/", controller.create);

router.get("/:id", controller.getById);

export default router;