import { Schema, model, Types } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
        minLength: [4, "Make must be at least 4 characters long!"],
    },
    model: {
        type: String,
        minLength: [4, "Model must be at least 4 characters long!"],
    },
    year: {
        type: Number,
        min: 1950,
        max: 2050,
    },
    description: {
        type: String,
        minLength: [11, "Description must be more than 10 characters long!"],
    },
    price: {
        type: Number,
        min: [0, "Price can't be negative!"],
    },
    img: {
        type: String,
        required: true,
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: "User",
    },
});

const Furniture = model("Furniture", furnitureSchema);

export default Furniture;
