import { db } from "../db/index.js";

export const findAll = async () => {
    return await db.all("SELECT * FROM tasks");
}

export const findById = async (id) => {
    return await db.get(
        "SELECT * FROM tasks WHERE id = ?",
        id
    );
}

export const create = async (task) => {
    const result = await db.run(
        `INSERT INTO tasks (title, completed, created_at)
        VALUES (?, ?, ?);`,
        task.title,
        task.completed,
        task.createdAt
    );

    return {
        id: result.lastID,
        title: task.title,
        completed: task.completed,
        create_at: task.createAt
    }
}