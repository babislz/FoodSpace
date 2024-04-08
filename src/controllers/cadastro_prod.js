const product = require("../models/products");

module.exports = {
    async prodGet(req, res) {
        res.render("../views/cadastro_prod.ejs")
    },
    async prodInsert(req, res) {
        const dados = req.body
        let foto = 'prod.png'
        if (req.file) 
        {
            foto = req.file.filename
        }
        await product.create({
            product_name: dados.rest_name,
            product_description: dados.rest_desc,
            product_price: dados.rest_price,
            product_photo: foto
        })
    }
}

