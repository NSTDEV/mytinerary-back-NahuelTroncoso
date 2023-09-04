const express = require('express');
const router = express.Router();

const { getCity, getCities, addCity, addCities, deleteCity, deleteAllCities, updateCity, updateAllCities } = require('../controllers/citiesController');
const { verifyCityData } = require("../middlewares/verifications");

router.get("/cities", getCities);
router.get("/cities/:id", getCity);

router.post("/cities", verifyCityData, addCity);
router.post("/many-cities", verifyCityData, addCities);

router.delete("/cities/delete/:id", verifyCityData, deleteCity);
router.delete("/cities/delete-all/", verifyCityData, deleteAllCities);

router.put("/cities/update/:id", updateCity);
router.patch("/cities/update-all/", updateAllCities);

module.exports = router;