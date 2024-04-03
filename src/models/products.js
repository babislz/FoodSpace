const sql = require("sequelize")
const database = require("../config/db")
const store = require("./stores")

const products = database.define("Products", {
    product_id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_name:{
        type: sql.STRING(255),
        allowNull: false
    },
    product_price:{
        type: sql.DECIMAL(9,2),
        allowNull: false
    }
})
products.belongsTo(store, {
    foreignKey: 'store_id'
})

module.exports = products