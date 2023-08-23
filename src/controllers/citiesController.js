const City = require("../models/city");

const getCities = async (req, res) => {
  try {
    const cities = await City.find().populate('accounts');
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCity = async (req, res) => {
    try {
        let { id } = req.params;

        let cityFound = await City.findById({ _id: id });

        res.status(201).json({ cityFound });
    } catch (error) {
        res.status(500).json({ message: error });
    };
};

const addCity = async (req, res) => {
    try {
        let payload = req.body;
        console.log(payload);

        let createdCity = await City.create(payload);

        res.status(201).json({
            "message": "City has been added",
            "city": createdCity
        })
    } catch (error) {
        res.status(500).json({ message: error })
    };
};

const deleteCity = async (req, res) => {
    try {
        let { id } = req.params;
        await City.deleteOne({ _id: id });

        res.status(201).json({
            "message": "City has been deleted"
        })
    } catch (error) {
        res.status(500).json({ message: error });
    };
};

const updateCity = async (req, res) => {
    try {
        let { id } = req.params; // Obtener el ID de los parámetros de la solicitud
        let updatedData = req.body; // Obtener los datos actualizados de la solicitud

        // Usar el método findByIdAndUpdate para actualizar la ciudad por su ID
        let updatedCity = await City.findByIdAndUpdate(id, updatedData, { new: true });

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



module.exports = { getCities, getCity, addCity, deleteCity, updateCity };