const express = require('express');
const itineraryRouter = express.Router();

const { getItineraries, getItinerary, getItinerariesByCity, createItinerary, updateItinerary, deleteItinerary } = require("../controllers/itineraryController");

const { verifyItineraryData } = require("../middlewares/verifications");

itineraryRouter.get("/itineraries", getItineraries);
itineraryRouter.get("/itineraries/:id", getItinerary);
itineraryRouter.get("/itineraries/city/:cityId", getItinerariesByCity);

itineraryRouter.post("/itineraries", verifyItineraryData, createItinerary);

itineraryRouter.delete("/itineraries/delete/:id", deleteItinerary);

itineraryRouter.put("/itineraries/update/:id", verifyItineraryData, updateItinerary);

module.exports = itineraryRouter;