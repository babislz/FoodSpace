const sql = require("sequelize")
const database = require("../config/db")
const user = require("./users")
const store = require("./stores")

const favorites = database.define("Favorites", {
    favorite_id:{
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})
favorites.belongsTo(user, {
    foreignKey: 'user_id'
})
favorites.belongsTo(store, {
    foreignKey: 'store_id'
})

module.exports = favorites