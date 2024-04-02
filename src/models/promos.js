const sql = require("sequelize")
const database = require("../config/db")

const promos = database.define("Promos", {
    promo_id: {
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    promo_name: {
        type: sql.STRING(255),
        allowNull: false
    },
    promo_date: {
        type: sql.DATE,
        allowNull: false
    }
})

module.exports = promos