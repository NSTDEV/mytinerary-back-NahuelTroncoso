const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().min(10).max(30).required().messages({
        "string.email": "Please enter a valid email",
        "string.min": "Need more of 9 characters to the email",
        "string.max": "Need less than 25 characters to the email",
        "string.empty": "Please enter an email",
        "any.required": "Please enter an email",
    }),
    password: Joi.string().alphanum().min(5).required().messages({
        "string.alphanum": "Please enter a password",
        "string.min": "Need more of 5 characters to the password",
        "string.empty": "Please enter a password",
        "any.required": "Please enter a password",
    }),
    name: Joi.string(),
    lastname: Joi.string(),
    country: Joi.string(),
    picture: Joi.string(),
});

const verifyAuthData = (req, res, next) => {
    const payload = req.body;
    const validatedData = userSchema.validate(payload, { abortEarly: false });

    if (validatedData.error) {
        return res.status(400).json({ message: validatedData.error.details.map((err) => err.message) })
    };

    next();
};

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
};

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
};

module.exports = { verifyCityData, verifyItineraryData, verifyAuthData };