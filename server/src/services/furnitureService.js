import Furniture from "../Models/Furniture.js";

export default {
    getAll() {
        return Furniture.find({});
    },
    create(furnitureData, userId) {
        return Furniture.create({ ...furnitureData, _ownerId: userId });
    },
    getById(furnitureId) {
        return Furniture.findById(furnitureId);
    },
    update(furnitureId, furnitureData) {
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData);
    },
};
