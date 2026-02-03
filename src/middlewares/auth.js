import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const requireAuth = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res
            .status(401)
            .json({
                error: "Unauthorized",
            });
    }

    const [, token] = header.split(" ");

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.userId = payload.userId;
        next();
    } catch {
        return res
            .status(401)
            .json({
                error: "Invalid token",
            })
    }
}