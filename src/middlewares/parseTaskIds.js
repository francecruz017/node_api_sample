import { parseId } from "../utils/parseId.js"

export const parseTaskId = (req, res, next) => {
    const id = parseId(req.params.id);

    if (!id) {
        return res
            .status(400)
            .json({
                error: "Invalid task id."
            });
    }

    req.taskId = id;
    next();
}