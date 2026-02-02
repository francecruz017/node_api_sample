import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = await open({
    filename: "src/db/database.db",
    driver: sqlite3.Database,
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER NOT NULL,
    created_at TEXT NOT NULL
  )
`);