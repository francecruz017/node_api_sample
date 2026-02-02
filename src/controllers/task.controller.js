import * as service from "../services/tasks.service.js";

export const list = async (req, res) => {
    const allTasks = await service.getAll();
    res.json(allTasks);
}

export const create = async (req, res) => {
    const { title } = req.body;

    if ( !title || title.length < 3 ) {
        return res
            .status(400)
            .json({
                error: "Title must be at least 3 characters long."
            });
    }

    const task = await service.create(title);
    res.status(201).json({task});
}

export const getById = async (req, res) => {
    const id = Number(req.params.id);

    if ( Number.isNaN(id) ) {
        return res
            .status(400)
            .json({
                error: "Invalid task id."
            });
    }

    const task = await service.getById(id);

    if (!task) {
        return res
            .status(400)
            .json({
                error: "Task not found."
            });
    }

    res.json(task);
}