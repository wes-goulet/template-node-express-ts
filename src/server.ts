import express from "express";

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (_req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Running server at localhost:${PORT}`));
