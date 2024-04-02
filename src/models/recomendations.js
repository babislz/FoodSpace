const sql = require("sequelize")
const database = require("../config/db")

const recomendations = database.define("Recomendations", {
    rec_id: {
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = recomendations