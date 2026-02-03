import { Router } from "express";
import * as controller from "../controllers/tasks.controller.js";
import { parseTaskId } from "../middlewares/parseTaskIds.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();

router.use(requireAuth);

router.get("/", controller.list);
router.post("/", controller.create);
router.get("/:id", parseTaskId, controller.getById);
router.patch("/:id/complete", parseTaskId, controller.updateCompleted);
router.delete("/:id", parseTaskId, controller.remove);

export default router;