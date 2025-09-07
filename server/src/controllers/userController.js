import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post("/register", async (req, res) => {
    const userData = req.body;

    try {
        const result = await userService.register(userData);

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

userController.post("/login", async (req, res) => {
    const userData = req.body;
    try {
        const result = await userService.login(userData);

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

userController.get("/logout", async (req, res) => {
    res.json({ ok: true });
});

export default userController;
