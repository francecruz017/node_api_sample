import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as usersRepo from "../repositories/users.repository.js";

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRATION = "1h"

export const register = async (email, password) => {
    const existing = await usersRepo.findByEmail(email);

    if (existing) {
        throw new Error("USER_EXIST");
    }

    const hashed = await bcrypt.hash(password, 10);

    return usersRepo.create({
        email,
        password: hashed,
        createdAt: new Date().toISOString(),
    });
}

export const login = async (email, password) => {
    const user = await usersRepo.findByEmail(email);

    if (!user) {
        throw new Error("INVALID_CREDENTIALS");
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        throw new Error("INVALID_CREDENTIALS");
    }

    const token = jwt.sign(
        { userid: user.id },
        JWT_SECRET,
        { expiresIn: TOKEN_EXPIRATION }
    );

    return token;
}