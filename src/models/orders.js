const sql = require("sequelize")
const database = require("../config/db")
const user = require("./users")
const store = require("./stores")
const cart = require("./carts")
const pay = require("./payments")

const orders = database.define("Orders", {
    order_id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})
orders.belongsTo(store, {
    foreignKey: 'store_id'
})
orders.belongsTo(user, {
    foreignKey: 'user_id'
})
orders.belongsTo(cart, {
    foreignKey: 'cart_id'
})
orders.belongsTo(pay, {
    foreignKey: 'payment_id'
})
module.exports = orders