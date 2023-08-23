const verifyDataCity = (req, res, next) => {
    let { name, country, image, language, id } = req.body;

    if (name == "") {
        return res.status(400).json({ message: "Invalid city name..." });
    };

    if (country == "") {
        return res.status(400).json({ message: "Invalid city country..." });
    };

    if (image == "") {
        return res.status(400).json({ message: "Invalid city image..." });
    };

    if (language == "") {
        return res.status(400).json({ message: "Invalid city language..." });
    };

    if (id == "") {
        return res.status(400).json({ message: "Invalid city id..." });
    };

    if (!name || !country || !image || !language){
        return res.status(400).json({ message: "Invalid data..." });
    };

    next();
}

module.exports = {verifyDataCity};