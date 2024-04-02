const sql = require("sequelize")
const database = require("../config/db")

const orders = database.define("Orders", {
    order_id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = orders