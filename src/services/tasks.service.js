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
    return await repo.findById(id);
}