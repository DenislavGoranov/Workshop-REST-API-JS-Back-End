import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/FurnitureWorkshop")
    .then(() => console.log("✅ Successfully connected to DB"))
    .catch((error) => console.error("❌ Can't connect to DB:", error.message));

app.use(routes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.get("/data/catalog", (req, res) => {
    res.json([]);
});

app.listen(3030, () => {
    console.log("🚀 Server is listening on http://localhost:3030");
});
