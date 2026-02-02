import { db } from "../db/index.js";

const toDbBoolean = (value) => (value ? 1 : 0);
const fromDbBoolean = (value) => Boolean(value);

export const findAll = async () => {
    const rows = await db.all("SELECT * FROM tasks");

    return rows.map(mapRowToTask);
}

export const findById = async (id) => {
    const row = await db.get(
        "SELECT * FROM tasks WHERE id = ?",
        id
    );

    return mapRowToTask(row);
}

export const create = async (task) => {
    const result = await db.run(
        `INSERT INTO tasks (title, completed, created_at)
        VALUES (?, ?, ?);`,
        task.title,
        toDbBoolean(task.completed),
        task.createdAt
    );

    return {
        id: result.lastID,
        title: task.title,
        completed: task.completed,
        createdAt: task.createdAt
    }
}

export const updateCompleted = async (id, isCompleted) => {
  const result = await db.run(
    "UPDATE tasks SET completed = ? WHERE id = ?",
    toDbBoolean(isCompleted),
    id
  );

  return result.changes;
};

export const remove = async (id) => {
    const result = await db.run(
        "DELETE FROM tasks WHERE id = ?",
        id,
    );

    return result.changes;
}

const mapRowToTask = (row) => {
  if (!row) return null;

  return {
    id: row.id,
    title: row.title,
    completed: fromDbBoolean(row.completed),
    createdAt: row.created_at
  };
};