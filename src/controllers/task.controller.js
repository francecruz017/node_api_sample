import * as service from "../services/tasks.service.js";

export const list = (req, res) => {
    const allTasks = service.getAll();
    res.json(allTasks);
}

export const create = (req, res) => {
    const { title } = req.body;

    if ( !title || title.length < 3 ) {
        return res
            .status(400)
            .json({
                error: "Title must be at least 3 characters long."
            });
    }

    const task = service.create(title);
    res.status(201).json({task});
}