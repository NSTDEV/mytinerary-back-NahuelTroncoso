const verifyCityData = (req, res, next) => {
    let { name, country, image, language, id } = req.body;

    if (name == "") {
        return res.status(400).json({ message: "Invalid city name..." });
    }

    else if (country == "") {
        return res.status(400).json({ message: "Invalid city country..." });
    }

    else if (image == "") {
        return res.status(400).json({ message: "Invalid city image..." });
    }

    else if (language == "") {
        return res.status(400).json({ message: "Invalid city language..." });
    }

    else if (id == "") {
        return res.status(400).json({ message: "Invalid city id..." });
    }

    else if (!name || !country || !image || !language) {
        return res.status(400).json({ message: "Invalid data..." });
    };

    next();
}

const verifyItineraryData = (req, res, next) => {
    let { name, city, activity, price } = req.body;

    if (name == "") {
        return res.status(400).json({ message: "Invalid itinerary name..." });
    }

    else if (city == "") {
        return res.status(400).json({ message: "Invalid itinerary city..." });
    }

    else if (price == "") {
        return res.status(400).json({ message: "Invalid itinerary price..." });
    }

    else if (!name || !city || !price) {
        return res.status(400).json({ message: "Invalid data..." });
    };

    next();
}

module.exports = { verifyCityData, verifyItineraryData };