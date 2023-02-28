const express = require("express");
const morgan = require("morgan")
const Axios = require("axios");
const path = require("path");
const app = express();

module.exports = app;

app.use(express.json());
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api/api'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

app.use(express.static(path.join(__dirname, "..", "/public")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});
