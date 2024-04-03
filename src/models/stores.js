const sql = require("sequelize")
const database = require("../config/db")
const address = require("./address")

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
    }
})

stores.belongsTo(address, {
    foreignKey: 'address_id'
})
module.exports = stores