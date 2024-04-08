const stores = require("../models/stores")
const { Sequelize, Op} = require("sequelize");

module.exports = {
    async getRestaurantesPage(req, res) {
        
        res.render('../views/restaurantes.ejs')
    },

    async getStores(req, res) {
        const filter = req.query.filter;

        let store_list;

        if (!filter) {
            store_list = stores.findAll({
                raw: true,
            });
        } else {
            store_list = stores.findAll({
                raw: true,
                where: {
                    store_name: {[Op.like]: `%${filter}%`}
                }
            });
        }
        
        store_list.then(x => {
            res.statusCode = 200;
            res.send(JSON.stringify(x));
        }).catch(err => {
            console.log(err.message)
            res.statusCode = 500;
            res.send("Internal server error!");
        });
    }

}