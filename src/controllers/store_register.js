const stores = require("../models/stores");

module.exports = {
    async getStoreRegister(req, res) {
        res.render('../views/cadastro_rest.ejs')
    },
    async postStoreRegister(req, res) {
        const parameters = req.body;

        console.log(parameters)

        const store = await stores.create({
            store_name: parameters.rest_name,
            // rest_adress: parameters.rest_adress,
            open_time: parameters.rest_open,
            close_time: parameters.rest_close
            // rest_email: parameters.rest_email //create input for this
        });

        console.log(store);

        res.render("../views/cadastro_rest.ejs")
    }
}