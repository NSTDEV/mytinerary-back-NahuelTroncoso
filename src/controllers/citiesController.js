const City = require("../models/City");

const getCity = async (req, res) => {
    try {
        let { id } = req.params;

        let cityFound = await City.findById(id);

        if (!cityFound) {
            return res.status(404).json({ message: "City not found" });
        };

        res.status(200).json(cityFound);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const getCities = async (req, res) => {
    try {
        const filters = {};

        if (req.query.name) {
            filters.name = { $regex: req.query.name, $options: 'i' };
        }

        if (req.query.country) {
            filters.country = { $regex: req.query.country, $options: 'i' };
        }

        const cities = await City.find(filters).populate('user');
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const addCity = async (req, res) => {
    try {
        let payload = req.body;
        let createdCity = await City.create(payload);

        if (payload.itineraries && Array.isArray(payload.itineraries)) {
            const createdItineraries = await Itinerary.insertMany(payload.itineraries);

            createdCity.itinerary = createdItineraries.map((itinerary) => itinerary._id);
            await createdCity.save();
        }

        res.status(201).json({
            "message": "City has been added",
            "city": createdCity
        })
    } catch (error) {
        res.status(500).json({ message: error })
    };
};


const addCities = async (req, res) => {
    try {
        const citiesToAdd = req.body;

        const createdCities = await City.insertMany(citiesToAdd);

        res.status(201).json({
            message: `${createdCities.length} cities have been added`,
            cities: createdCities
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCity = async (req, res) => {
    try {
        let { id } = req.params;
        await City.deleteOne({ id: id });

        res.status(201).json({
            "message": "City has been deleted"
        })
    } catch (error) {
        res.status(500).json({ message: error });
    };
};

const deleteAllCities = async (req, res) => {
    try {
        const deleteResult = await City.deleteMany();

        res.status(200).json({
            message: "All cities have been deleted",
            numDeleted: deleteResult.deletedCount
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCity = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedCity = await City.findByIdAndUpdate(id, { $set: updatedData }, { new: true });

        if (!updatedCity) {
            return res.status(404).json({ message: "City not found" });
        }

        res.status(200).json({
            message: "City has been updated",
            city: updatedCity
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAllCities = async (req, res) => {
    try {
        const updatedData = req.body;

        const updateResult = await City.updateMany({}, { $set: updatedData });

        res.status(200).json({
            message: "All cities have been updated",
            numAffected: updateResult.nModified
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCities, getCity, addCity, addCities, deleteCity, updateCity, updateAllCities, deleteAllCities };