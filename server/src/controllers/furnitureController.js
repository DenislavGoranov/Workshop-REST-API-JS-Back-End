import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const furniture = await furnitureService.getAll();

    res.json(furniture);
});

furnitureController.post("/", async (req, res) => {
    const furnitureData = req.body;

    const createdFurniture = await furnitureService.create(furnitureData);

    res.json(createdFurniture);
});

furnitureController.get("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getById(furnitureId);

    res.json(furniture);
});

export default furnitureController;
