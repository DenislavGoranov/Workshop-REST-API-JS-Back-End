import Furniture from "../Models/Furniture.js";

export default {
    getAll() {
        return Furniture.find({});
    },
    create(furnitureData) {
        return Furniture.create(furnitureData);
    },
};
