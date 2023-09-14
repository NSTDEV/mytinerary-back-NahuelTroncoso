const User = require("../models/User");
const jwt = require('jsonwebtoken');

const secretKey = process.env.superSecretKey;

const generateToken = (user) => {
    const token = jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        secretKey,
        { expiresIn: '1h' }
    );
    return token;
};

const register = async (req, res) => {
    try {
        const payload = req.body;
        const userExists = await User.findOne({ email: payload.email });

        if (userExists) {
            return res.status(403).json({ message: "User already exists..." });
        }

        const userCreated = await User.create(payload);
        const token = generateToken(userCreated);
        console.log("User created");

        res.status(200).json({
            message: "User created successfully",
            token: token,
            userCreated
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = (req, res) => {
    try {
        const token = generateToken(req.user);

        res.status(200).json({
            message: "User successfully logged in",
            token: token,
            user: {
                email: req.user.email,
                id: req.user._id,
                name: req.user.name,
                picture: req.user.picture,
                country: req.user.country,
                roll: req.user.roll
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message })
    };
};

const logout = async (req, res) => {
    try {
        res.status(200).json({ message: 'Logged out', token: req.body })
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const authenticated = async (req, res) => {
    try {
        const token = generateToken(req.user);

        res.status(200).json({
            message: "Successfully authenticated",
            token: token,
            user: {
                email: req.user.email,
                id: req.user._id,
                name: req.user.name,
                picture: req.user.picture,
                country: req.user.country,
                roll: req.user.roll
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message })
    };
};

module.exports = { register, login, logout, authenticated }