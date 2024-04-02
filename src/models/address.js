const sql = require("sequelize")
const database = require("../config/db")

const address = database.define("Address", {
    address_id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    address_city:{
        type: sql.STRING(255),
        allowNull: false
    },
    address_number:{
        type: sql.INTEGER,
        allowNull: false
    },
    address_street:{
        type: sql.STRING(255),
        allowNull: false
    }
})

module.exports = address