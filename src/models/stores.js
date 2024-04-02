const sql = require("sequelize")
const database = require("../config/db")

const stores = database.define("Stores", {
    store_id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    store_name:{
        type: sql.STRING(255),
        allowNull: false
    },
    store_address:{
        type: sql.STRING(255),
        allowNull: false
    }
})

module.exports = stores