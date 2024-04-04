const stores = require('../models/stores')

module.exports = {
    async getRestaurante(req, res) {
        //recieves the query id

        const id = req.query.id;

        if (!id) {
            res.redirect("/restaurantes")

            return;
        }

        const store = await stores.findOne({
            where: {"store_id": id}
        });

        let not_found = false;
        if (!store) {
            not_found = true; 
        }

        res.render("../views/restaurante.ejs", {store, not_found})
    }
}