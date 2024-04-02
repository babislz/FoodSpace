const sql = require("sequelize")
const database = require("../config/db")

const favorites = database.define("Favorites", {
    favorite_id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = favorites