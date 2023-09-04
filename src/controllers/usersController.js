const User = require("../models/User");
const City = require("../models/City");

const addUser = async (req, res) => {
    try {
        let { id } = req.query;

        let cityFound = await City.findById(id);
        let newUser = await User.create({ userId: "VIN001", name: cityFound });

        await cityFound.updateOne({ users: [...cityFound.users, newUser] });
        let cityFoundUpdate = await City.findById(id).populate("users");

        res.status(200).json({
            message: "User has been updated succesfully",
            city: cityFoundUpdate
        })

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addUser };