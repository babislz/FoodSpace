const stores = require("../models/stores");

module.exports = {
    async getStoreRegister(req, res) {
        res.render('../views/cadastro_rest.ejs')
    },
    async postStoreRegister(req, res) {
        const parameters = req.body;

        let foto_name = "restaurante/r_img_default.svg"

        if (req.file ) {
            if (req.file.filename !== "")
            foto_name = req.file.filename;
        }

        const store = await stores.create({
            store_name: parameters.rest_name,
            // rest_adress: parameters.rest_adress,
            open_time: parameters.rest_open,
            close_time: parameters.rest_close,
            user_id: parameters.user_id,
            profile_url: foto_name
            // rest_email: parameters.rest_email //create input for this
        });

        console.log(store);

        res.render("../views/cadastro_rest.ejs")
    },


}