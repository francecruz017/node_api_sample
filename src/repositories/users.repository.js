import { db } from '../db/index.js';

export const findByEmail = async (email) => {
    return await db.get(
        "SELECT * FROM users WHERE email = ?",
        email
    );
}

export const create = async (user) => {
    const result = await db.run(
        `INSERT INTO users (email, password, created_at)
        VALUES (?, ?, ?)`,
        user.email,
        user.password,
        user.createdAt,
    );

    return {
        id: result.lastID,
        email: user.email,
        createdAt: user.createdAt,
    }
}