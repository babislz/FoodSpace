const sql = require("sequelize")
const database = require("../config/db")
const address = require("./address")
const user = require("./users")

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
    open_time: {
        type: sql.STRING(8),
        allowNull: false
    },
    close_time: {
        type: sql.STRING(8),
        allowNull: false
    },
    banner_url: {
        type: sql.STRING(250),
        allowNull: true,
    },
    profile_url: {
        type: sql.STRING(250),
        allowNull: true,
    }
})

stores.belongsTo(address, {
    foreignKey: 'address_id'
})

stores.belongsTo(user, {
    foreignKey: 'user_id'
})  

module.exports = stores