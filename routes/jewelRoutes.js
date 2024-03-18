const express = require("express");
const app = express.Router();
const {
    getJewelry,
    getJewelryFilter
} = require("../src/controllers/jewelController.js")

app.get("/joyas", getJewelry);
app.get("/joyas/filtros", getJewelryFilter);

module.exports = app;