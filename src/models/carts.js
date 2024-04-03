const sql = require("sequelize")
const database = require("../config/db")
const store = require("./stores")

const carts = database.define("Carts", {
    cart_id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cart_user:{
        type: sql.STRING,
        allowNull: false
    },
    cart_price:{
        type: sql.DECIMAL(9,2)
    }
})
carts.belongsTo(store, {
    foreignKey: 'store_id'
})
module.exports = carts