import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes.js";
import { isAuth } from "./utils/authUtils.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/FurnitureWorkshop")
    .then(() => console.log("✅ Successfully connected to DB"))
    .catch((error) => console.error("❌ Can't connect to DB:", error.message));

app.use(isAuth);
app.use(routes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(3030, () => {
    console.log("🚀 Server is listening on http://localhost:3030");
});
