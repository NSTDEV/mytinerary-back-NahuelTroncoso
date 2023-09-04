const Itinerary = require("../models/Itinerary");
const City = require("../models/City");
const Activity = require("../models/Activity")

const getItineraries = async (req, res) => {
    try {
        const itineraries = await Itinerary.find();
        res.status(200).json(itineraries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItinerariesByCity = async (req, res) => {
    try {
        const cityId = req.params.cityId;
        const itineraries = await Itinerary.find({ city: cityId });
        res.status(200).json(itineraries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.id;
        const itinerary = await Itinerary.findById(itineraryId);

        if (!itinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        res.status(200).json(itinerary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createItinerary = async (req, res) => {
    try {
        const itineraryData = req.body;
        const cityId = itineraryData.city;

        const city = await City.findById(cityId);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        } else {
            const activitiesData = itineraryData.activities;
            const activities = await Activity.create(activitiesData);

            const newItinerary = new Itinerary({
                ...itineraryData,
                city: cityId,
                activities: activities.map((activity) => activity._id),
            });

            const createdItinerary = await newItinerary.save();
            city.itinerary.push(createdItinerary._id);

            await city.save();

            res.status(201).json(createdItinerary);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.id;
        const updatedData = req.body;
        const updatedItinerary = await Itinerary.findByIdAndUpdate(
            itineraryId,
            { $set: updatedData },
            { new: true }
        );
        if (!updatedItinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        res.status(200).json(updatedItinerary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.id;
        await Itinerary.findByIdAndDelete(itineraryId);
        res.status(200).json({ message: "Itinerary has been deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getItineraries, getItinerary, getItinerariesByCity, createItinerary, updateItinerary, deleteItinerary };