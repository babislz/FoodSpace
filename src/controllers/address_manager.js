const { where } = require("sequelize");
const addresses = require("../models/address");
const users = require("../models/users");


module.exports = {
    async registerAddress(req, res) {
        const parameters = req.body;  

        addresses.create({
            user_id: parameters.user_id,
            address_city: parameters.city,
            address_number: parameters.number,
            address_street: parameters.street
        }).then(x => {
            res.statusCode = 200; 

            res.send("Created Sucessfuly!")
        }).catch(err => {
            console.log(err.mesasge);

            res.statusCode = 500;
            res.send("Unable to create entry!")
        });
    },

    async getAddresses(req, res) {
        const data = req.query;

        let user;
        try {
            user = await users.findOne({
                where: {
                    user_id: data.user_id,
                    user_name: data.user_name,
                    user_email: data.user_email,
                }
            });

        } catch (err) {
            console.log(err);
        }

        if (!user) {
            res.statusCode = 403;

            res.send("Acess denied!")

            return;
        }

        const address_list = await addresses.findAll({
            where: {
                user_id: user.user_id
            }
        });

        res.statusCode = 200;
        res.send(JSON.stringify(address_list));
    }
}