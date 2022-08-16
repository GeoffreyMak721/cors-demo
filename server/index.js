const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;

// app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`<h1>Bienvenu dans notre server de test avec cors</h1>
    <p>Salut</p>`);
});

app.post("/users", (req, res) => {
  res.set("Content-Type", "application/json");
  res.json({ nom: "Dupont", prenom: "Jean" });
});

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});
