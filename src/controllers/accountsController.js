const Account = require("../models/Account");
const City = require("../models/city");

const addAccount = async (req, res) => {
    try{
        let {id} = req.query;

        let cityFound = await City.findById(id);
        let newAccount = await Account.create({number: "VIN001", _user: cityFound});

        await cityFound.updateOne({accounts: [...cityFound.accounts, newAccount]});
        let cityFoundUpdate = await City.findById(id).populate("accounts");

        res.status(200).json({
            message: "User has been updated succesfully",
            city:cityFoundUpdate
        })

    } catch(error) {
        res.status(400).json({message: error.message});
    }
};

module.exports = {addAccount};