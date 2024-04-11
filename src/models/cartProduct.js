const sql = require("sequelize")
const database = require("../config/db")
const cart = require("./carts")
const product = require("./products")

const cartProduct = database.define("CartProduct");

cartProduct.belongsTo(cart, {
    foreignKey: 'cart_id'
})

cartProduct.belongsTo(product, {
    foreignKey: 'product_id'
})

module.exports = cartProduct