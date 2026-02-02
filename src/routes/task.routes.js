import { Router } from "express";
import * as controller from "../controllers/task.controller.js";
import { parseTaskId } from "../middlewares/parseTaskIds.js";

const router = Router();

router.get("/", controller.list);
router.post("/", controller.create);

router.get("/:id", parseTaskId, controller.getById);
router.delete("/:id", parseTaskId, controller.remove);
router.patch("/:id/complete", parseTaskId, controller.updateCompleted);

export default router;