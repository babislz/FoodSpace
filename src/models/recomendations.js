const sql = require("sequelize")
const database = require("../config/db")
const product = require("./products")
const store = require("./stores")

const recomendations = database.define("Recomendations", {
    rec_id: {
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})
recomendations.belongsTo(product, {
    foreignKey: 'product_id'
})
recomendations.belongsTo(store, {
    foreignKey: 'store_id'
})

module.exports = recomendations