import * as repo from "../repositories/tasks.repository.js";

export const getAll = async () => {
    return await repo.findAll();
}

export const create = async (title) => {
    const task = {
        title,
        completed: false,
        createdAt: new Date().toISOString(),
    };

    return await repo.create(task);
}

export const getById = async (id) => {
    const task = await repo.findById(id);
    if (!task) throw new Error("TASK_NOT_FOUND");
    return task;
}

export const remove = async (id) => {
    const task = await repo.remove(id);
    if (!task) throw new Error("TASK_NOT_FOUND");
    return task;
}

export const updateCompleted = async (id, isCompleted = false) => {
    const task = await repo.updateCompleted(id, isCompleted);
    if (!task) throw new Error("TASK_NOT_FOUND");
    return task;
} 