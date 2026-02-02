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
    res.status(201).json(task);
}

export const getById = async (req, res) => {
    const task = await service.getById(req.taskId);
    res.json(task);
}

export const remove = async (req, res) => {
  await service.remove(req.taskId);
  res.sendStatus(204);
};

export const updateCompleted = async (req, res) => {
  const task = await service.updateCompleted(req.taskId, true);
  res.json(task);
};