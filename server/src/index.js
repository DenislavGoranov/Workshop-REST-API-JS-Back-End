import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("in here");
    res.end();
});

app.listen(3030, () =>
    console.log("Server is listening on http://localhost:3030")
);
