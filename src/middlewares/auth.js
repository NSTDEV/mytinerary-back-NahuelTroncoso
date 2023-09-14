require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

const hashPassword = (req, res, next) => {
    try {
        const passwordPlain = req.body.password;
        const hashPassword = bcrypt.hashSync(passwordPlain, 10);

        req.body.password = hashPassword;

        next();
    } catch (error) {
        res.status(500).json({ error: error })
    };
};

const verifyPassword = (req, res, next) => {
    const passwordPlain = req.body.password;
    const hashPassword = req.user.password;

    const isValid = bcrypt.compareSync(passwordPlain, hashPassword);

    if (isValid) {
        next();
    } else {
        res.status(400).json({ message: "Wrong password" })
    };
};

const verifyUserExists = async (req, res, next) => {
    const { email } = req.body;
    const userFounded = await User.findOne({ email: email });

    if (userFounded) {
        req.user = userFounded;

        next();
    } else {
        res.status(400).json({ message: "User not found" });
    };
};

const passportVerificator = passport.use(
    new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.superSecretKey
    }, async (payload, done) => {
        try {
            let userFounded = await User.findOne({ email: payload.email });

            if (userFounded) {
                return done(null, userFounded);
            } else {
                return done(null);
            }
        } catch (error) {
            return done(error);
        };
    })
);

module.exports = { hashPassword, verifyPassword, verifyUserExists, passportVerificator };