const express = require('express');
const cityRouter = express.Router();

const { getCity, getCities, addCity, addCities, deleteCity, updateCity } = require('../controllers/citiesController');
const { verifyCityData } = require("../middlewares/verifications");

cityRouter.get("/cities", getCities);
cityRouter.get("/cities/:id", getCity);

cityRouter.post("/cities", verifyCityData, addCity);
cityRouter.post("/many-cities", verifyCityData, addCities);

cityRouter.delete("/cities/delete/:id", verifyCityData, deleteCity);

cityRouter.put("/cities/update/:id", updateCity);

module.exports = cityRouter;