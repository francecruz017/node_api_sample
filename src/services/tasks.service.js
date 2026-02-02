import { tasks } from "../data/tasks.store.js";

let nextId = 1;

export function getAll() {
    return tasks;
}

export function create(title) {
    const task = {
        id: nextId++,
        title,
        completed: false,
        createdAt: new Date().toISOString(),
    };

    tasks.push(task);

    return task;
}