import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    try {
        const furniture = await furnitureService.getAll();

        res.json(furniture);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

furnitureController.post("/", async (req, res) => {
    const furnitureData = req.body;
    const userId = req.user.id;
    try {
        const createdFurniture = await furnitureService.create(
            furnitureData,
            userId
        );

        res.json(createdFurniture);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

furnitureController.get("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;
    try {
        const furniture = await furnitureService.getById(furnitureId);

        res.json(furniture);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

furnitureController.put("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const updatedFurnitureData = req.body;

    try {
        await furnitureService.update(furnitureId, updatedFurnitureData);

        res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

furnitureController.delete("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;

    try {
        await furnitureService.delete(furnitureId);

        res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

export default furnitureController;
