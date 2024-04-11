const stores = require('../models/stores')
const products = require('../models/products')
const highlights = require('../models/highlights');
const product = require('../models/products');
const sql = require('../config/db')

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

        const product = await products.findAll({
            where: {"store_id": id}
        });

        let not_found = false;
        if (!store) {
            not_found = true; 
        }

        const highliht_list = await sql.query("SELECT * from Highlights H inner join Products P on H.product_id = P.product_id having p.store_id = " + store.store_id)


        res.render("../views/restaurante.ejs", {store, not_found, product, highlights: highliht_list})
    },

    async getProdutos(req, res) {
        const id = req.query;

        if (!id) {
            res.statusCode = 500;
            res.send("Invalid ID!");

            return;
        }

        const product_list = await products.findAll({
            where: {store_id: id}
        })

        res.send(JSON.stringify(product_list));
    },

    async editBanner(req, res) {
        let foto_name = "comida.jpg"

        if (req.file) {
            foto_name = req.file.filename;
        }

        await stores.update({banner_url: foto_name}, {where: {store_id: req.body.store_id}})

        res.redirect("/restaurante?id="+req.body.store_id);
    },

    async createProduct(req, res) {
        const values = req.body;

        let foto_name = "default.png"
        if (req.file) {
            foto_name = req.file.filename;
        }
        
        if(!values) {
            res.send("Error!")
        }

        await products.create({
            product_name: values.nome_produto,
            product_price: values.preco_produto,
            product_photo:  foto_name,
            product_description: values.desc_produto,
            store_id: values.store_id
        });

        res.redirect("/restaurante?id=" + values.store_id);
    }, 
    async createHighlight(req, res) {
        const values = req.body;
        
        if(!values) {
            res.send("Error!")
        }

        await highlights.create({
            product_id: req.body.id_produto,
            description: req.body.desc_highlight
        });

        res.redirect("/restaurante?id=" + values.store_id);
    }
}