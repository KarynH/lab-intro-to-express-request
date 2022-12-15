const express = require("express");

const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${req.params.verb} ${req.params.adjective} ${req.params.noun} `
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `99 little bugs in the code <a href= "http://localhost:8888/bugs/101">pull one down patch it around</a>`
  );
});

app.get("/bugs/101", (req, res) => {
  res.send("Number of bugs to fix: 101");
});

app.get("/bugs/:numOfBugs", (req, res) => {
  const numOfBugs = Number(req.params.numOfBugs);
  res.send(`${numOfBugs} little bugs in the code <a href= "http://localhost:8888/bugs/:numOfBugs"> pull one down patch it around </a> `);
});

module.exports = app;