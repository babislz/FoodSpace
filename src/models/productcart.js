const sql = require("sequelize")
const database = require("../config/db")
const cart = require("./carts")
const product = require("./products")

const productcart = database.define("ProductCart", {
    id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})
productcart.belongsTo(cart, {
    foreignKey: 'cart_id'
})
productcart.belongsTo(product, {
    foreignKey: 'product_id'
})
module.exports = productcart