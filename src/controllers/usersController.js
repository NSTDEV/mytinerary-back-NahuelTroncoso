const User = require("../models/User");

const editUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const updatedUserData = req.body;

        const user = await User.findById({ _id });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (updatedUserData.name) {
            user.name = updatedUserData.name;
        }

        if (updatedUserData.picture) {
            user.picture = updatedUserData.picture;
        }

        if (updatedUserData.country) {
            user.country = updatedUserData.country;
        }

        await user.save();
        res.status(200).json({ message: "User edited", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { editUser };
