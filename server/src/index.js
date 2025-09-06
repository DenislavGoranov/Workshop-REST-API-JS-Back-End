import express from "express";
import cors from "cors";
import mongoose from "mongoose";
try {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Furniture Workshop",
    });
    console.log("Successfully connected to DB");
} catch (error) {
    console.log("Can't connect to DB");
}

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json();
});

app.get("/data/catalog", (req, res) => {
    res.json({});
});

app.listen(3030, () =>
    console.log("Server is listening on http://localhost:3030")
);
