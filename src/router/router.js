const express = require('express');
const router = express.Router();
const { getCity, getCities, addCity, deleteCity, updateCity } = require('../controllers/citiesController');
const { verifyDataCity } = require("../middlewares/verifications");
const { addAccount } = require('../controllers/accountsController');

router.get("/cities", getCities);
router.get("/cities/:id", getCity);
router.post("/cities", verifyDataCity, addCity);
router.delete("/cities/delete/:id", deleteCity);
router.put("/cities/update/:id", verifyDataCity, updateCity);

router.post("/accounts", addAccount);

module.exports = router;