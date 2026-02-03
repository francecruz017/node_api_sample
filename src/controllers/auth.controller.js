import * as authService from "../services/auth.service.js";

export const register = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({
                error: "Email and password required.",
            });
    }

    const user = await authService.register(email, password);
    res.status(201).json(user);
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({
                error: "Email and password required.",
            });
    }

    const token = await authService.login(email, password);
    res.status(200).json({ token });
}