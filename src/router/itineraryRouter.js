const express = require('express');
const router = express.Router();

const { getItineraries, getItinerary, getItinerariesByCity, createItinerary, updateItinerary, deleteItinerary } = require("../controllers/itineraryController");

const { verifyItineraryData } = require("../middlewares/verifications");

router.get("/itineraries", getItineraries);
router.get("/itineraries/:id", getItinerary);
router.get("/itineraries/city/:cityId", getItinerariesByCity);

router.post("/itineraries", verifyItineraryData, createItinerary);

router.delete("/itineraries/delete/:id", deleteItinerary);

router.put("/itineraries/update/:id", verifyItineraryData, updateItinerary);

module.exports = router;