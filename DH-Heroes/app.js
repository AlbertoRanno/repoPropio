const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/babbage", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/babbage.html"));
});

app.get("/berners-lee", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/clarke.html"));
});

app.get("/hamilton", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/hamilton.html"));
});

app.get("/hopper", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/hopper.html"));
});
app.get("/lovelace", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/lovelace.html"));
});

app.get("/turing", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/turing.html"));
});

app.listen(3030, () => console.log("esto fue exitoso"));
