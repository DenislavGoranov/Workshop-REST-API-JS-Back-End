import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const furniture = await furnitureService.getAll();

    res.json(furniture);
});

furnitureController.post("/", async (req, res) => {
    const furnitureData = req.body;

    const userId = req.user.id;

    const createdFurniture = await furnitureService.create(
        furnitureData,
        userId
    );

    res.json(createdFurniture);
});

furnitureController.get("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getById(furnitureId);

    res.json(furniture);
});

furnitureController.put("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const updatedFurnitureData = req.body;

    await furnitureService.update(furnitureId, updatedFurnitureData);

    res.json({ ok: true });
});

export default furnitureController;
