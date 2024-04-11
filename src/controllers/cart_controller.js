const cartProduct = require("../models/cartProduct");
const carts = require("../models/carts");

module.exports = {
    async addItem(req, res) {
        const product_id = req.query.product_id;
        const user_id = req.query.user_id;
        const store_id = req.query.store_id;


        const new_cart = await carts.create({
            cart_user: user_id,
            cart_price: 0
        })

        const cart_product = await cartProduct.create({
            cart_id: new_cart.cart_id,
            product_id: product_id
        })
    },

    async getCart(req, res) {
        const id = req.query.user_id;
        
        const cart = await carts.findOne({
            where: {
                cart_user: id
            }
        });

        const products = await carts.findAll({
            include: [{
                model: cartProduct,
                where: {
                    cart_id: cart.cart_id
                }
            }]
        })

        res.send(JSON.stringify(products));
    }
}